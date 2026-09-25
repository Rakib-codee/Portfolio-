/** Tiny className joiner; avoids pulling in clsx for a portfolio. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
