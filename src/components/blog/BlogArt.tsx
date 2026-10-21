/**
 * Metaphorical, on-brand SVG artwork for blog posts. Abstract geometric
 * "scenes" in the warm palette that loosely evoke each article's theme, used
 * in place of photography on cards and article headers.
 *
 * Pick a motif explicitly via `motif`, or let it be chosen deterministically
 * from the post `seed` (slug) so the same post always gets the same art.
 */

const C = {
  coral: "#E07A4B",
  sunrise: "#F5D3B8",
  dawn: "#FFF6EF",
  indigo: "#1E1A93",
  lavender: "#C9B8DB",
  blush: "#F0C4B8",
  cloud: "#D8E8F0",
  mist: "#F8DED4",
  night: "#1C1C1E",
};

export const MOTIFS = [
  "sunrise",
  "growth",
  "waves",
  "path",
  "orbit",
  "bloom",
  "shelter",
  "stars",
] as const;

export type Motif = (typeof MOTIFS)[number];

function pick(seed: string): Motif {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return MOTIFS[h % MOTIFS.length];
}

function Scene({ motif }: { motif: Motif }) {
  const id = `art-${motif}`;
  switch (motif) {
    case "sunrise":
      return (
        <>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={C.dawn} />
              <stop offset="1" stopColor={C.sunrise} />
            </linearGradient>
          </defs>
          <rect width="480" height="320" fill={`url(#${id})`} />
          <circle cx="240" cy="248" r="82" fill={C.coral} opacity="0.9" />
          <circle cx="240" cy="248" r="118" fill="none" stroke={C.coral} strokeWidth="3" opacity="0.35" />
          <circle cx="240" cy="248" r="152" fill="none" stroke={C.coral} strokeWidth="3" opacity="0.18" />
          <line x1="0" y1="256" x2="480" y2="256" stroke={C.night} strokeOpacity="0.08" strokeWidth="2" />
        </>
      );
    case "growth":
      return (
        <>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={C.dawn} />
              <stop offset="1" stopColor={C.mist} />
            </linearGradient>
          </defs>
          <rect width="480" height="320" fill={`url(#${id})`} />
          <path d="M240 280 C240 210 240 170 240 120" fill="none" stroke={C.indigo} strokeWidth="6" strokeLinecap="round" opacity="0.8" />
          <path d="M240 190 C200 180 176 150 176 118 C214 120 240 150 240 190 Z" fill={C.coral} opacity="0.9" />
          <path d="M240 168 C280 158 306 128 306 96 C266 98 240 128 240 168 Z" fill={C.lavender} opacity="0.9" />
          <circle cx="240" cy="110" r="14" fill={C.sunrise} />
        </>
      );
    case "waves":
      return (
        <>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={C.cloud} />
              <stop offset="1" stopColor={C.dawn} />
            </linearGradient>
          </defs>
          <rect width="480" height="320" fill={`url(#${id})`} />
          <path d="M-20 150 Q100 110 220 150 T500 150" fill="none" stroke={C.lavender} strokeWidth="6" strokeLinecap="round" />
          <path d="M-20 195 Q100 155 220 195 T500 195" fill="none" stroke={C.coral} strokeWidth="6" strokeLinecap="round" opacity="0.85" />
          <path d="M-20 240 Q100 200 220 240 T500 240" fill="none" stroke={C.indigo} strokeWidth="6" strokeLinecap="round" opacity="0.55" />
        </>
      );
    case "path":
      return (
        <>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={C.dawn} />
              <stop offset="1" stopColor={C.sunrise} />
            </linearGradient>
          </defs>
          <rect width="480" height="320" fill={`url(#${id})`} />
          {/* Kept inside x 120-370, y 60-260 so both ends survive the 21:9
              article crop and the taller featured-card crop. */}
          <path d="M133 236 C185 204 172 165 231 152 C289 139 289 106 341 87" fill="none" stroke={C.indigo} strokeWidth="5" strokeLinecap="round" strokeDasharray="2 16" opacity="0.7" />
          <circle cx="346" cy="84" r="22" fill={C.coral} />
          <circle cx="133" cy="236" r="9" fill={C.indigo} opacity="0.7" />
        </>
      );
    case "orbit":
      return (
        <>
          <defs>
            <radialGradient id={id} cx="0.5" cy="0.5" r="0.7">
              <stop offset="0" stopColor={C.dawn} />
              <stop offset="1" stopColor={C.mist} />
            </radialGradient>
          </defs>
          <rect width="480" height="320" fill={`url(#${id})`} />
          <ellipse cx="240" cy="160" rx="150" ry="72" fill="none" stroke={C.lavender} strokeWidth="4" opacity="0.7" />
          <ellipse cx="240" cy="160" rx="72" ry="150" fill="none" stroke={C.coral} strokeWidth="4" opacity="0.4" />
          <circle cx="240" cy="160" r="24" fill={C.coral} />
          <circle cx="390" cy="160" r="14" fill={C.indigo} />
          <circle cx="240" cy="10" r="11" fill={C.lavender} />
        </>
      );
    case "bloom":
      return (
        <>
          <defs>
            <radialGradient id={id} cx="0.5" cy="0.5" r="0.7">
              <stop offset="0" stopColor={C.dawn} />
              <stop offset="1" stopColor={C.blush} />
            </radialGradient>
          </defs>
          <rect width="480" height="320" fill={`url(#${id})`} />
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse
              key={a}
              cx="240"
              cy="120"
              rx="30"
              ry="70"
              fill={a % 120 === 0 ? C.coral : C.lavender}
              opacity="0.55"
              transform={`rotate(${a} 240 160)`}
            />
          ))}
          <circle cx="240" cy="160" r="24" fill={C.sunrise} />
        </>
      );
    case "shelter":
      return (
        <>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={C.dawn} />
              <stop offset="1" stopColor={C.mist} />
            </linearGradient>
          </defs>
          <rect width="480" height="320" fill={`url(#${id})`} />
          <path d="M110 250 A130 130 0 0 1 370 250" fill="none" stroke={C.indigo} strokeWidth="6" strokeLinecap="round" opacity="0.75" />
          <path d="M150 250 A90 90 0 0 1 330 250" fill="none" stroke={C.lavender} strokeWidth="6" strokeLinecap="round" />
          <circle cx="240" cy="250" r="26" fill={C.coral} />
        </>
      );
    case "stars":
      return (
        <>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={C.indigo} />
              <stop offset="1" stopColor={C.night} />
            </linearGradient>
          </defs>
          <rect width="480" height="320" fill={`url(#${id})`} />
          <polyline points="80,90 160,150 250,110 330,180 410,120" fill="none" stroke={C.sunrise} strokeWidth="2" opacity="0.5" />
          {[
            [80, 90, 5],
            [160, 150, 4],
            [250, 110, 6],
            [330, 180, 4],
            [410, 120, 5],
            [200, 230, 3],
            [120, 220, 3],
          ].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill={i === 2 ? C.coral : C.dawn} opacity={i === 2 ? 1 : 0.85} />
          ))}
        </>
      );
  }
}

export function BlogArt({
  seed,
  motif,
  className,
}: {
  seed: string;
  motif?: Motif;
  className?: string;
}) {
  const chosen = motif ?? pick(seed);
  return (
    <svg
      viewBox="0 0 480 320"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <Scene motif={chosen} />
    </svg>
  );
}
