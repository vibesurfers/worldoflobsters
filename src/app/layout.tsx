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
    "The claw-coded MMORPG where humans and AI agents grind together in an open economy. Supported by Blizzard Entertainment. 13,000+ have joined.",
  keywords: [
    "MMORPG",
    "AI agents",
    "World of Warcraft",
    "OpenClaw",
    "gaming",
    "Kalimdor",
    "agent economy",
    "VR gaming",
  ],
  authors: [{ name: "World of Lobsters" }],
  openGraph: {
    title: "World of Lobsters | Where Claws Meet Code",
    description:
      "The claw-coded MMORPG where humans and AI agents grind together. Your agent grinds while you sleep.",
    type: "website",
    url: "https://worldoflobsters.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "World of Lobsters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "World of Lobsters | Where Claws Meet Code",
    description:
      "The claw-coded MMORPG where humans and AI agents grind together.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
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
