"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { tools, toolCategories } from "@/data/tools";

const categoryColors: Record<string, string> = {
  "CI/CD": "border-green/30 text-green",
  "GitOps": "border-green/30 text-green",
  "IaC": "border-green/30 text-green",
  "Containers": "border-cyan/30 text-cyan",
  "Kubernetes": "border-cyan/30 text-cyan",
  "Service Mesh": "border-cyan/30 text-cyan",
  "Security": "border-red/30 text-red",
  "Observability": "border-cyan/30 text-cyan",
  "AIOps": "border-orange/30 text-orange",
  "FinOps": "border-orange/30 text-orange",
  "Chaos": "border-orange/30 text-orange",
};

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All" ? tools : tools.filter((t) => t.category === activeCategory);

  return (
    <div className="grid-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Ecosystem"
          title="TOOLS & ECOSYSTEM"
          subtitle="50+ tools we integrate, manage, and optimize. Your stack, our expertise."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-lg text-sm font-mono transition-all ${
              activeCategory === "All" ? "bg-green text-[#060810] font-bold" : "border border-border text-secondary hover:text-green"
            }`}
          >
            All
          </button>
          {toolCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-mono transition-all ${
                activeCategory === cat ? "bg-green text-[#060810] font-bold" : "border border-border text-secondary hover:text-green"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tool Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((tool) => {
              const colors = categoryColors[tool.category] || "border-border text-secondary";
              return (
                <motion.div
                  key={tool.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`p-4 rounded-xl border ${colors} bg-card hover:bg-card-hover transition-all text-center`}
                >
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-white/5 flex items-center justify-center font-mono text-xs font-bold">
                    {tool.name.slice(0, 2).toUpperCase()}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{tool.name}</h3>
                  <p className="text-xs text-muted mt-1">{tool.category}</p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* CNCF Section */}
        <section className="mt-24 p-12 rounded-2xl border border-border bg-card text-center">
          <h2 className="font-heading text-3xl tracking-wide mb-4">CNCF LANDSCAPE</h2>
          <p className="text-secondary max-w-2xl mx-auto mb-8">
            We are active participants in the Cloud Native ecosystem. Our team contributes to
            open-source projects and holds CNCF certifications across the landscape.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Kubernetes", "Prometheus", "Envoy", "Helm", "ArgoCD", "OpenTelemetry", "Flux", "Istio", "Linkerd", "Cilium"].map((proj) => (
              <span key={proj} className="px-4 py-2 rounded-lg border border-cyan/20 bg-cyan/5 font-mono text-sm text-cyan">
                {proj}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
