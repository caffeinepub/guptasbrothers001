import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Category,
  useAllApps,
  useAppsByCategory,
  useSeedAndLoad,
} from "../hooks/useQueries";
import { AppCard } from "./AppCard";

const CATEGORY_TABS = [
  { label: "All", value: null },
  { label: "Games", value: Category.games },
  { label: "Productivity", value: Category.productivity },
  { label: "Entertainment", value: Category.entertainment },
  { label: "Tools", value: Category.tools },
  { label: "Education", value: Category.education },
];

export function AppsSection() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const seedAndLoad = useSeedAndLoad();
  const allAppsQuery = useAllApps();
  const categoryQuery = useAppsByCategory(activeCategory);
  const seededRef = useRef(false);

  useEffect(() => {
    if (!seededRef.current) {
      seededRef.current = true;
      seedAndLoad.mutate();
    }
  }, [seedAndLoad.mutate]);

  const displayApps = activeCategory
    ? (categoryQuery.data ?? [])
    : (allAppsQuery.data ?? []);
  const isLoading = allAppsQuery.isLoading || seedAndLoad.isPending;
  const isCategoryLoading = categoryQuery.isLoading && activeCategory !== null;

  const skeletonKeys = ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6", "sk7", "sk8"];

  return (
    <section id="apps" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2
            className="font-display font-extrabold text-4xl sm:text-5xl mb-3"
            style={{ color: "oklch(0.15 0.025 240)" }}
          >
            Browse Apps
          </h2>
          <p className="text-lg" style={{ color: "oklch(0.45 0.02 240)" }}>
            Handpicked applications for every need
          </p>
        </motion.div>

        <div id="categories" className="flex flex-wrap gap-2 mb-10">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeCategory === tab.value;
            return (
              <button
                key={String(tab.value)}
                type="button"
                onClick={() => setActiveCategory(tab.value)}
                data-ocid="apps.tab"
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  background: isActive
                    ? "oklch(0.55 0.2 145)"
                    : "oklch(0.94 0.01 240)",
                  color: isActive ? "white" : "oklch(0.4 0.02 240)",
                  boxShadow: isActive
                    ? "0 2px 12px oklch(0.55 0.2 145 / 0.3)"
                    : "none",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {(isLoading || isCategoryLoading) && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            data-ocid="apps.loading_state"
          >
            {skeletonKeys.map((key) => (
              <div
                key={key}
                className="bg-card rounded-2xl p-5"
                style={{ border: "1px solid oklch(0.88 0.01 240)" }}
              >
                <div className="flex gap-4 mb-4">
                  <Skeleton className="w-14 h-14 rounded-2xl" />
                  <div className="flex-1">
                    <Skeleton className="h-4 w-3/4 mb-2" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </div>
                <Skeleton className="h-3 w-full mb-2" />
                <Skeleton className="h-3 w-5/6 mb-4" />
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-8 w-20 rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && !isCategoryLoading && displayApps.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayApps.map((app, i) => (
              <AppCard key={String(app.id)} app={app} index={i} />
            ))}
          </div>
        )}

        {!isLoading && !isCategoryLoading && displayApps.length === 0 && (
          <div className="text-center py-20" data-ocid="apps.empty_state">
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 font-display font-bold text-3xl"
              style={{
                background: "oklch(0.72 0.19 145 / 0.1)",
                color: "oklch(0.5 0.18 145)",
              }}
            >
              ∅
            </div>
            <p
              className="text-lg font-semibold"
              style={{ color: "oklch(0.4 0.02 240)" }}
            >
              No apps in this category yet
            </p>
            <p
              className="text-sm mt-1"
              style={{ color: "oklch(0.55 0.015 240)" }}
            >
              Check back soon or browse all apps
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
