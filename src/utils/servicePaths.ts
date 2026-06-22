import { resolveServicePath } from "@/utils/seoHead";

/** Canonical internal link for a service page, e.g. `sea-freight` → `/services/sea-freight-services/`. */
export const servicePath = (slug: string) => resolveServicePath(slug);
