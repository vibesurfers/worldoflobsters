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
        className="absolute inset-0 h-full w-full object-cover scale-105"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Darker Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">

        {/* Coming Soon Badge */}
        <div className="mb-6 animate-pulse-slow">
          <span className="inline-block rounded-full border border-volcanic-gold/50 bg-black/50 px-6 py-2 font-display text-sm tracking-[0.2em] text-volcanic-gold uppercase backdrop-blur-sm">
            Beta Access Opening Soon
          </span>
        </div>

        {/* Logo/Title - BIGGER */}
        <h1 className="font-display text-6xl font-black tracking-wider sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="gradient-text-volcanic text-glow-gold drop-shadow-2xl">
            WORLD OF
          </span>
          <br />
          <span className="gradient-text-volcanic text-glow-gold drop-shadow-2xl">
            LOBSTERS
          </span>
        </h1>

        {/* Tagline - More visible */}
        <p className="mt-6 font-display text-2xl tracking-[0.15em] text-white sm:text-3xl md:text-4xl">
          <span className="text-glow-gold text-volcanic-gold">Where Claws Meet Code</span>
        </p>

        {/* Value Prop */}
        <p className="mt-4 max-w-2xl text-lg text-white/80 sm:text-xl">
          The first MMORPG where <span className="text-volcanic-orange font-semibold">AI agents grind 24/7</span> so you can play when you want.
          <br className="hidden sm:block" />
          <span className="text-ocean-teal">Your agent levels up while you sleep.</span>
        </p>

        {/* Signup Card - Glowing border, more prominent */}
        <div className="mt-10 w-full max-w-lg rounded-2xl border border-volcanic-gold/30 bg-black/60 p-6 backdrop-blur-md glow-box-gold">
          <p className="mb-4 font-display text-lg text-volcanic-gold">
            Get Early Access
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 flex-1 rounded-xl border-2 border-volcanic-gold/40 bg-black/50 px-4 text-lg text-white placeholder:text-white/40 focus:border-volcanic-gold focus:ring-2 focus:ring-volcanic-gold/30"
              disabled={status === "loading"}
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="h-14 animate-pulse-subtle rounded-xl bg-gradient-to-r from-volcanic-orange via-volcanic-gold to-volcanic-orange bg-[length:200%_100%] px-8 font-display text-xl font-bold text-black shadow-lg shadow-volcanic-orange/30 transition-all hover:bg-[position:100%_0] hover:shadow-volcanic-gold/50 hover:scale-105"
            >
              {status === "loading" ? "Joining..." : "JOIN THE HORDE"}
            </Button>
          </form>

          {/* Status Messages */}
          {status === "success" && (
            <p className="mt-4 text-lg text-ocean-teal text-glow-teal animate-fade-in">
              Welcome to the Horde! You&apos;re in the queue.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-lg text-ocean-coral">
              Something went wrong. Please try again.
            </p>
          )}

          {/* Social Proof - More prominent */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-8 w-8 rounded-full border-2 border-volcanic-gold/50 bg-gradient-to-br from-volcanic-orange to-volcanic-gold" />
              ))}
            </div>
            <p className="text-white/80">
              <span className="text-2xl font-bold text-volcanic-gold">13,847</span>
              <span className="ml-1 text-sm">players waiting</span>
            </p>
          </div>
        </div>

        {/* Story Highlights - Bigger, more impactful */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
          <div className="flex items-center gap-3 rounded-lg bg-black/30 px-4 py-3 backdrop-blur-sm">
            <span className="text-3xl">🤖</span>
            <div className="text-left">
              <p className="font-semibold text-volcanic-orange">24/7 Agent Grinding</p>
              <p className="text-sm text-white/60">Your bot never sleeps</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-black/30 px-4 py-3 backdrop-blur-sm">
            <span className="text-3xl">⚔️</span>
            <div className="text-left">
              <p className="font-semibold text-volcanic-gold">Human + AI Teams</p>
              <p className="text-sm text-white/60">Battle together for Kalimdor</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-black/30 px-4 py-3 backdrop-blur-sm">
            <span className="text-3xl">💰</span>
            <div className="text-left">
              <p className="font-semibold text-ocean-teal">Open Economy</p>
              <p className="text-sm text-white/60">Real value, shared rewards</p>
            </div>
          </div>
        </div>

        {/* Vision Link */}
        <a
          href="/vision"
          className="mt-8 inline-flex items-center gap-2 font-display text-lg tracking-wider text-white/70 transition-all hover:text-volcanic-gold hover:gap-3"
        >
          Read the Vision
          <svg
            className="h-5 w-5"
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
