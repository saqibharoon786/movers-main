const SITE_URL = "https://bestintlmovers.com";
export const SEO_SITE_URL = SITE_URL;

const DEFAULT_SOCIAL_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200";

const toTitleCase = (value: string) =>
  value
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const pathToLabel = (path: string) => {
  const trimmed = path.replace(/^\/|\/$/g, "");
  if (!trimmed) return "Pakistan";
  const segments = trimmed.split("/").filter(Boolean);
  const last = segments[segments.length - 1].replace(/-/g, " ");
  return toTitleCase(last);
};

const clip = (value: string, max: number) => {
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1).trimEnd()}…`;
};

const looksLikeAbsoluteUrl = (value: string) => /^https?:\/\//i.test(value);

/**
 * Normalized path with leading slash.
 * Preserves a trailing slash when the input contains one (except root "/").
 * Removes query/hash and collapses duplicate slashes.
 * Returns undefined when input is missing/invalid.
 */
export const normalizeSeoPath = (path?: string | null): string | undefined => {
  if (typeof path !== "string") return undefined;
  const trimmed = path.trim();
  if (!trimmed) return undefined;

  let candidate = trimmed;

  if (looksLikeAbsoluteUrl(trimmed)) {
    try {
      candidate = new URL(trimmed).pathname || "/";
    } catch {
      return undefined;
    }
  }

  const withoutHash = candidate.split("#")[0];
  const withoutQuery = withoutHash.split("?")[0];
  const collapsed = withoutQuery.replace(/\/{2,}/g, "/");
  const withLeading = collapsed.startsWith("/") ? collapsed : `/${collapsed}`;

  if (withLeading === "/") return "/";

  const hasTrailingSlash = withLeading.endsWith("/");
  const noTrailing = withLeading.replace(/\/+$/, "");

  // If input had a trailing slash, keep exactly one (e.g. "/contact/").
  return hasTrailingSlash ? `${noTrailing}/` : noTrailing;
};

/** Canonical URL: https://bestintlmovers.com (no www), no trailing slash except homepage. */
export const toCanonicalUrl = (path?: string | null) => {
  const normalizedPath = normalizeSeoPath(path);
  if (!normalizedPath) return undefined;
  if (normalizedPath === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${normalizedPath}`;
};

export type ComputeSeoHeadInput = {
  title: string;
  description: string;
  keywords: string;
  /** Preferred path for canonical (e.g. `/contact`). Falls back to `pathnameFallback` or `/`. */
  urlPath?: string;
  pathnameFallback?: string;
  ogImage?: string;
  ogImageAlt?: string;
  twitterImage?: string;
  noindex?: boolean;
};

export function computeSeoHead(input: ComputeSeoHeadInput) {
  const canonicalPath = normalizeSeoPath(input.urlPath) ?? normalizeSeoPath(input.pathnameFallback);
  const normalizedPath = canonicalPath ?? "/";
  const routeLabel = pathToLabel(normalizedPath);

  const isFullSeoTitle = input.title.includes("|");
  const titleHasRoute = input.title.toLowerCase().includes(routeLabel.toLowerCase());
  const seoTitleBase =
    isFullSeoTitle || titleHasRoute || normalizedPath === "/" ? input.title : `${input.title} | ${routeLabel}`;
  const seoTitle = clip(seoTitleBase, isFullSeoTitle ? 72 : 60);

  const cta = "Call or WhatsApp 0300-9130211.";
  const descriptionHasRoute = input.description.toLowerCase().includes(routeLabel.toLowerCase());
  const descriptionWithRoute =
    normalizedPath === "/" || descriptionHasRoute
      ? input.description
      : `${input.description} ${routeLabel} relocation support in Pakistan.`;
  const descriptionWithCta = descriptionWithRoute.includes("0300-9130211")
    ? descriptionWithRoute
    : `${descriptionWithRoute} ${cta}`;
  const seoDescription = clip(descriptionWithCta, 160);

  const fullUrl = toCanonicalUrl(canonicalPath);
  const selectedOgImage = input.ogImage || DEFAULT_SOCIAL_IMAGE;
  const robots = input.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";

  return {
    seoTitle,
    seoDescription,
    fullUrl,
    normalizedPath,
    selectedOgImage,
    twitterImage: input.twitterImage || selectedOgImage,
    robots,
    keywords: input.keywords,
    ogImageAlt: input.ogImageAlt,
  };
}
