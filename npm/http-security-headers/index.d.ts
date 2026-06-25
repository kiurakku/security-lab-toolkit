export const recommendedHeaders: Readonly<Record<string, string>>;
export function mergeHeaders(
  existing?: Record<string, string | string[] | undefined>
): Record<string, string>;
export function expressMiddleware(
  existing?: Record<string, string | string[] | undefined>
): (req: import("http").IncomingMessage, res: import("http").ServerResponse, next: () => void) => void;
