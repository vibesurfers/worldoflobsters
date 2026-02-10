export function Footer() {
  return (
    <footer className="border-t border-ocean-teal/20 bg-ocean-deep px-4 py-12">
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
            <a href="/vision" className="transition-colors hover:text-ocean-teal">
              Vision
            </a>
            <a href="#" className="transition-colors hover:text-ocean-teal">
              Discord
            </a>
            <a href="#" className="transition-colors hover:text-ocean-teal">
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
