const { run } = require("react-snap");
const path = require("path");
const { extractStaticRoutesFromApp } = require("./extract-routes.cjs");

const root = path.resolve(__dirname, "..");
const routes = extractStaticRoutesFromApp();

const baseConfig = {
  source: "dist",
  sitemapHostname: "https://bestintlmovers.com",
  puppeteerArgs: ["--no-sandbox"],
  renderAfterDocumentEvent: "render-event",
  /** Wait until react-helmet-async sets per-route description (lazy routes included). */
  waitFor: 'meta[name="description"][data-rh="true"]',
  minTimeout: 45000,
  maxTimeout: 120000,
  skipThirdPartyRequests: true,
};

run({
  ...baseConfig,
  include: routes,
})
  .then(() => {
    console.log(`react-snap finished (${routes.length} routes)`);
  })
  .catch((err) => {
    console.error("react-snap failed:", err);
    process.exit(1);
  });
