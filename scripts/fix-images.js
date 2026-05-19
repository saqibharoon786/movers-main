const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "src");

function walk(dir, files = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, files);
    else if (/\.tsx?$/.test(e.name)) files.push(p);
  }
  return files;
}

const replacements = [
  {
    test: (f) => f.includes(`${path.sep}services${path.sep}`),
    from: /src="\/images\/[^"]+"/g,
    to: "src={serviceData.heroImg}",
  },
];

let count = 0;
for (const f of walk(root)) {
  if (/_old\.|_backup\.|_temp\./.test(f)) continue;
  let c = fs.readFileSync(f, "utf8");
  const orig = c;
  for (const r of replacements) {
    if (r.test(f)) c = c.replace(r.from, r.to);
  }
  if (c !== orig) {
    fs.writeFileSync(f, c);
    count++;
    console.log("updated:", path.relative(root, f));
  }
}
console.log("done:", count, "files");
