const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function sitePath(path: string): string {
  if (path.startsWith("#")) return path;
  const [pathname, ...hashParts] = path.split("#");
  const route =
    pathname && !pathname.endsWith("/") && !/\.[^/]+$/.test(pathname)
      ? `${pathname}/`
      : pathname;
  const hash = hashParts.length > 0 ? `#${hashParts.join("#")}` : "";
  return `${basePath}${route}${hash}`;
}
