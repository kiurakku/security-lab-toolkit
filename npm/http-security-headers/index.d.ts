export const recommendedHeaders: Readonly<Record<string, string>>;
export function mergeHeaders(
  existing?: Record<string, string | string[] | undefined>
): Record<string, string>;
