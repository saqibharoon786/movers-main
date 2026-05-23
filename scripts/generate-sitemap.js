import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl = "https://bestintlmovers.com";
const distDir = path.resolve(__dirname, "..", "dist");
const sitemapPath = path.join(distDir, "sitemap.xml");
const appPath = path.resolve(__dirname, "..", "src", "App.tsx");

/** Match canonical URLs: trailing slash on all non-root paths. */
const normalizePath = (route) => {
  if (!route || route === "/") return "/";
  const withLeading = route.startsWith("/") ? route : `/${route}`;
  const trimmed = withLeading.replace(/\/+$/, "") || "/";
  if (trimmed === "/") return "/";
  return `${trimmed}/`;
};

const toLoc = (route) => {
  const p = normalizePath(route);
  if (p === "/") return `${siteUrl}/`;
  return `${siteUrl}${p}`;
};

const { extractStaticRoutesFromApp } = require("./extract-routes.cjs");

const routes = extractStaticRoutesFromApp().map(normalizePath);

if (!fs.existsSync(distDir)) {
  console.error(`Dist folder not found at ${distDir}. Run build first.`);
  process.exit(1);
}

const today = new Date().toISOString().split("T")[0];
const urlSet = routes
  .map((route) => {
    const loc = toLoc(route);
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlSet}
</urlset>
`;

fs.writeFileSync(sitemapPath, sitemap, "utf8");
console.log(`Sitemap generated: ${sitemapPath} (${routes.length} URLs)`);
