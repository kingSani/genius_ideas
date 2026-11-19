export default function GeniusIdeasLogo({
  className = "w-9 h-9",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Genius Ideas Logo"
    >
      {/* Teal Vertical Block */}
      <rect x="26" y="18" width="68" height="94" fill="#0D8A8A" />
      {/* Dark Monoline Brain + GI Monogram */}
      <path
        d="M30 78C14 78 10 56 24 46C20 32 38 22 50 32C60 20 82 22 86 36C102 36 108 56 96 68C104 82 88 94 74 86C66 96 54 96 54 112L52 128"
        stroke="#071919"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58 50C44 46 34 58 38 72C42 84 58 84 62 70L64 46M56 64H74C82 64 86 72 80 78C74 84 64 80 64 72"
        stroke="#071919"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
