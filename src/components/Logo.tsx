import Image from "next/image";
import Link from "next/link";

type LogoProps = { compact?: boolean; light?: boolean };

export function Logo({ compact = false, light = false }: LogoProps) {
  return (
    <Link
      className={`brand ${light ? "brand--light" : ""}`}
      href="/"
      aria-label="ByteSpace home"
    >
      <Image
        className="brand__mark"
        src="/assets/bytespace-mark.png"
        alt=""
        aria-hidden="true"
        width={58}
        height={63}
        unoptimized
      />
      {!compact && <span>ByteSpace</span>}
    </Link>
  );
}
