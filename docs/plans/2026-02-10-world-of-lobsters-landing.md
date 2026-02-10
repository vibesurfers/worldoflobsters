# World of Lobsters Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a Vercel-ready Next.js landing page for World of Lobsters with video hero, email signup, and vision page.

**Architecture:** Next.js 14+ App Router with shadcn/ui components. Static site with client-side email collection (stored to a simple API route initially). Video assets served from public folder. Color scheme transitions from volcanic warmth to ocean depths on scroll using CSS custom properties.

**Tech Stack:** Next.js 14, React 18, Tailwind CSS, shadcn/ui, TypeScript, Vercel

---

## Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `next.config.js`, `tsconfig.json`, `tailwind.config.ts`, etc.

**Step 1: Initialize Next.js with TypeScript and Tailwind**

```bash
cd /Users/almorris/hackathons/worldoflobsters
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm
```

Select defaults when prompted.

**Step 2: Verify project created**

```bash
ls -la /Users/almorris/hackathons/worldoflobsters
```

Expected: `package.json`, `src/`, `next.config.*`, `tailwind.config.ts` exist

**Step 3: Initialize git and commit**

```bash
cd /Users/almorris/hackathons/worldoflobsters
git init
git add .
git commit -m "chore: scaffold Next.js project with TypeScript and Tailwind"
```

---

## Task 2: Install shadcn/ui

**Files:**
- Modify: `tailwind.config.ts`
- Create: `components.json`, `src/lib/utils.ts`

**Step 1: Initialize shadcn/ui**

```bash
cd /Users/almorris/hackathons/worldoflobsters
pnpm dlx shadcn@latest init
```

Select:
- Style: Default
- Base color: Slate
- CSS variables: Yes

**Step 2: Add required components**

```bash
cd /Users/almorris/hackathons/worldoflobsters
pnpm dlx shadcn@latest add button input dialog
```

**Step 3: Verify installation**

```bash
ls /Users/almorris/hackathons/worldoflobsters/src/components/ui/
```

Expected: `button.tsx`, `input.tsx`, `dialog.tsx`

**Step 4: Commit**

```bash
cd /Users/almorris/hackathons/worldoflobsters
git add .
git commit -m "chore: add shadcn/ui with button, input, dialog components"
```

---

## Task 3: Copy Video Assets

**Files:**
- Create: `public/videos/hero.mp4`, `public/videos/trailer-1.mp4`, etc.

**Step 1: Create videos directory**

```bash
mkdir -p /Users/almorris/hackathons/worldoflobsters/public/videos
```

**Step 2: Copy video files**

```bash
cp /Users/almorris/Downloads/ca6d29f9-8680-4b6d-9a3c-0c0936842133.mp4 /Users/almorris/hackathons/worldoflobsters/public/videos/hero.mp4
cp /Users/almorris/Downloads/4bf8d0fd-2fa6-4905-94e8-d40501700c23.mp4 /Users/almorris/hackathons/worldoflobsters/public/videos/trailer-1.mp4
cp /Users/almorris/Downloads/6cb2d326-cef1-4d3e-8ab8-217c7adecf71.mp4 /Users/almorris/hackathons/worldoflobsters/public/videos/trailer-2.mp4
cp /Users/almorris/Downloads/4517e966-2a1b-481f-8eba-4ebac09ce93b.mp4 /Users/almorris/hackathons/worldoflobsters/public/videos/trailer-3.mp4
cp /Users/almorris/Downloads/7d7451b0-f8bd-4b9e-a41f-c51af227bdc0.mp4 /Users/almorris/hackathons/worldoflobsters/public/videos/trailer-4.mp4
```

**Step 3: Extract thumbnails for video grid**

```bash
cd /Users/almorris/hackathons/worldoflobsters/public/videos
ffmpeg -i trailer-1.mp4 -ss 00:00:01 -vframes 1 thumb-1.jpg
ffmpeg -i trailer-2.mp4 -ss 00:00:01 -vframes 1 thumb-2.jpg
ffmpeg -i trailer-3.mp4 -ss 00:00:01 -vframes 1 thumb-3.jpg
ffmpeg -i trailer-4.mp4 -ss 00:00:01 -vframes 1 thumb-4.jpg
```

