"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { title: "Engineering First", desc: "We're engineers who consult, not consultants who engineer. Every recommendation comes from hands-on experience." },
  { title: "AI-Native Thinking", desc: "We don't just use AI tools — we build AI into the fabric of operations, from testing to incident response." },
  { title: "Measurable Outcomes", desc: "Every engagement has defined metrics. If we can't measure the improvement, we haven't delivered." },
  { title: "Knowledge Transfer", desc: "We build capabilities, not dependencies. Your team owns the solution from day one." },
];

const team = [
  { name: "Alex Morgan", role: "Founder & CEO", expertise: "15+ years in DevOps, SRE, and platform engineering at scale" },
  { name: "Jordan Lee", role: "CTO", expertise: "Former principal engineer at AWS. Kubernetes contributor." },
  { name: "Sam Patel", role: "VP Engineering", expertise: "Built platform teams at 3 unicorn startups. Backstage committer." },
  { name: "Chris Zhang", role: "Head of AI Engineering", expertise: "ML infrastructure at Google. Pioneer in AIOps and LLM-driven operations." },
  { name: "Taylor Kim", role: "Head of Security", expertise: "Former CISO. SLSA framework contributor. Supply chain security expert." },
  { name: "Riley Brooks", role: "Head of SRE", expertise: "Scaled SRE practices across 500+ services at a Fortune 100." },
];

const certifications = [
  "AWS Advanced Partner", "Google Cloud Partner", "Azure Solutions Partner",
  "CNCF Certified", "Kubernetes Certified Service Provider", "SOC 2 Type II Compliant",
];

export default function AboutPage() {
  return (
    <div className="grid-bg">
      {/* Hero */}
      <section className="py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block mb-4 px-3 py-1 text-xs font-mono tracking-wider uppercase text-green border border-green/30 rounded-full bg-green/5">
              About Us
            </span>
            <h1 className="font-heading text-5xl md:text-7xl tracking-wide">
              WE BUILD THE INFRASTRUCTURE
              <br />
              <span className="text-green">BEHIND GREAT ENGINEERING</span>
            </h1>
            <p className="mt-6 text-xl text-secondary max-w-3xl leading-relaxed">
              Oddlly was founded by engineers who saw the same pattern everywhere: brilliant product teams
              held back by manual operations, fragile pipelines, and tooling debt. We exist to fix that.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl tracking-wide text-cyan mb-6">OUR STORY</h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  We started in 2021 with a simple thesis: every engineering team deserves world-class
                  infrastructure — not just the companies with 100-person platform teams.
                </p>
                <p>
                  Our accelerators were born from patterns we saw repeated across dozens of engagements.
                  The same CI/CD anti-patterns. The same Kubernetes misconfigurations. The same observability
                  gaps. We productized the solutions.
                </p>
                <p>
                  In 2024, we went AI-native. Not as a marketing gimmick, but because LLMs fundamentally
                  change what&apos;s possible in operations. Our AI-Native DevOps Accelerator is the result of
                  two years of R&amp;D in AI-driven incident response, intelligent testing, and natural
                  language operations.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "200+", label: "Engagements delivered" },
                { value: "50+", label: "Enterprise clients" },
                { value: "12", label: "Engineering streams" },
                { value: "40+", label: "Engineers on the team" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-xl border border-border bg-card text-center">
                  <div className="font-heading text-3xl text-green">{stat.value}</div>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-[#0a0e1a]/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Mission"
            title="WHAT DRIVES US"
            subtitle="To make world-class engineering infrastructure accessible to every team — accelerated by AI, grounded in best practices."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-green/20 bg-card"
              >
                <h3 className="font-heading text-lg tracking-wide text-green">{v.title}</h3>
                <p className="mt-3 text-sm text-secondary leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Team" title="LEADERSHIP" subtitle="Engineers who've built and scaled at the world's most demanding companies." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-xl border border-border bg-card"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green/20 to-cyan/20 flex items-center justify-center font-heading text-lg text-green mb-4">
                  {person.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-heading text-lg tracking-wide">{person.name}</h3>
                <p className="text-sm text-cyan font-mono">{person.role}</p>
                <p className="mt-2 text-sm text-muted">{person.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl tracking-wide mb-8">PARTNERS & CERTIFICATIONS</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <span key={cert} className="px-4 py-2 rounded-lg border border-border bg-card font-mono text-sm text-secondary">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-4xl tracking-wide">LET&apos;S BUILD TOGETHER</h2>
          <p className="mt-4 text-secondary">Ready to transform your engineering operations? Let&apos;s talk.</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-lg bg-green px-8 py-3 font-semibold text-[#060810] hover:bg-green/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
