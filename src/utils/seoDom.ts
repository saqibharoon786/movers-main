/** Static fallback from index.html — remove so route-level Helmet meta is the only description. */
const STATIC_FALLBACK_SNIPPET = "5000+ families moved";

/**
 * Removes legacy static meta description tags left in index.html so crawlers
 * do not see duplicate or homepage-only descriptions on inner pages.
 */
export function stripStaticFallbackMeta(): void {
  if (typeof document === "undefined") return;

  document.querySelectorAll('meta[name="description"]').forEach((el) => {
    const content = el.getAttribute("content") ?? "";
    const managedByHelmet = el.hasAttribute("data-rh");
    if (!managedByHelmet && content.includes(STATIC_FALLBACK_SNIPPET)) {
      el.remove();
    }
  });
}
