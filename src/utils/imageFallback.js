const DEFAULT_POST_IMAGE =
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop";

/**
 * Returns a safe image URL. Notion and other non-embeddable URLs often return 400
 * when loaded in img tags, so we use a fallback without requesting them.
 */
export function getSafeImageUrl(url) {
  if (!url || typeof url !== "string") return DEFAULT_POST_IMAGE;
  const u = url.trim();
  if (
    u.includes("notion.so") ||
    u.includes("notion-blog") ||
    u.startsWith("data:")
  ) {
    return DEFAULT_POST_IMAGE;
  }
  return u;
}

export { DEFAULT_POST_IMAGE };
