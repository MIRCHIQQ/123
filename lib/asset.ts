const basePath = process.env.BASE_PATH ?? "";

export function asset(path: string): string {
  if (!basePath) return path;
  if (path.startsWith(basePath)) return path;
  return path.startsWith("/") ? `${basePath}${path}` : `${basePath}/${path}`;
}
