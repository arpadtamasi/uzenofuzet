// Markdown -> .docx konverter az előterjesztéshez.
// Használat: node build-docx.cjs <bemenet.md> <kimenet.docx>
const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle, LevelFormat,
} = require('docx');

const [, , inPath, outPath] = process.argv;
const src = fs.readFileSync(inPath, 'utf8');
const lines = src.split('\n');

const PAGE_W = 9026; // A4 szélesség mínusz margók, DXA

// --- inline formázás: **félkövér**, *dőlt*, `kód` ---
function runs(text, base = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(new TextRun({ ...base, text: text.slice(last, m.index) }));
    const t = m[0];
    if (t.startsWith('**')) out.push(new TextRun({ ...base, text: t.slice(2, -2), bold: true }));
    else if (t.startsWith('`')) out.push(new TextRun({ ...base, text: t.slice(1, -1), font: 'Consolas' }));
    else out.push(new TextRun({ ...base, text: t.slice(1, -1), italics: true }));
    last = m.index + t.length;
  }
  if (last < text.length) out.push(new TextRun({ ...base, text: text.slice(last) }));
  return out.length ? out : [new TextRun({ ...base, text: '' })];
}

function splitRow(line) {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
}

function buildTable(rows) {
  const cols = rows[0].length;
  const colW = Math.floor(PAGE_W / cols);
  const widths = Array(cols).fill(colW);
  widths[cols - 1] = PAGE_W - colW * (cols - 1);
  const trs = rows.map((cells, ri) => new TableRow({
    tableHeader: ri === 0,
    children: cells.map((c, ci) => new TableCell({
      width: { size: widths[ci], type: WidthType.DXA },
      shading: ri === 0 ? { type: ShadingType.CLEAR, fill: 'E8EDF3' } : undefined,
      margins: { top: 60, bottom: 60, left: 100, right: 100 },
      children: [new Paragraph({
        spacing: { before: 0, after: 0 },
        children: runs(c, ri === 0 ? { bold: true, size: 18 } : { size: 18 }),
      })],
    })),
  }));
  return new Table({ columnWidths: widths, width: { size: PAGE_W, type: WidthType.DXA }, rows: trs });
}

const children = [];
let i = 0;
while (i < lines.length) {
  const line = lines[i];
  const t = line.trim();

  if (t === '' ) { i++; continue; }

  if (t === '---') { // vízszintes elválasztó: alsó szegélyes üres bekezdés
    children.push(new Paragraph({
      spacing: { before: 200, after: 200 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: 'B0B8C4' } },
      children: [new TextRun('')],
    }));
    i++; continue;
  }

  if (t.startsWith('|')) { // táblázat
    const rows = [];
    while (i < lines.length && lines[i].trim().startsWith('|')) {
      const cells = splitRow(lines[i]);
      if (!cells.every(c => /^:?-{2,}:?$/.test(c))) rows.push(cells);
      i++;
    }
    children.push(buildTable(rows));
    children.push(new Paragraph({ spacing: { after: 160 }, children: [new TextRun('')] }));
    continue;
  }

  const h = t.match(/^(#{1,4})\s+(.*)$/);
  if (h) {
    const lvl = h[1].length;
    const map = { 1: HeadingLevel.TITLE, 2: HeadingLevel.HEADING_1, 3: HeadingLevel.HEADING_2, 4: HeadingLevel.HEADING_3 };
    children.push(new Paragraph({
      heading: map[lvl],
      spacing: { before: lvl === 1 ? 0 : 320, after: 160 },
      children: runs(h[2]),
    }));
    i++; continue;
  }

  if (t.startsWith('> ')) { // idézet / kiemelt képlet
    children.push(new Paragraph({
      spacing: { before: 60, after: 60 },
      indent: { left: 360 },
      border: { left: { style: BorderStyle.SINGLE, size: 12, color: '6B7A8F', space: 12 } },
      children: runs(t.slice(2)),
    }));
    i++; continue;
  }

  const b = t.match(/^[-*]\s+(.*)$/);
  if (b) {
    children.push(new Paragraph({ bullet: { level: 0 }, spacing: { after: 60 }, children: runs(b[1]) }));
    i++; continue;
  }

  const n = t.match(/^(\d+)\.\s+(.*)$/);
  if (n) {
    children.push(new Paragraph({
      numbering: { reference: 'szamozott', level: 0 },
      spacing: { after: 60 },
      children: runs(n[2]),
    }));
    i++; continue;
  }

  children.push(new Paragraph({ spacing: { after: 140 }, alignment: AlignmentType.JUSTIFIED, children: runs(t) }));
  i++;
}

const doc = new Document({
  numbering: {
    config: [{
      reference: 'szamozott',
      levels: [{
        level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.START,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } },
      }],
    }],
  },
  styles: {
    paragraphStyles: [
      { id: 'Normal', name: 'Normal', quickFormat: true,
        run: { font: 'Calibri', size: 22 },
        paragraph: { spacing: { after: 140, line: 276 } } },
    ],
    default: {
      document: { run: { font: 'Calibri', size: 22 } },
      title: { run: { font: 'Calibri', size: 40, bold: true, color: '1F3864' } },
      heading1: { run: { font: 'Calibri', size: 30, bold: true, color: '1F3864' } },
      heading2: { run: { font: 'Calibri', size: 25, bold: true, color: '2E5496' } },
      heading3: { run: { font: 'Calibri', size: 22, bold: true, color: '2E5496' } },
    },
  },
  sections: [{
    properties: { page: { margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } } },
    children,
  }],
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync(outPath, buf);
  console.log('OK:', outPath, buf.length, 'byte,', children.length, 'blokk');
});
