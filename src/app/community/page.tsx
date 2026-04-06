"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const ossProjects = [
  { name: "ops-golden-paths", desc: "Open-source golden path templates for Kubernetes, Terraform, and CI/CD", stars: "2.4k", language: "HCL / YAML" },
  { name: "ai-incident-agent", desc: "AI-powered incident response agent with PagerDuty & Slack integration", stars: "1.8k", language: "Python" },
  { name: "finops-dashboard", desc: "Real-time cloud cost dashboard with anomaly detection", stars: "1.2k", language: "TypeScript" },
  { name: "policy-pack", desc: "OPA/Kyverno policy library for Kubernetes security & compliance", stars: "900", language: "Rego" },
];

const events = [
  { name: "KubeCon EU 2026", type: "Talk", topic: "AI-Native Incident Response at Scale", date: "April 2026" },
  { name: "PlatformCon 2026", type: "Workshop", topic: "Building Your First IDP with Backstage", date: "June 2026" },
  { name: "DevSecOps Days", type: "Keynote", topic: "Supply Chain Security in the AI Era", date: "May 2026" },
  { name: "SREcon 2026", type: "Talk", topic: "Error Budgets That Actually Work", date: "March 2026" },
];

export default function CommunityPage() {
  return (
    <div className="grid-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Community"
          title="OPEN SOURCE & COMMUNITY"
          subtitle="We believe in building in the open. Explore our contributions, events, and community resources."
        />

        {/* Open Source */}
        <section className="mb-24">
          <h2 className="font-heading text-3xl tracking-wide mb-8">OPEN SOURCE CONTRIBUTIONS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ossProjects.map((proj, i) => (
              <motion.div
                key={proj.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card hover:bg-card-hover transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-green font-mono text-sm">⚡</span>
                  <h3 className="font-mono text-lg text-foreground group-hover:text-green transition-colors">{proj.name}</h3>
                </div>
                <p className="text-sm text-secondary mb-4">{proj.desc}</p>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-muted">⭐ {proj.stars}</span>
                  <span className="text-xs font-mono text-muted">{proj.language}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Events & Talks */}
        <section className="mb-24">
          <h2 className="font-heading text-3xl tracking-wide mb-8">EVENTS & TALKS</h2>
          <div className="space-y-4">
            {events.map((event, i) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 rounded-xl border border-border bg-card"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 text-xs font-mono rounded bg-cyan/10 text-cyan border border-cyan/30">{event.type}</span>
                    <h3 className="font-heading text-lg tracking-wide">{event.name}</h3>
                  </div>
                  <p className="mt-1 text-sm text-secondary">{event.topic}</p>
                </div>
                <span className="text-sm font-mono text-muted">{event.date}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="p-12 rounded-2xl border border-green/20 bg-gradient-to-br from-green/5 to-cyan/5 text-center">
          <h2 className="font-heading text-3xl tracking-wide">JOIN THE NEWSLETTER</h2>
          <p className="mt-3 text-secondary max-w-xl mx-auto">
            Weekly insights on DevOps, platform engineering, and AI-native operations.
            No spam. Unsubscribe anytime.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-green focus:outline-none"
            />
            <button className="rounded-lg bg-green px-6 py-3 font-semibold text-[#060810] hover:bg-green/90 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
