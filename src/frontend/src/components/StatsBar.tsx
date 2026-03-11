import { Download, Grid3x3, Package } from "lucide-react";
import { motion } from "motion/react";
import type { App } from "../hooks/useQueries";

interface StatsBarProps {
  apps: App[];
}

export function StatsBar({ apps }: StatsBarProps) {
  const totalDownloads = apps.reduce(
    (sum, app) => sum + Number(app.downloadCount),
    0,
  );
  const uniqueCategories = new Set(apps.map((a) => a.category)).size;

  const formatNumber = (n: number) => {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M+`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K+`;
    return String(n);
  };

  const stats = [
    { icon: Package, label: "Total Apps", value: String(apps.length) },
    {
      icon: Download,
      label: "Total Downloads",
      value: formatNumber(totalDownloads),
    },
    {
      icon: Grid3x3,
      label: "Categories",
      value: String(uniqueCategories || 5),
    },
  ];

  return (
    <section
      className="py-8 border-y"
      style={{
        borderColor: "oklch(0.88 0.01 240)",
        background: "oklch(0.97 0.005 240)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-4"
              data-ocid="stats.card"
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "oklch(0.72 0.19 145 / 0.12)" }}
              >
                <stat.icon
                  className="w-5 h-5"
                  style={{ color: "oklch(0.5 0.18 145)" }}
                />
              </div>
              <div className="text-center sm:text-left">
                <div
                  className="font-display font-bold text-2xl sm:text-3xl leading-none"
                  style={{ color: "oklch(0.15 0.025 240)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs sm:text-sm mt-1"
                  style={{ color: "oklch(0.5 0.02 240)" }}
                >
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
