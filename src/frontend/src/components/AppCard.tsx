import { Button } from "@/components/ui/button";
import { Download, Star } from "lucide-react";
import { motion } from "motion/react";
import type { App } from "../hooks/useQueries";

const ICON_BG_CLASSES = [
  "icon-bg-1",
  "icon-bg-2",
  "icon-bg-3",
  "icon-bg-4",
  "icon-bg-5",
  "icon-bg-6",
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  games: { bg: "oklch(0.55 0.2 270 / 0.12)", text: "oklch(0.45 0.18 270)" },
  productivity: {
    bg: "oklch(0.72 0.19 145 / 0.12)",
    text: "oklch(0.45 0.18 145)",
  },
  entertainment: {
    bg: "oklch(0.6 0.22 30 / 0.12)",
    text: "oklch(0.45 0.2 30)",
  },
  tools: { bg: "oklch(0.55 0.18 200 / 0.12)", text: "oklch(0.4 0.15 200)" },
  education: { bg: "oklch(0.65 0.15 80 / 0.12)", text: "oklch(0.45 0.14 80)" },
};

const CATEGORY_LABELS: Record<string, string> = {
  games: "Games",
  productivity: "Productivity",
  entertainment: "Entertainment",
  tools: "Tools",
  education: "Education",
};

interface AppCardProps {
  app: App;
  index: number;
}

export function AppCard({ app, index }: AppCardProps) {
  const iconBg = ICON_BG_CLASSES[Number(app.id) % ICON_BG_CLASSES.length];
  const catColor = CATEGORY_COLORS[app.category] ?? {
    bg: "oklch(0.9 0.01 240)",
    text: "oklch(0.4 0.02 240)",
  };
  const catLabel = CATEGORY_LABELS[app.category] ?? app.category;

  const formatDownloads = (n: bigint) => {
    const num = Number(n);
    if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
    if (num >= 1_000) return `${(num / 1_000).toFixed(0)}K`;
    return String(num);
  };

  const initials = app.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const hasRealIcon =
    app.iconUrl?.startsWith("http") && !app.iconUrl.includes("placeholder");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 6) * 0.06 }}
      whileHover={{ y: -4 }}
      className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
      style={{ border: "1px solid oklch(0.88 0.01 240)" }}
      data-ocid={`apps.item.${index + 1}`}
    >
      <div className="p-5">
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${iconBg}`}
          >
            {hasRealIcon ? (
              <img
                src={app.iconUrl}
                alt={app.name}
                className="w-10 h-10 rounded-xl object-cover"
              />
            ) : (
              <span className="text-white font-display font-bold text-lg">
                {initials}
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className="font-display font-bold text-base leading-tight truncate"
              style={{ color: "oklch(0.15 0.025 240)" }}
            >
              {app.name}
            </h3>
            <span
              className="inline-block mt-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full"
              style={{ background: catColor.bg, color: catColor.text }}
            >
              {catLabel}
            </span>
          </div>
        </div>

        <p
          className="text-sm leading-relaxed line-clamp-2 mb-4"
          style={{ color: "oklch(0.45 0.02 240)" }}
        >
          {app.description}
        </p>

        <div
          className="flex items-center gap-3 mb-4 text-xs"
          style={{ color: "oklch(0.5 0.02 240)" }}
        >
          <span className="flex items-center gap-1">
            <Star
              className="w-3.5 h-3.5 fill-current"
              style={{ color: "oklch(0.7 0.18 80)" }}
            />
            <span
              className="font-semibold"
              style={{ color: "oklch(0.3 0.02 240)" }}
            >
              {app.rating.toFixed(1)}
            </span>
          </span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
          <span className="flex items-center gap-1">
            <Download className="w-3.5 h-3.5" />
            {formatDownloads(app.downloadCount)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span
            className="font-display font-bold text-sm"
            style={{
              color:
                app.price == null || app.price === 0
                  ? "oklch(0.5 0.18 145)"
                  : "oklch(0.4 0.15 270)",
            }}
          >
            {app.price == null || app.price === 0 ? "Free" : `₹${app.price}`}
          </span>
          <Button
            size="sm"
            data-ocid={`apps.item.button.${index + 1}`}
            className="rounded-xl font-semibold text-xs h-8 px-4"
            style={{ background: "oklch(0.55 0.2 145)", color: "white" }}
          >
            Get App
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
