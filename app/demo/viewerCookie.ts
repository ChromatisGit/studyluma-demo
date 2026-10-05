import type { ViewerRole } from "studyluma/modules/viewer";

/** The demo's role switch uses the cookie read by the website package. */
export function viewerCookie(role: ViewerRole): string {
  return `studyluma-viewer=${role}; Path=/; Max-Age=31536000; SameSite=Lax; HttpOnly`;
}
