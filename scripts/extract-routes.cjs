const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "src", "App.tsx");

function addPath(paths, route) {
  paths.add(route);
  if (route !== "/" && !route.endsWith("/")) {
    paths.add(`${route}/`);
  }
}

function extractBlogSlugsFromSource(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, "utf8");
  const slugs = [];
  const re = /slug:\s*"([^"]+)"/g;
  let match;
  while ((match = re.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
}

function extractStaticRoutesFromApp() {
  const content = fs.readFileSync(appPath, "utf8");
  const paths = new Set(["/"]);

  for (const line of content.split(/\r?\n/)) {
    if (!line.includes("<Route path=")) continue;
    if (line.includes('path="*"')) continue;
    if (line.includes("Navigate to=")) continue;

    const match = line.match(/path="([^"]+)"/);
    if (!match) continue;
    const route = match[1];

    if (!route.startsWith("/")) continue;
    if (route.includes(":")) continue;

    addPath(paths, route);
  }

  const blogSources = [
    path.join(root, "src", "pages", "BlogPage.tsx"),
    path.join(root, "src", "pages", "BlogMainPage.tsx"),
    path.join(root, "src", "components", "BlogSection.tsx"),
  ];

  for (const source of blogSources) {
    for (const slug of extractBlogSlugsFromSource(source)) {
      addPath(paths, `/blog/${slug}`);
    }
  }

  return Array.from(paths).sort();
}

module.exports = { extractStaticRoutesFromApp };
