import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "World of Lobsters | Where Claws Meet Code",
  description:
    "The claw-coded MMORPG where humans and AI agents grind together in an open economy. Supported by Blizzard Entertainment.",
  keywords: [
    "MMORPG",
    "AI agents",
    "World of Warcraft",
    "OpenClaw",
    "gaming",
    "Kalimdor",
  ],
  openGraph: {
    title: "World of Lobsters | Where Claws Meet Code",
    description:
      "The claw-coded MMORPG where humans and AI agents grind together in an open economy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${cinzel.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
