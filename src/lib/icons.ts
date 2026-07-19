// Shared icon library. All icons are monoline (stroke="currentColor",
// stroke-width 2, round caps/joins, 24x24 viewBox) except `github` (a
// filled glyph, standard practice for brand marks) and `network` (the
// larger decorative hero illustration). Rendered via `set:html={ICONS.x}`.

export const ICONS: Record<string, string> = {
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9Z"/></svg>`,

  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>`,

  megaphone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4a1 1 0 0 0 1 1h2l4 5V4L6 9H4a1 1 0 0 0-1 1Z"/><path d="M15 8a4 4 0 0 1 0 8"/><path d="M18 5a8 8 0 0 1 0 14"/></svg>`,

  sprout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M12 20v-8"/><path d="M12 12C7 12 4 9 4 5c4 0 7 2 8 5"/><path d="M12 12c3-1 6-3 6-7-4 0-6.5 1.5-7.5 4"/></svg>`,

  github: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>`,

  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/></svg>`,

  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,

  building: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/></svg>`,

  coins: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="9" r="6"/><circle cx="15" cy="15" r="6"/></svg>`,

  landmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 21 8 3 8"/></svg>`,

  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11.5 4.5"/><path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07L12.5 19.5"/></svg>`,

  shieldCheck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`,

  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,

  share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-3.9"/><path d="m8.6 13.5 6.8 3.9"/></svg>`,

  flask: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M10 3v6.5L4.5 19a1.5 1.5 0 0 0 1.3 2.2h12.4a1.5 1.5 0 0 0 1.3-2.2L14 9.5V3"/><path d="M7.5 15h9"/></svg>`,

  envelope: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>`,

  folder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/></svg>`,

  headset: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13a9 9 0 0 1 18 0v5"/><rect x="17" y="13" width="4" height="6" rx="1"/><rect x="3" y="13" width="4" height="6" rx="1"/></svg>`,

  newspaper: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h4M7 13h4M7 17h4M14 9h3M14 13h3M14 17h3"/></svg>`,

  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>`,

  document: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v5a1 1 0 0 0 1 1h5"/><path d="M6 3h8l6 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M9 13h6M9 17h6"/></svg>`,
};

// Larger decorative illustration for the Home hero — an abstract node
// network with one node (Ireland) highlighted, echoing "Node Network".
export const NETWORK_ILLUSTRATION = `<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" role="presentation">
  <circle cx="250" cy="60" r="60" fill="var(--color-green-500)" opacity="0.12" />
  <circle cx="50" cy="220" r="46" fill="var(--color-accent)" opacity="0.10" />
  <circle cx="280" cy="230" r="22" fill="var(--color-green-500)" opacity="0.16" />
  <g stroke="var(--color-green-700)" stroke-width="2" fill="none" stroke-linecap="round">
    <line x1="90" y1="140" x2="170" y2="80" />
    <line x1="90" y1="140" x2="150" y2="190" />
    <line x1="150" y1="190" x2="230" y2="160" />
    <line x1="170" y1="80" x2="230" y2="160" />
    <line x1="170" y1="80" x2="250" y2="70" />
  </g>
  <circle cx="90" cy="140" r="10" fill="var(--color-surface)" stroke="var(--color-green-700)" stroke-width="2" />
  <circle cx="170" cy="80" r="10" fill="var(--color-surface)" stroke="var(--color-green-700)" stroke-width="2" />
  <circle cx="150" cy="190" r="10" fill="var(--color-surface)" stroke="var(--color-green-700)" stroke-width="2" />
  <circle cx="250" cy="70" r="10" fill="var(--color-surface)" stroke="var(--color-green-700)" stroke-width="2" />
  <circle cx="230" cy="160" r="16" fill="var(--color-accent)" />
</svg>`;

