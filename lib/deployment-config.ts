// These are public browser settings, never credentials. Live inference is disabled by default.
export function publicAgentOrigin(value: unknown): string | null {
  if (typeof value !== 'string' || !value.trim()) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.username || url.password ||
        url.pathname !== '/' || url.search || url.hash) return null;
    return url.origin;
  } catch { return null; }
}
export const guestOrigin = publicAgentOrigin(import.meta.env?.VITE_PUBLIC_AGENT_ORIGIN);
export const hostedPortfolio = 'https://osmarmorales.io/#lab';
