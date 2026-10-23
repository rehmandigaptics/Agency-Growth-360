export const CONTACT_EMAIL = "hello@agencygrowth360.com";

export function mail(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
