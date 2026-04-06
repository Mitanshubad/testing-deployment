"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Service } from "@/data/services";
import { accelerators } from "@/data/accelerators";

const colorClasses: Record<string, { accent: string; border: string; bg: string }> = {
  green: { accent: "text-green", border: "border-green/30", bg: "bg-green/10" },
  cyan: { accent: "text-cyan", border: "border-cyan/30", bg: "bg-cyan/10" },
  orange: { accent: "text-orange", border: "border-orange/30", bg: "bg-orange/10" },
  red: { accent: "text-red", border: "border-red/30", bg: "bg-red/10" },
};

export default function ServicePageClient({ service }: { service: Service }) {
  const colors = colorClasses[service.color] || colorClasses.green;

  // Find related accelerators based on category keywords
  const related = accelerators.filter((a) => {
    const cat = a.category.toLowerCase();
    const name = service.name.toLowerCase();
    return cat.includes("devops") && name.includes("devops") ||
      cat.includes("devsecops") && name.includes("devsec") ||
      cat.includes("platform") && name.includes("platform") ||
      cat.includes("ai") && name.includes("mlops");
  }).slice(0, 3);

  return (
    <div className="grid-bg">
      {/* Hero */}
      <section className="py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/services" className="text-sm text-muted hover:text-green transition-colors">
              ← All Services
            </Link>
            <div className="mt-6 flex items-center gap-4">
              <span className="text-5xl">{service.icon}</span>
              <div>
                <h1 className="font-heading text-4xl md:text-6xl tracking-wide">{service.name}</h1>
                <p className="mt-2 text-lg text-secondary">{service.tagline}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl tracking-wide text-red">WHAT BREAKS WITHOUT THIS</h2>
              <p className="mt-4 text-secondary leading-relaxed">{service.problem}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className={`font-heading text-2xl tracking-wide ${colors.accent}`}>WHAT WE DO</h2>
              <ul className="mt-4 space-y-3">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-secondary">
                    <span className={`mt-1 ${colors.accent}`}>▸</span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 bg-[#0a0e1a]/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl tracking-wide text-center mb-12">OUR APPROACH</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {service.approach.map((phase, i) => (
              <motion.div
                key={phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-xl border ${colors.border} bg-card text-center`}
              >
                <div className={`font-heading text-3xl ${colors.accent} mb-3`}>{String(i + 1).padStart(2, "0")}</div>
                <p className="text-sm text-foreground font-semibold">{phase}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Stack */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl tracking-wide text-center mb-8">TOOLS & STACK</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.tools.map((tool) => (
              <span
                key={tool}
                className={`px-4 py-2 rounded-lg border ${colors.border} ${colors.bg} font-mono text-sm text-foreground`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Metrics */}
      <section className="py-16 bg-[#0a0e1a]/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl tracking-wide text-green mb-6">DELIVERABLES</h2>
              <ul className="space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-secondary">
                    <span className="text-green">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-2xl tracking-wide text-cyan mb-6">METRICS WE IMPROVE</h2>
              <ul className="space-y-3">
                {service.metrics.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-secondary">
                    <span className="text-cyan">📈</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Accelerators */}
      {related.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl tracking-wide text-center mb-8">RELATED ACCELERATORS</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((acc) => (
                <Link
                  key={acc.slug}
                  href="/accelerators"
                  className="p-6 rounded-xl border border-border bg-card hover:bg-card-hover transition-all"
                >
                  <span className="text-xs font-mono text-orange">{acc.category}</span>
                  <h3 className="mt-2 font-heading text-lg tracking-wide">{acc.name}</h3>
                  <p className="mt-2 text-sm text-muted">{acc.description}</p>
                  <div className="mt-3 text-sm text-green font-mono">⏱ {acc.timeToValue}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl tracking-wide">START WITH A FREE ASSESSMENT</h2>
          <p className="mt-4 text-secondary">
            Get a personalized {service.name} maturity assessment and actionable roadmap.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-green px-8 py-3 font-semibold text-[#060810] hover:bg-green/90 transition-colors"
          >
            Book a Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
