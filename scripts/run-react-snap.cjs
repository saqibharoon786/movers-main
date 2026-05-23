const { run } = require("react-snap");
const path = require("path");
const { extractStaticRoutesFromApp } = require("./extract-routes.cjs");

const root = path.resolve(__dirname, "..");
const routes = extractStaticRoutesFromApp();

const baseConfig = {
  source: "dist",
  sitemapHostname: "https://bestintlmovers.com",
  puppeteerArgs: ["--no-sandbox", "--disable-dev-shm-usage"],
  renderAfterDocumentEvent: "render-event",
  minTimeout: 45000,
  maxTimeout: 120000,
  /** Block GA/fonts during prerender — browser may log net::ERR_FAILED (harmless). */
  skipThirdPartyRequests: true,
  /** Static 404 has no React/Helmet; do not wait for app meta tags. */
  skip: ["/404.html"],
};

console.log(
  "react-snap: prerendering",
  routes.length,
  "routes (console ERR_FAILED from blocked fonts/analytics is expected and safe to ignore)",
);

run({
  ...baseConfig,
  include: routes,
})
  .then(() => {
    console.log(`react-snap finished (${routes.length} routes)`);
  })
  .catch((err) => {
    const message = err && err.message ? err.message : String(err);
    console.error("react-snap failed:", message);
    process.exit(1);
  });
