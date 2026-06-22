import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "src", "App.tsx");

/**
 * Static routes from App.tsx for sitemap / react-snap (skips :params and redirects).
 */
function addPath(paths, route) {
  paths.add(route);
  if (route !== "/" && !route.endsWith("/")) {
    paths.add(`${route}/`);
  }
}

const REDIRECT_BLOG_SLUGS = new Set([
  "home-shifting-islamabad",
  "international-moving-services-pakistan",
  "customs-regulations-guide-pakistan",
]);

function extractBlogSlugsFromSource(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, "utf8");
  const slugs = [];
  const re = /slug:\s*"([^"]+)"/g;
  let match;
  while ((match = re.exec(content)) !== null) {
    if (!REDIRECT_BLOG_SLUGS.has(match[1])) {
      slugs.push(match[1]);
    }
  }
  return slugs;
}

export function extractStaticRoutesFromApp() {
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

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const routes = extractStaticRoutesFromApp();
  console.log(routes.join("\n"));
  console.error(`\n${routes.length} routes`);
}
