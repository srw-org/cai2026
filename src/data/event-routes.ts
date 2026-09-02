export const HUB_DOMAIN = "space-robots.org";
export const EVENT_SLUG = "cai2026";
export const EVENT_CANONICAL_PATH = "/events/cai2026/";

export const canonicalEventUrl = (_slug?: string) =>
  `https://${HUB_DOMAIN}${EVENT_CANONICAL_PATH}`;
