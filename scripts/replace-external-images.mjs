import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "src");

const replacements = [
  // Unsplash
  [/https:\/\/images\.unsplash\.com\/photo-1600585154340-be6161a56a0c[^"'\s]*/g, "/images/hero-home.jpg"],
  [/https:\/\/images\.unsplash\.com\/photo-1454165804606-c3d57bc86b40[^"'\s]*/g, "/images/cargo-insurance.jpg"],
  [/https:\/\/images\.unsplash\.com\/photo-1601758228826-054b69a9cc13[^"'\s]*/g, "/images/pet-relocation.png"],
  [/https:\/\/images\.unsplash\.com\/photo-1596075780750-81249df16d19[^"'\s]*/g, "/images/homeshifting.png"],
  [/https:\/\/images\.unsplash\.com\/photo-1553413077-190dd305871c[^"'\s]*/g, "/images/secure-storage.png"],
  [/https:\/\/images\.unsplash\.com\/photo-1605810230434-7631ac76ec81[^"'\s]*/g, "/images/vehicle-shipping.jpg"],
  [/https:\/\/images\.unsplash\.com\/photo-1436491865332-7a61a109cc05[^"'\s]*/g, "/images/air-freight.jpg"],
  [/https:\/\/images\.unsplash\.com\/photo-1601584115197-04ecc0da31d7[^"'\s]*/g, "/images/freight-forwarding.png"],
  [/https:\/\/images\.unsplash\.com\/photo-1566438487617-ce78ab6bdf36[^"'\s]*/g, "/images/pet-relocation.png"],
  [/https:\/\/images\.unsplash\.com\/photo-1519003722824-194d4455a60c[^"'\s]*/g, "/images/shipping.png"],
  [/https:\/\/images\.unsplash\.com\/photo-1542838132-92c53300491e[^"'\s]*/g, "/images/homeshifting.png"],
  [/https:\/\/images\.unsplash\.com\/photo-1512453979798-5ea266f8880c[^"'\s]*/g, "/images/international-moving.jpg"],
  [/https:\/\/images\.unsplash\.com\/photo-1486406146926-c627a92ad1ab[^"'\s]*/g, "/images/international-moving.jpg"],
  [/https:\/\/images\.unsplash\.com\/photo-1583337236082-8555968cbc2c[^"'\s]*/g, "/images/pet-relocation.png"],
  [/https:\/\/images\.unsplash\.com\/photo-1522071820081-009f0129c71c[^"'\s]*/g, "/images/international-moving.jpg"],
  [/https:\/\/images\.unsplash\.com\/photo-1560250097-0b93528c311a[^"'\s]*/g, "/images/international-moving.jpg"],
  [/https:\/\/images\.unsplash\.com\/photo-1519085360753-af0119f7cbe7[^"'\s]*/g, "/images/international-moving.jpg"],
  [/https:\/\/images\.unsplash\.com\/photo-1573496359142-b8d87734a5a2[^"'\s]*/g, "/images/international-moving.jpg"],
  [/https:\/\/images\.unsplash\.com\/photo-1472099645785-5658abf4ff4e[^"'\s]*/g, "/images/international-moving.jpg"],
  [/https:\/\/images\.unsplash\.com\/photo-1542744173-8e7e53415bb0[^"'\s]*/g, "/images/international-moving.jpg"],
  [/https:\/\/images\.unsplash\.com\/photo-1560518883-ce09059eeffa[^"'\s]*/g, "/images/hero-home.jpg"],
  [/https:\/\/images\.unsplash\.com\/photo-1586528116311-ad8dd3c8310d[^"'\s]*/g, "/images/container.jpg"],
  [/https:\/\/images\.unsplash\.com\/photo-1494412519320-aa613dfb7738[^"'\s]*/g, "/images/sea-freight.jpg"],
  [/https:\/\/images\.unsplash\.com\/photo-1504307651254-35680f356fce[^"'\s]*/g, "/images/professional-packing.png"],
  [/https:\/\/images\.unsplash\.com\/photo-1522708323590-d24dbb6b0267[^"'\s]*/g, "/images/hero-home.jpg"],
  [/https:\/\/images\.unsplash\.com\/photo-1558494949-ef010cbdcc31[^"'\s]*/g, "/images/shipping.png"],
  [/https:\/\/images\.unsplash\.com\/photo-1582268611958-ebfd161ef9cf[^"'\s]*/g, "/images/homeshifting.png"],
  [/https:\/\/images\.unsplash\.com\/photo-1578507065211-1c4e99a5fd24[^"'\s]*/g, "/images/container.jpg"],
  [/https:\/\/images\.unsplash\.com\/photo-1505691938895-1758d7feb511[^"'\s]*/g, "/images/hero-home.jpg"],
  // Pexels
  [/https:\/\/images\.pexels\.com\/photos\/163726\/[^"'\s]*/g, "/images/container.jpg"],
  [/https:\/\/images\.pexels\.com\/photos\/4246120\/[^"'\s]*/g, "/blog/packers-movers-islamabad-truck.jpg"],
  [/https:\/\/images\.pexels\.com\/photos\/4246128\/[^"'\s]*/g, "/images/professional-packing.png"],
  [/https:\/\/images\.pexels\.com\/photos\/4483610\/[^"'\s]*/g, "/images/packing-materials.jpg"],
  [/https:\/\/images\.pexels\.com\/photos\/2199293\/[^"'\s]*/g, "/images/good.png"],
  [/https:\/\/images\.pexels\.com\/photos\/1115804\/[^"'\s]*/g, "/images/peshawar.png"],
  [/https:\/\/images\.pexels\.com\/photos\/1216589\/[^"'\s]*/g, "/images/international-moving.jpg"],
  [/https:\/\/images\.pexels\.com\/photos\/2219024\/[^"'\s]*/g, "/images/sea-freight.jpg"],
  [/https:\/\/images\.pexels\.com\/photos\/906494\/[^"'\s]*/g, "/images/air-freight.jpg"],
  [/https:\/\/images\.pexels\.com\/photos\/906982\/[^"'\s]*/g, "/images/freight-forwarding.png"],
  [/https:\/\/images\.pexels\.com\/photos\/1089438\/[^"'\s]*/g, "/images/air-freight.jpg"],
  [/https:\/\/images\.pexels\.com\/photos\/3184418\/[^"'\s]*/g, "/images/rwp.png"],
  [/https:\/\/images\.pexels\.com\/photos\/1366909\/[^"'\s]*/g, "/images/rwp.png"],
  [/https:\/\/images\.pexels\.com\/photos\/164631\/[^"'\s]*/g, "/images/sea-freight.jpg"],
  [/https:\/\/images\.pexels\.com\/photos\/259928\/[^"'\s]*/g, "/images/cargo-insurance.jpg"],
  [/https:\/\/images\.pexels\.com\/photos\/7464725\/[^"'\s]*/g, "/images/professional-packing.png"],
  [/https:\/\/images\.pexels\.com\/photos\/7688336\/[^"'\s]*/g, "/images/international-moving.jpg"],
];

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (/\.(tsx?|jsx?|mjs)$/.test(ent.name) && !ent.name.includes("replace-external")) files.push(p);
  }
  return files;
}

let changed = 0;
for (const file of walk(srcDir)) {
  if (file.includes("siteImages.ts")) continue;
  let text = fs.readFileSync(file, "utf8");
  const orig = text;
  for (const [re, sub] of replacements) text = text.replace(re, sub);
  if (text !== orig) {
    fs.writeFileSync(file, text);
    changed++;
    console.log("updated:", path.relative(root, file));
  }
}

const remaining = walk(srcDir).filter((f) => {
  const t = fs.readFileSync(f, "utf8");
  return /pexels\.com|unsplash\.com/.test(t);
});
if (remaining.length) {
  console.log("\nStill external:");
  remaining.forEach((f) => console.log(path.relative(root, f)));
} else {
  console.log("\nAll external image URLs removed from src/");
}
console.log(`\n${changed} files updated`);
