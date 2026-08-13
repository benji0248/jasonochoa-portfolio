export function withBase(path = "/"): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (path === "/" || path === "") return `${base}/`;
  return `${base}/${path.replace(/^\//, "")}`;
}

export function currentPath(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const current = pathname.replace(/\/$/, "") || "/";
  if (!base) return current || "/";
  if (current === base || current === "") return "/";
  return current.startsWith(base) ? current.slice(base.length) || "/" : current;
}
