"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { accelerators } from "@/data/accelerators";

const categories = ["All", "DevOps", "DevSecOps", "Platform Eng", "AI + DevOps"];

const colorMap: Record<string, { badge: string; border: string }> = {
  green: { badge: "bg-green/10 text-green border-green/30", border: "border-green/20 hover:border-green/50" },
  cyan: { badge: "bg-cyan/10 text-cyan border-cyan/30", border: "border-cyan/20 hover:border-cyan/50" },
  red: { badge: "bg-red/10 text-red border-red/30", border: "border-red/20 hover:border-red/50" },
  orange: { badge: "bg-orange/10 text-orange border-orange/30", border: "border-orange/20 hover:border-orange/50" },
};

export default function AcceleratorsPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? accelerators
    : accelerators.filter((a) => a.category === filter);

  return (
    <div className="grid-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Accelerators"
          title="PRODUCTION-READY. IN DAYS, NOT MONTHS."
          subtitle="Pre-built, battle-tested accelerators that fast-track your engineering maturity."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-mono transition-all ${
                filter === cat
                  ? "bg-green text-[#060810] font-bold"
                  : "border border-border text-secondary hover:border-green/30 hover:text-green"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accelerator Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((acc, i) => {
              const colors = colorMap[acc.categoryColor] || colorMap.green;
              return (
                <motion.div
                  key={acc.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  className={`p-6 rounded-xl border ${colors.border} bg-card transition-all ${acc.featured ? "ring-1 ring-orange/30" : ""}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-0.5 text-xs font-mono rounded border ${colors.badge}`}>
                      {acc.category}
                    </span>
                    {acc.featured && (
                      <span className="px-2 py-0.5 text-xs font-mono rounded bg-orange/10 text-orange border border-orange/30">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-xl tracking-wide text-foreground">{acc.name}</h3>
                  <p className="mt-2 text-sm text-secondary leading-relaxed">{acc.description}</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green font-mono">⏱</span>
                      <span className="text-muted">{acc.timeToValue}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-cyan font-mono">📈</span>
                      <span className="text-muted">{acc.starMetric}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {acc.tools.map((tool) => (
                      <span key={tool} className="px-2 py-0.5 text-xs font-mono text-muted border border-border rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    {acc.featured ? (
                      <Link
                        href="/accelerators/ai-native"
                        className="flex-1 text-center rounded-lg bg-orange px-4 py-2 text-sm font-semibold text-[#060810] hover:bg-orange/90 transition-colors"
                      >
                        View Details
                      </Link>
                    ) : (
                      <Link
                        href="/contact"
                        className="flex-1 text-center rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground hover:border-green/50 hover:text-green transition-colors"
                      >
                        Request Demo
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
