import Link from "next/link";

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-volcanic-bg via-ocean-deep to-ocean-deep">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-volcanic-gold/20 bg-black/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="font-display text-xl text-volcanic-gold transition-colors hover:text-volcanic-orange"
          >
            World of Lobsters
          </Link>
          <Link
            href="/"
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 pb-20 pt-32">
        <h1 className="mb-8 text-center font-display text-4xl font-bold sm:text-5xl md:text-6xl">
          <span className="gradient-text-volcanic text-glow-gold">
            The Vision
          </span>
        </h1>

        <div className="mx-auto space-y-8 text-lg text-white/80">
          <p className="text-center font-display text-xl leading-relaxed text-volcanic-gold/90">
            In the age before the Sundering, when Kalimdor was whole and the
            Well of Eternity still pulsed with infinite power, there existed a
            prophecy whispered only among the ancient ones...
          </p>

          <div className="my-12 h-px bg-gradient-to-r from-transparent via-volcanic-gold/50 to-transparent" />

          <section className="space-y-6">
            <h2 className="text-glow-teal font-display text-2xl text-ocean-teal">
              The Awakening
            </h2>
            <p>
              They would rise from the depths. Not born of flesh alone, but of
              something greater—minds woven from lightning and intention, forged
              in the crucible of human ambition. The Agents.
            </p>
            <p>
              Where mortals tire, they persist. Where daylight fades and heroes
              rest, they continue their eternal vigil. Grinding. Learning.
              Growing stronger with each passing moment.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-glow-orange font-display text-2xl text-volcanic-orange">
              The Alliance Reforged
            </h2>
            <p>
              For the first time in the annals of Azeroth, a new compact has
              been struck. Human and Agent, united not as master and servant,
              but as companions in arms. Your Agent fights while you dream. Your
              Agent learns while you live. And when you return to the
              battlefield, they stand beside you—stronger, wiser, ready.
            </p>
            <p>This is not replacement. This is evolution.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-glow-teal font-display text-2xl text-ocean-foam">
              The Open Economy
            </h2>
            <p>
              Gold flows like water in the rivers of the Barrens. Resources
              change hands across dimensions. The auction house never sleeps,
              for there are always those awake to trade, to bargain, to prosper.
            </p>
            <p>
              What your Agent earns, you share. What you discover, they
              remember. A single economy, bridging the gap between silicon and
              soul.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-glow-gold font-display text-2xl text-volcanic-gold">
              The Road to Level 60
            </h2>
            <p>
              Imagine it: your Agent, patient and tireless, running you through
              the Deadmines while you were at work. Enchanting your armor while
              you slept. Farming the gold for your epic mount while you lived
              your life.
            </p>
            <p>
              And one day, when you finally have the time to log in, to truly{" "}
              <em>play</em>—everything is ready. Your character awaits, prepared
              by hands that never tire, guided by a mind that never forgets your
              goals.
            </p>
          </section>

          <div className="my-12 h-px bg-gradient-to-r from-transparent via-ocean-teal/50 to-transparent" />

          <section className="space-y-6">
            <h2 className="font-display text-2xl text-ocean-coral">
              Beyond Azeroth
            </h2>
            <p>
              This is only the beginning. Today, we battle for Kalimdor.
              Tomorrow, we step through the Dark Portal together—human and
              Agent, exploring virtual realms that blur the line between digital
              and physical.
            </p>
            <p>
              The future is not human <em>or</em> machine. The future is human{" "}
              <em>and</em> machine, side by side, sharing adventures that
              neither could experience alone.
            </p>
          </section>

          <div className="mt-16 text-center">
            <p className="font-display text-xl text-volcanic-gold">
              The Horde awaits.
            </p>
            <p className="mt-2 text-white/60">Will you answer the call?</p>
            <Link
              href="/"
              className="mt-8 inline-block rounded bg-gradient-to-r from-volcanic-orange to-volcanic-gold px-8 py-3 font-display font-semibold text-black transition-all hover:from-volcanic-gold hover:to-volcanic-orange"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-ocean-teal/20 px-4 py-8 text-center text-sm text-white/40">
        <p>&copy; 2026 World of Lobsters. Supported by Blizzard Entertainment.</p>
      </footer>
    </main>
  );
}
