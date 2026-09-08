import assert from "node:assert/strict";
import { test } from "node:test";
import { ReplayCache } from "../src/oauth/replayCache.js";

test("the replay cache allows one claim per id", () => {
  const cache = new ReplayCache(1000);
  assert.ok(cache.claim("code-1"));
  assert.equal(cache.claim("code-1"), false);
  assert.ok(cache.claim("code-2"));
});

test("the replay cache forgets ids once they could no longer be replayed", () => {
  const cache = new ReplayCache(1000);
  assert.ok(cache.claim("code-1", 0));
  assert.equal(cache.claim("code-1", 500), false);
  assert.ok(cache.claim("code-1", 2000));
});