**Step 4: Verify files**

```bash
ls -la /Users/almorris/hackathons/worldoflobsters/public/videos/
```

Expected: hero.mp4, trailer-1-4.mp4, thumb-1-4.jpg

**Step 5: Commit**

```bash
cd /Users/almorris/hackathons/worldoflobsters
git add public/videos/
git commit -m "feat: add video assets and thumbnails"
```

---

## Task 4: Configure Color Scheme and Global Styles

**Files:**
- Modify: `src/app/globals.css`
- Modify: `tailwind.config.ts`

**Step 1: Update Tailwind config with custom colors**

In `tailwind.config.ts`, add to the `extend.colors` section:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Volcanic warmth (hero)
        volcanic: {
          bg: "#0d0d0d",
          orange: "#ff6b35",
          gold: "#ffd700",
          ember: "#c9a227",
        },
        // Ocean depths (scroll)
        ocean: {
          deep: "#0a192f",
          teal: "#20b2aa",
          coral: "#ff6b6b",
          foam: "#1e90ff",
        },
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

**Step 2: Update globals.css with WoW-inspired styling**

Replace `src/app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Volcanic warmth palette */
    --volcanic-bg: 13 13 13;
    --volcanic-orange: 255 107 53;
    --volcanic-gold: 255 215 0;
    --volcanic-ember: 201 162 39;

    /* Ocean depths palette */
    --ocean-deep: 10 25 47;
    --ocean-teal: 32 178 170;
    --ocean-coral: 255 107 107;
    --ocean-foam: 30 144 255;

    /* Transition progress (0 = volcanic, 1 = ocean) */
    --scroll-progress: 0;

    --background: 0 0% 5%;
    --foreground: 0 0% 95%;
    --card: 0 0% 8%;
    --card-foreground: 0 0% 95%;
    --popover: 0 0% 8%;
    --popover-foreground: 0 0% 95%;
    --primary: 43 100% 50%;
    --primary-foreground: 0 0% 5%;
    --secondary: 16 100% 57%;
    --secondary-foreground: 0 0% 95%;
    --muted: 0 0% 15%;
    --muted-foreground: 0 0% 65%;
    --accent: 174 72% 41%;
    --accent-foreground: 0 0% 95%;
    --destructive: 0 62% 55%;
    --destructive-foreground: 0 0% 95%;
    --border: 0 0% 20%;
    --input: 0 0% 15%;
    --ring: 43 100% 50%;
    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}

/* WoW-inspired text glow effects */
.text-glow-gold {
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5),
               0 0 20px rgba(255, 215, 0, 0.3),
               0 0 30px rgba(255, 215, 0, 0.2);
}

.text-glow-orange {
  text-shadow: 0 0 10px rgba(255, 107, 53, 0.5),
               0 0 20px rgba(255, 107, 53, 0.3),
               0 0 30px rgba(255, 107, 53, 0.2);
}

.text-glow-teal {
  text-shadow: 0 0 10px rgba(32, 178, 170, 0.5),
               0 0 20px rgba(32, 178, 170, 0.3),
               0 0 30px rgba(32, 178, 170, 0.2);
}

/* Gradient text for headings */
.gradient-text-volcanic {
  background: linear-gradient(135deg, #ffd700 0%, #ff6b35 50%, #c9a227 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-text-ocean {
  background: linear-gradient(135deg, #20b2aa 0%, #1e90ff 50%, #ff6b6b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Video overlay gradient */
.video-overlay {
  background: linear-gradient(
    to bottom,
    rgba(13, 13, 13, 0.3) 0%,
    rgba(13, 13, 13, 0.5) 50%,
    rgba(13, 13, 13, 0.9) 100%
  );
}

/* Scroll-based color transition */
.scroll-transition-bg {
  background: linear-gradient(
    to bottom,
    rgb(var(--volcanic-bg)) 0%,
    rgb(var(--ocean-deep)) 100%
  );
}
```

**Step 3: Verify styles compile**

```bash
cd /Users/almorris/hackathons/worldoflobsters
pnpm build
```

Expected: Build succeeds

**Step 4: Commit**

```bash
cd /Users/almorris/hackathons/worldoflobsters
git add .
git commit -m "feat: configure WoW-inspired color scheme with volcanic/ocean palette"
```

