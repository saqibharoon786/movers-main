const SITE_URL = "https://bestintlmovers.com";

const normalizeSeoPath = (path) => {
  if (!path) return "/";

  // Remove query params and hash
  let clean = path.split("?")[0].split("#")[0];

  // Collapse multiple slashes → // → /
  clean = clean.replace(/\/{2,}/g, "/");

  // Ensure leading slash
  if (!clean.startsWith("/")) {
    clean = `/${clean}`;
  }

  // Remove trailing slashes (except root)
  clean = clean.replace(/\/+$/, "");

  return clean || "/";
};

const toCanonicalUrl = (path) => {
  // If already full URL, return as-is
  if (typeof path === "string" && /^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = normalizeSeoPath(path);

  // Root case
  if (normalizedPath === "/") {
    return `${SITE_URL}/`;
  }

  return `${SITE_URL}${normalizedPath}`;
};


// ✅ Test cases
console.log("Testing canonical URL generation:");

console.log("Home page:", toCanonicalUrl("/"));
console.log("Air freight:", toCanonicalUrl("/services/air-freight"));
console.log("Sea freight:", toCanonicalUrl("/services/sea-freight"));
console.log("Contact:", toCanonicalUrl("/contact"));
console.log("About us:", toCanonicalUrl("/about-us"));

// 🔥 Edge cases (important)
console.log("With trailing slash:", toCanonicalUrl("/contact/"));
console.log("With query params:", toCanonicalUrl("/contact?utm=123"));
console.log("With hash:", toCanonicalUrl("/about#team"));
console.log("Double slashes:", toCanonicalUrl("//services//air-freight//"));
console.log("Full URL input:", toCanonicalUrl("https://bestintlmovers.com/contact"));