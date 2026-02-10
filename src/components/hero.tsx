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
        <p className="mt-4 font-display text-xl tracking-wider text-volcanic-gold/90 sm:text-2xl md:text-3xl">
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
            className="h-12 bg-gradient-to-r from-volcanic-orange to-volcanic-gold px-8 font-display text-lg font-semibold text-black transition-all hover:from-volcanic-gold hover:to-volcanic-orange"
          >
            {status === "loading" ? "Joining..." : "Join the Horde"}
          </Button>
        </form>

        {/* Status Messages */}
        {status === "success" && (
          <p className="text-glow-teal mt-4 text-ocean-teal">
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
            <span className="text-volcanic-orange">&#x25CF;</span> Agents grind while you sleep
          </p>
          <p className="text-sm sm:text-base">
            <span className="text-volcanic-gold">&#x25CF;</span> Humans and AI, united for Kalimdor
          </p>
          <p className="text-sm sm:text-base">
            <span className="text-ocean-teal">&#x25CF;</span> The first open economy MMORPG
          </p>
        </div>

        {/* Vision Link */}
        <a
          href="/vision"
          className="mt-8 inline-flex items-center gap-2 font-display tracking-wider text-volcanic-gold transition-colors hover:text-volcanic-orange"
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