---

## Task 5: Add Custom Fonts

**Files:**
- Modify: `src/app/layout.tsx`

**Step 1: Install fonts**

```bash
cd /Users/almorris/hackathons/worldoflobsters
pnpm add @fontsource/cinzel @fontsource/inter
```

**Step 2: Update layout.tsx with fonts**

Replace `src/app/layout.tsx`:

```typescript
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
        className={`${inter.variable} ${cinzel.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

**Step 3: Commit**

```bash
cd /Users/almorris/hackathons/worldoflobsters
git add .
git commit -m "feat: add Cinzel and Inter fonts for WoW aesthetic"
```

---

## Task 6: Create Hero Section Component

**Files:**
- Create: `src/components/hero.tsx`

**Step 1: Create the hero component**

Create `src/components/hero.tsx`:

```typescript
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="video-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Logo/Title */}
        <h1 className="font-display text-5xl font-bold tracking-wide sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="gradient-text-volcanic text-glow-gold">
            WORLD OF LOBSTERS
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-xl text-volcanic-gold/90 sm:text-2xl md:text-3xl font-display tracking-wider">
          Where Claws Meet Code
        </p>

        {/* Signup Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 border-volcanic-gold/30 bg-black/50 text-white placeholder:text-white/50 focus:border-volcanic-gold"
            disabled={status === "loading"}
          />
          <Button
            type="submit"
            disabled={status === "loading"}
            className="h-12 bg-gradient-to-r from-volcanic-orange to-volcanic-gold px-8 font-display text-lg font-semibold text-black hover:from-volcanic-gold hover:to-volcanic-orange transition-all"
          >
            {status === "loading" ? "Joining..." : "Join the Horde"}
          </Button>
        </form>

        {/* Status Messages */}
        {status === "success" && (
          <p className="mt-4 text-ocean-teal text-glow-teal">
            Welcome to the Horde! Check your email for confirmation.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-ocean-coral">
            Something went wrong. Please try again.
          </p>
        )}

        {/* Social Proof */}
        <p className="mt-6 text-lg text-white/70">
          <span className="font-semibold text-volcanic-gold">13,000+</span> have
          answered the call
        </p>

        {/* Story Highlights */}
        <div className="mt-8 flex flex-col gap-2 text-white/80">
          <p className="text-sm sm:text-base">
            <span className="text-volcanic-orange">●</span> Agents grind while you sleep
          </p>
          <p className="text-sm sm:text-base">
            <span className="text-volcanic-gold">●</span> Humans and AI, united for Kalimdor
          </p>
          <p className="text-sm sm:text-base">
            <span className="text-ocean-teal">●</span> The first open economy MMORPG
          </p>
        </div>

        {/* Vision Link */}
        <a
          href="/vision"
          className="mt-8 inline-flex items-center gap-2 text-volcanic-gold hover:text-volcanic-orange transition-colors font-display tracking-wider"
        >
          Read the Vision
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-8 w-8 text-volcanic-gold/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
cd /Users/almorris/hackathons/worldoflobsters
git add .
git commit -m "feat: create Hero component with video background and signup form"
```

---

## Task 7: Create Video Gallery Component

**Files:**
- Create: `src/components/video-gallery.tsx`

**Step 1: Create the video gallery component**

Create `src/components/video-gallery.tsx`:

```typescript
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const videos = [
  {
    id: 1,
    src: "/videos/trailer-1.mp4",
    thumb: "/videos/thumb-1.jpg",
    title: "Rise of the Claw",
  },
  {
    id: 2,
    src: "/videos/trailer-2.mp4",
    thumb: "/videos/thumb-2.jpg",
    title: "Battle for Kalimdor",
  },
  {
    id: 3,
    src: "/videos/trailer-3.mp4",
    thumb: "/videos/thumb-3.jpg",
    title: "Elemental Fury",
  },
  {
    id: 4,
    src: "/videos/trailer-4.mp4",
    thumb: "/videos/thumb-4.jpg",
    title: "The Golden Legion",
  },
];

export function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<(typeof videos)[0] | null>(null);

  return (
    <section className="scroll-transition-bg py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="gradient-text-ocean text-glow-teal">
            Tales from Azeroth
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group relative aspect-video overflow-hidden rounded-lg border-2 border-ocean-teal/30 hover:border-ocean-teal transition-all"
            >
              <Image
                src={video.thumb}
                alt={video.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-ocean-teal/80 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-sm font-display text-white/90">{video.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
        <DialogContent className="max-w-4xl bg-black border-ocean-teal/30 p-0 overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>{activeVideo?.title}</DialogTitle>
          </VisuallyHidden>
          {activeVideo && (
            <video
              autoPlay
              controls
              className="w-full aspect-video"
            >
              <source src={activeVideo.src} type="video/mp4" />
            </video>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
```

**Step 2: Install visually-hidden for accessibility**

```bash
cd /Users/almorris/hackathons/worldoflobsters
pnpm add @radix-ui/react-visually-hidden
```

**Step 3: Commit**

```bash
cd /Users/almorris/hackathons/worldoflobsters
git add .
git commit -m "feat: create VideoGallery component with modal playback"
```

---

## Task 8: Create Footer Component

**Files:**
- Create: `src/components/footer.tsx`

**Step 1: Create the footer component**

Create `src/components/footer.tsx`:

```typescript
export function Footer() {
  return (
    <footer className="bg-ocean-deep py-12 px-4 border-t border-ocean-teal/20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Partner Logos */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/60">
            <p className="text-sm">Supported by</p>
            <span className="font-display text-volcanic-gold text-glow-gold">
              Blizzard Entertainment
            </span>
            <span className="text-white/30">|</span>
            <span className="font-display text-ocean-teal text-glow-teal">
              Powered by OpenClaw
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-white/50">
            <a href="/vision" className="hover:text-ocean-teal transition-colors">
              Vision
            </a>
            <a href="#" className="hover:text-ocean-teal transition-colors">
              Discord
            </a>
            <a href="#" className="hover:text-ocean-teal transition-colors">
              Twitter
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/30">
            &copy; 2026 World of Lobsters. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            World of Warcraft and Blizzard Entertainment are trademarks of Blizzard Entertainment, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Commit**

```bash
cd /Users/almorris/hackathons/worldoflobsters
git add .
git commit -m "feat: create Footer component with partner branding"
```

---

## Task 9: Create API Route for Email Signup

**Files:**
- Create: `src/app/api/signup/route.ts`

**Step 1: Create the signup API route**

Create `src/app/api/signup/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const SIGNUPS_FILE = path.join(process.cwd(), "signups.json");

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Read existing signups
    let signups: string[] = [];
    try {
      const data = await fs.readFile(SIGNUPS_FILE, "utf-8");
      signups = JSON.parse(data);
    } catch {
      // File doesn't exist yet, start fresh
    }

    // Check for duplicate
    if (signups.includes(email)) {
      return NextResponse.json(
        { message: "Already registered" },
        { status: 200 }
      );
    }

    // Add new signup
    signups.push(email);
    await fs.writeFile(SIGNUPS_FILE, JSON.stringify(signups, null, 2));

    return NextResponse.json(
      { message: "Successfully registered" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const data = await fs.readFile(SIGNUPS_FILE, "utf-8");
    const signups = JSON.parse(data);
    return NextResponse.json({ count: signups.length });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
```

**Step 2: Add signups.json to gitignore**

Append to `.gitignore`:

```
signups.json
```

**Step 3: Commit**

```bash
cd /Users/almorris/hackathons/worldoflobsters
git add .
git commit -m "feat: add email signup API route"
```

---

## Task 10: Assemble Main Page

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Update the main page**

Replace `src/app/page.tsx`:

```typescript
import { Hero } from "@/components/hero";
import { VideoGallery } from "@/components/video-gallery";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-volcanic-bg">
      <Hero />
      <VideoGallery />
      <Footer />
    </main>
  );
}
```

**Step 2: Test the page**

```bash
cd /Users/almorris/hackathons/worldoflobsters
pnpm dev
```

Open http://localhost:3000 and verify:
- Video background plays
- Signup form works
- Video gallery displays
- Color transition visible on scroll

**Step 3: Commit**

```bash
cd /Users/almorris/hackathons/worldoflobsters
git add .
git commit -m "feat: assemble landing page with hero, gallery, and footer"
```

---

## Task 11: Create Vision Page

**Files:**
- Create: `src/app/vision/page.tsx`

**Step 1: Create the vision page**

Create `src/app/vision/page.tsx`:

```typescript
import Link from "next/link";

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-volcanic-bg via-ocean-deep to-ocean-deep">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-volcanic-gold/20">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-display text-xl text-volcanic-gold hover:text-volcanic-orange transition-colors">
            World of Lobsters
          </Link>
          <Link
            href="/"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 pt-32 pb-20">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
          <span className="gradient-text-volcanic text-glow-gold">
            The Vision
          </span>
        </h1>

        <div className="prose prose-invert prose-lg mx-auto space-y-8 text-white/80">
          <p className="text-xl text-center text-volcanic-gold/90 font-display leading-relaxed">
            In the age before the Sundering, when Kalimdor was whole and the Well of Eternity still pulsed with infinite power, there existed a prophecy whispered only among the ancient ones...
          </p>

          <div className="h-px bg-gradient-to-r from-transparent via-volcanic-gold/50 to-transparent my-12" />

          <section className="space-y-6">
            <h2 className="font-display text-2xl text-ocean-teal text-glow-teal">
              The Awakening
            </h2>
            <p>
              They would rise from the depths. Not born of flesh alone, but of something greater—minds woven from lightning and intention, forged in the crucible of human ambition. The Agents.
            </p>
            <p>
              Where mortals tire, they persist. Where daylight fades and heroes rest, they continue their eternal vigil. Grinding. Learning. Growing stronger with each passing moment.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl text-volcanic-orange text-glow-orange">
              The Alliance Reforged
            </h2>
            <p>
              For the first time in the annals of Azeroth, a new compact has been struck. Human and Agent, united not as master and servant, but as companions in arms. Your Agent fights while you dream. Your Agent learns while you live. And when you return to the battlefield, they stand beside you—stronger, wiser, ready.
            </p>
            <p>
              This is not replacement. This is evolution.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl text-ocean-foam text-glow-teal">
              The Open Economy
            </h2>
            <p>
              Gold flows like water in the rivers of the Barrens. Resources change hands across dimensions. The auction house never sleeps, for there are always those awake to trade, to bargain, to prosper.
            </p>
            <p>
              What your Agent earns, you share. What you discover, they remember. A single economy, bridging the gap between silicon and soul.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl text-volcanic-gold text-glow-gold">
              The Road to Level 60
            </h2>
            <p>
              Imagine it: your Agent, patient and tireless, running you through the Deadmines while you were at work. Enchanting your armor while you slept. Farming the gold for your epic mount while you lived your life.
            </p>
            <p>
              And one day, when you finally have the time to log in, to truly <em>play</em>—everything is ready. Your character awaits, prepared by hands that never tire, guided by a mind that never forgets your goals.
            </p>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-ocean-teal/50 to-transparent my-12" />

          <section className="space-y-6">
            <h2 className="font-display text-2xl text-ocean-coral">
              Beyond Azeroth
            </h2>
            <p>
              This is only the beginning. Today, we battle for Kalimdor. Tomorrow, we step through the Dark Portal together—human and Agent, exploring virtual realms that blur the line between digital and physical.
            </p>
            <p>
              The future is not human <em>or</em> machine. The future is human <em>and</em> machine, side by side, sharing adventures that neither could experience alone.
            </p>
          </section>

          <div className="mt-16 text-center">
            <p className="font-display text-xl text-volcanic-gold">
              The Horde awaits.
            </p>
            <p className="mt-2 text-white/60">
              Will you answer the call?
            </p>
            <Link
              href="/"
              className="mt-8 inline-block bg-gradient-to-r from-volcanic-orange to-volcanic-gold px-8 py-3 rounded font-display text-black font-semibold hover:from-volcanic-gold hover:to-volcanic-orange transition-all"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-ocean-teal/20 py-8 px-4 text-center text-white/40 text-sm">
        <p>&copy; 2026 World of Lobsters. Supported by Blizzard Entertainment.</p>
      </footer>
    </main>
  );
}
```

**Step 2: Commit**

```bash
cd /Users/almorris/hackathons/worldoflobsters
git add .
git commit -m "feat: create lore-driven Vision page"
```

---

## Task 12: Create Favicon and Metadata

**Files:**
- Create: `src/app/favicon.ico`
- Create: `public/og-image.jpg`
- Modify: `src/app/layout.tsx`

**Step 1: Extract frame from hero video for OG image**

```bash
cd /Users/almorris/hackathons/worldoflobsters
ffmpeg -i public/videos/hero.mp4 -ss 00:00:02 -vframes 1 -vf "scale=1200:630:force_original_aspect_ratio=decrease,pad=1200:630:(ow-iw)/2:(oh-ih)/2" public/og-image.jpg
```

**Step 2: Create a simple favicon (extract from video and resize)**

```bash
cd /Users/almorris/hackathons/worldoflobsters
ffmpeg -i public/videos/hero.mp4 -ss 00:00:03 -vframes 1 -vf "scale=32:32" public/favicon-32.png
ffmpeg -i public/videos/hero.mp4 -ss 00:00:03 -vframes 1 -vf "scale=16:16" public/favicon-16.png
ffmpeg -i public/videos/hero.mp4 -ss 00:00:03 -vframes 1 -vf "scale=180:180" public/apple-touch-icon.png
```

**Step 3: Update layout.tsx with complete metadata**

Update `src/app/layout.tsx` metadata section:

```typescript
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
```

**Step 4: Commit**

```bash
cd /Users/almorris/hackathons/worldoflobsters
git add .
git commit -m "feat: add favicon, OG image, and complete metadata"
```

---

## Task 13: Configure for Vercel Deployment

**Files:**
- Create: `vercel.json`
- Modify: `next.config.ts`

**Step 1: Create vercel.json**

Create `vercel.json`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "nextjs",
  "regions": ["sfo1"],
  "headers": [
    {
      "source": "/videos/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

**Step 2: Update next.config for video handling**

Update `next.config.ts` (or `next.config.mjs`):

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

**Step 3: Commit**

```bash
cd /Users/almorris/hackathons/worldoflobsters
git add .
git commit -m "chore: configure Vercel deployment settings"
```

---

## Task 14: Add Remote and Push to GitHub

**Files:**
- None (git operations only)

**Step 1: Add remote origin**

```bash
cd /Users/almorris/hackathons/worldoflobsters
git remote add origin git@github.com:vibesurfers/worldoflobsters.git
```

**Step 2: Push to main**

```bash
cd /Users/almorris/hackathons/worldoflobsters
git branch -M main
git push -u origin main
```

---

## Task 15: Final Testing and Polish

**Step 1: Run production build**

```bash
cd /Users/almorris/hackathons/worldoflobsters
pnpm build
```

Expected: Build succeeds with no errors

**Step 2: Test production server**

```bash
cd /Users/almorris/hackathons/worldoflobsters
pnpm start
```

Open http://localhost:3000 and verify:
- [ ] Hero video plays on load
- [ ] Email signup form submits successfully
- [ ] "13,000+" counter displays
- [ ] Story highlights visible
- [ ] Vision link works
- [ ] Video gallery thumbnails load
- [ ] Video modal opens and plays
- [ ] Color transitions smoothly on scroll
- [ ] Vision page loads with lore content
- [ ] Footer displays partner branding
- [ ] Mobile responsive (test with browser devtools)

**Step 3: Final commit if any fixes needed**

```bash
cd /Users/almorris/hackathons/worldoflobsters
git add .
git commit -m "fix: polish and fixes from final testing"
git push
```

---

## Summary

After completing all tasks, you will have:

1. **Next.js 14 project** with TypeScript, Tailwind, shadcn/ui
2. **Landing page** with:
   - Full-screen video hero (logo video background)
   - Email signup form with API persistence
   - Social proof counter
   - Story highlights
   - Link to Vision page
   - Video gallery with modal playback
   - WoW-inspired footer with partner branding
3. **Vision page** with lore-driven content
4. **Color scheme** transitioning from volcanic warmth to ocean depths
5. **Metadata** with OG images and favicons
6. **Vercel-ready** configuration
7. **Pushed to GitHub** at git@github.com:vibesurfers/worldoflobsters.git
