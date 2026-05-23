import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const file = path.join(root, "src/seo/pageTitles.ts");
const text = readFileSync(file, "utf8");
const max = 60;
const matches = [...text.matchAll(/:\s*"([^"]+)"/g)];
let failed = false;

for (const [, title] of matches) {
  if (title.length > max) {
    console.error(`FAIL (${title.length} chars): ${title}`);
    failed = true;
  } else {
    console.log(`OK (${title.length}): ${title}`);
  }
}

if (failed) process.exit(1);
console.log(`\nAll ${matches.length} page titles are ≤ ${max} characters.`);
