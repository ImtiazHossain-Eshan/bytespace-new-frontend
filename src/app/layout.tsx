import type { Metadata } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ByteSpace — Discover courses and creators",
    template: "%s | ByteSpace",
  },
  description:
    "Explore creative, business, and technology courses at ByteSpace.",
  openGraph: {
    title: "ByteSpace",
    description: "Discover your passion and build your skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
