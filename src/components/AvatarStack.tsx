import Image from "next/image";

export function AvatarStack({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`avatar-stack ${dark ? "avatar-stack--dark" : ""}`}
      aria-label="More than 2,000 happy students"
    >
      {[1, 2, 3, 4].map((index) => (
        <Image
          key={index}
          src={`/assets/student-${index}.webp`}
          alt=""
          width={38}
          height={38}
        />
      ))}
      <span className="avatar-stack__count">26+</span>
    </span>
  );
}
