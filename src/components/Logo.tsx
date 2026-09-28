import Link from "next/link";

type LogoProps = { compact?: boolean; light?: boolean };

export function Logo({ compact = false, light = false }: LogoProps) {
  return (
    <Link
      className={`brand ${light ? "brand--light" : ""}`}
      href="/"
      aria-label="ByteSpace home"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 36 36"
        width="32"
        height="32"
        fill="none"
      >
        <path d="M4 2h12.5v16H4V2Z" fill="currentColor" />
        <path
          d="M4 18h12.5c8.7 0 15.5 6.7 15.5 15.5H18C10.3 33.5 4 27.3 4 18Z"
          fill="currentColor"
        />
        <path
          d="M16.5 2v16H32C32 9.3 25.2 2 16.5 2Z"
          fill="currentColor"
          opacity=".92"
        />
        <path d="M16.5 18H32L16.5 33.5V18Z" fill="var(--blue)" />
      </svg>
      {!compact && <span>ByteSpace</span>}
    </Link>
  );
}
