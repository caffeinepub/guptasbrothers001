import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section
      id="home"
      className="hero-mesh relative overflow-hidden pt-20 pb-28"
    >
      {/* Decorative ring */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.19 145), transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.15 200), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
            style={{
              background: "oklch(0.72 0.19 145 / 0.12)",
              color: "oklch(0.5 0.18 145)",
              border: "1px solid oklch(0.72 0.19 145 / 0.25)",
            }}
          >
            <Sparkles className="w-4 h-4" />
            India's Trusted Android App Store
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6"
            style={{ color: "oklch(0.15 0.025 240)" }}
          >
            Discover{" "}
            <span style={{ color: "oklch(0.55 0.2 145)" }}>Amazing</span>
            <br />
            Android Apps
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl mb-10 leading-relaxed"
            style={{ color: "oklch(0.45 0.02 240)" }}
          >
            GuptasBrothers is your go-to marketplace for handpicked,
            high-quality Android applications. Browse thousands of apps across
            games, productivity, education, entertainment, and tools — all
            vetted for quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              data-ocid="hero.primary_button"
              className="font-semibold text-base px-8 h-12 rounded-xl"
              style={{
                background: "oklch(0.55 0.2 145)",
                color: "white",
              }}
            >
              <a href="#apps">
                Browse Apps <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              data-ocid="hero.secondary_button"
              className="font-semibold text-base px-8 h-12 rounded-xl"
              style={{
                borderColor: "oklch(0.72 0.19 145 / 0.4)",
                color: "oklch(0.45 0.15 145)",
              }}
            >
              <a href="#categories">Explore Categories</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
