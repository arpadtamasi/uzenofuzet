import assert from "node:assert/strict";
import { randomBytes } from "node:crypto";
import { mkdtempSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { ChildStore, StoreError } from "../src/store.js";

function freshStore(): { store: ChildStore; path: string; key: Buffer } {
  const path = join(mkdtempSync(join(tmpdir(), "uzenofuzet-")), "children.json");
  const key = randomBytes(32);
  return { store: ChildStore.withKey(path, key), path, key };
}

const marci = {
  label: "Marci",
  username: "72123456789",
  password: "titkos-jelszo",
  instituteCode: "klik123456",
  instituteName: "Példa Általános Iskola",
};

test("a stored child round-trips, and the password comes back only through the key", () => {
  const { store, path, key } = freshStore();
  const saved = store.add(marci);

  assert.equal(saved.label, "Marci");
  assert.equal(store.password(saved.id), "titkos-jelszo");

  const reopened = ChildStore.withKey(path, key);
  assert.deepEqual(reopened.list().map((child) => child.label), ["Marci"]);
  assert.equal(reopened.password(saved.id), "titkos-jelszo");
});

test("the password is never on disk in the clear, and the file is owner-only", () => {
  const { store, path } = freshStore();
  store.add(marci);

  const raw = readFileSync(path, "utf8");
  assert.ok(!raw.includes("titkos-jelszo"));
  assert.ok(raw.includes("Marci"), "the readable half stays readable");
  assert.equal(statSync(path).mode & 0o077, 0, "no group or world access");
});

test("another key cannot open a stored password", () => {
  const { store, path } = freshStore();
  const saved = store.add(marci);

  const impostor = ChildStore.withKey(path, randomBytes(32));
  assert.throws(() => impostor.password(saved.id), (error: unknown) => {
    assert.ok(error instanceof StoreError);
    assert.match(error.message, /Vedd fel újra/);
    return true;
  });
});

test("adding the same name again replaces that child instead of duplicating them", () => {
  const { store } = freshStore();
  const first = store.add(marci);
  const second = store.add({ ...marci, label: " marci ", password: "uj-jelszo" });

  assert.equal(second.id, first.id, "the same child keeps its identity");
  assert.equal(store.list().length, 1);
  assert.equal(store.password(first.id), "uj-jelszo");
});

test("removing a child takes the stored password with it", () => {
  const { store } = freshStore();
  const saved = store.add(marci);
  store.add({ ...marci, label: "Benedek", username: "72987654321" });

  assert.equal(store.remove("marci")?.label, "Marci");
  assert.deepEqual(store.list().map((child) => child.label), ["Benedek"]);
  assert.throws(() => store.password(saved.id), StoreError);
  assert.equal(store.remove("Marci"), undefined);
});

test("two children can be told apart by name, whatever the caller's casing", () => {
  const { store } = freshStore();
  store.add(marci);
  store.add({ ...marci, label: "Benedek", username: "72987654321", password: "masik" });

  assert.equal(store.find("BENEDEK")?.username, "72987654321");
  assert.equal(store.password(store.find("benedek")!.id), "masik");
  assert.equal(store.find("Lilla"), undefined);
});

test("a corrupt settings file is reported, not silently replaced", () => {
  const { path, key } = freshStore();
  const store = ChildStore.withKey(path, key);
  store.add(marci);

  writeFileSync(path, "{ not json");
  assert.throws(() => ChildStore.withKey(path, key), StoreError);
});
