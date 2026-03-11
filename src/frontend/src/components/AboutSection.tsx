import { HeartHandshake, ShieldCheck, Star, Zap } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: ShieldCheck,
    title: "Vetted & Safe",
    desc: "Every app is manually reviewed for safety, security, and quality before listing.",
  },
  {
    icon: Star,
    title: "Top Rated",
    desc: "Only the highest-rated apps make it to our curated marketplace.",
  },
  {
    icon: Zap,
    title: "Instant Downloads",
    desc: "Fast, direct APK downloads with no sign-up required for free apps.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Since 2020",
    desc: "GuptasBrothers has been serving millions of Android users across India.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24"
      style={{ background: "oklch(0.12 0.03 240)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text block */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{
                background: "oklch(0.72 0.19 145 / 0.15)",
                color: "oklch(0.72 0.19 145)",
              }}
            >
              About Us
            </span>
            <h2
              className="font-display font-extrabold text-4xl sm:text-5xl leading-tight mb-6"
              style={{ color: "oklch(0.95 0.01 240)" }}
            >
              Your Trusted Android
              <span style={{ color: "oklch(0.72 0.19 145)" }}>
                {" "}
                App Marketplace
              </span>
            </h2>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "oklch(0.65 0.015 240)" }}
            >
              GuptasBrothers was founded by the Gupta family with a simple
              mission: make it easy for every Android user in India to discover
              and download the best apps — safely and for free.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "oklch(0.55 0.015 240)" }}
            >
              We curate apps across five categories — Games, Productivity,
              Entertainment, Tools, and Education — so you always find exactly
              what you need. Our team personally tests every application before
              it goes live.
            </p>
          </motion.div>

          {/* Features grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-2xl"
                style={{
                  background: "oklch(0.18 0.03 240)",
                  border: "1px solid oklch(0.22 0.03 240)",
                }}
                data-ocid="about.card"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "oklch(0.72 0.19 145 / 0.15)" }}
                >
                  <f.icon
                    className="w-5 h-5"
                    style={{ color: "oklch(0.72 0.19 145)" }}
                  />
                </div>
                <h3
                  className="font-display font-bold text-sm mb-1"
                  style={{ color: "oklch(0.92 0.01 240)" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "oklch(0.6 0.015 240)" }}
                >
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
