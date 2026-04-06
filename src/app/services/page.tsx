"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";

const colorMap: Record<string, string> = {
  green: "border-green/30 hover:border-green text-green",
  cyan: "border-cyan/30 hover:border-cyan text-cyan",
  orange: "border-orange/30 hover:border-orange text-orange",
  red: "border-red/30 hover:border-red text-red",
};

export default function ServicesPage() {
  return (
    <div className="grid-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="12 ENGINEERING STREAMS"
          subtitle="End-to-end coverage across the modern engineering lifecycle. Each stream is backed by production-ready accelerators and battle-tested methodologies."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/services/${svc.slug}`}
                className={`block p-6 rounded-xl border ${colorMap[svc.color]} bg-card hover:bg-card-hover transition-all group h-full`}
              >
                <div className="text-3xl mb-3">{svc.icon}</div>
                <h3 className="font-heading text-xl tracking-wide text-foreground group-hover:text-green transition-colors">
                  {svc.name}
                </h3>
                <p className="mt-2 text-sm text-secondary leading-relaxed">{svc.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {svc.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="px-2 py-0.5 text-xs font-mono text-muted border border-border rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