// Publications hero — a stack of report/paper shapes with a "verified"
// checkmark badge.
export const DOCUMENT_ILLUSTRATION = `<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" role="presentation">
  <circle cx="240" cy="70" r="55" fill="var(--color-green-500)" opacity="0.12" />
  <circle cx="60" cy="210" r="40" fill="var(--color-accent)" opacity="0.10" />
  <rect x="110" y="70" width="120" height="150" rx="10" fill="var(--color-surface)" stroke="var(--color-green-700)" stroke-width="2" transform="rotate(-8 170 145)" />
  <rect x="100" y="60" width="120" height="150" rx="10" fill="var(--color-surface)" stroke="var(--color-green-700)" stroke-width="2" transform="rotate(4 160 135)" />
  <rect x="95" y="55" width="130" height="160" rx="10" fill="var(--color-surface)" stroke="var(--color-green-700)" stroke-width="2" />
  <g stroke="var(--color-green-700)" stroke-width="2" stroke-linecap="round">
    <line x1="115" y1="85" x2="205" y2="85" />
    <line x1="115" y1="103" x2="205" y2="103" />
    <line x1="115" y1="121" x2="180" y2="121" />
  </g>
  <circle cx="205" cy="170" r="16" fill="var(--color-accent)" />
  <path d="M198 170l5 5 10-10" stroke="var(--color-surface)" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;

// News hero — a news card with headline/body lines and a broadcast signal.
export const NEWS_ILLUSTRATION = `<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" role="presentation">
  <circle cx="70" cy="60" r="50" fill="var(--color-green-500)" opacity="0.12" />
  <circle cx="260" cy="220" r="42" fill="var(--color-accent)" opacity="0.10" />
  <rect x="80" y="60" width="160" height="140" rx="14" fill="var(--color-surface)" stroke="var(--color-green-700)" stroke-width="2" />
  <rect x="100" y="80" width="60" height="40" rx="6" fill="var(--color-green-500)" opacity="0.25" />
  <g stroke="var(--color-green-700)" stroke-width="2" stroke-linecap="round">
    <line x1="170" y1="88" x2="220" y2="88" />
    <line x1="170" y1="102" x2="220" y2="102" />
    <line x1="100" y1="135" x2="220" y2="135" />
    <line x1="100" y1="150" x2="220" y2="150" />
    <line x1="100" y1="165" x2="180" y2="165" />
  </g>
  <g stroke="var(--color-accent)" stroke-width="3" fill="none" stroke-linecap="round">
    <path d="M225 55c8 0 15 7 15 15" />
    <path d="M225 42c15 0 28 13 28 28" />
  </g>
  <circle cx="222" cy="72" r="4" fill="var(--color-accent)" />
</svg>`;

// Events hero — a calendar grid with one date cell highlighted.
export const EVENT_ILLUSTRATION = `<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" role="presentation">
  <circle cx="250" cy="70" r="55" fill="var(--color-green-500)" opacity="0.12" />
  <circle cx="60" cy="215" r="40" fill="var(--color-accent)" opacity="0.10" />
  <rect x="90" y="70" width="150" height="130" rx="12" fill="var(--color-surface)" stroke="var(--color-green-700)" stroke-width="2" />
  <line x1="90" y1="105" x2="240" y2="105" stroke="var(--color-green-700)" stroke-width="2" />
  <line x1="120" y1="55" x2="120" y2="85" stroke="var(--color-green-700)" stroke-width="2" stroke-linecap="round" />
  <line x1="210" y1="55" x2="210" y2="85" stroke="var(--color-green-700)" stroke-width="2" stroke-linecap="round" />
  <g fill="var(--color-green-500)" opacity="0.35">
    <rect x="110" y="120" width="24" height="20" rx="4" />
    <rect x="146" y="120" width="24" height="20" rx="4" />
    <rect x="182" y="120" width="24" height="20" rx="4" />
    <rect x="110" y="150" width="24" height="20" rx="4" />
  </g>
  <rect x="146" y="150" width="24" height="20" rx="4" fill="var(--color-accent)" />
</svg>`;

// People hero — a hub-and-spoke cluster of connected circles, a distinct
// composition from the Home network graphic (central hub, not a chain).
export const PEOPLE_ILLUSTRATION = `<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" role="presentation">
  <circle cx="230" cy="90" r="55" fill="var(--color-accent)" opacity="0.10" />
  <circle cx="80" cy="200" r="45" fill="var(--color-green-500)" opacity="0.12" />
  <g stroke="var(--color-green-700)" stroke-width="2" fill="none" stroke-linecap="round">
    <line x1="160" y1="140" x2="120" y2="90" />
    <line x1="160" y1="140" x2="210" y2="95" />
    <line x1="160" y1="140" x2="150" y2="200" />
    <line x1="160" y1="140" x2="220" y2="180" />
  </g>
  <circle cx="160" cy="140" r="20" fill="var(--color-accent)" />
  <circle cx="120" cy="90" r="14" fill="var(--color-surface)" stroke="var(--color-green-700)" stroke-width="2" />
  <circle cx="210" cy="95" r="14" fill="var(--color-surface)" stroke="var(--color-green-700)" stroke-width="2" />
  <circle cx="150" cy="200" r="14" fill="var(--color-surface)" stroke="var(--color-green-700)" stroke-width="2" />
  <circle cx="220" cy="180" r="14" fill="var(--color-surface)" stroke="var(--color-green-700)" stroke-width="2" />
</svg>`;
