"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import TerminalBlock from "@/components/TerminalBlock";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";
import { accelerators } from "@/data/accelerators";

const stats = [
  { value: "80%", label: "Platform Eng adoption by 2026", color: "text-green" },
  { value: "76%", label: "Teams now using AIOps", color: "text-cyan" },
  { value: "40%", label: "Average MTTR reduction", color: "text-orange" },
  { value: "10x", label: "Faster release cycles", color: "text-green" },
];

const steps = [
  { num: "01", title: "Assess", desc: "Deep-dive into your current engineering maturity, tooling, and gaps." },
  { num: "02", title: "Accelerate", desc: "Deploy production-ready accelerators and implement best practices." },
  { num: "03", title: "Operate", desc: "Continuous optimization, monitoring, and knowledge transfer." },
];

const testimonials = [
  { quote: "Oddlly cut our deployment lead time from 2 weeks to 15 minutes. The AI accelerator alone was worth the engagement.", author: "Sarah Chen", role: "VP Engineering, FinTech Startup" },
  { quote: "Their platform engineering team built us an IDP that developers actually love using. Onboarding went from 3 weeks to 2 days.", author: "Marcus Rivera", role: "CTO, Healthcare SaaS" },
  { quote: "The chaos engineering program gave us confidence we never had before. Our last GameDay found 12 failure modes before customers did.", author: "Priya Sharma", role: "Head of SRE, E-commerce Platform" },
];

const caseStudies = [
  { title: "FinTech Migration", metric: "99.99%", metricLabel: "uptime achieved", desc: "Migrated 200+ microservices to Kubernetes with zero downtime." },
  { title: "SaaS Platform Scaling", metric: "60%", metricLabel: "cost reduction", desc: "FinOps + rightsizing saved $2.4M/year in cloud spend." },
  { title: "DevSecOps Transformation", metric: "10x", metricLabel: "faster CVE remediation", desc: "Shift-left security pipeline with automated compliance gates." },
];

const toolLogos = [
  "GitHub Actions", "Terraform", "Kubernetes", "ArgoCD", "Prometheus",
  "Grafana", "Docker", "Vault", "Snyk", "Datadog",
  "Helm", "Istio", "Pulumi", "Jenkins", "OpenTelemetry",
  "Flux", "Trivy", "PagerDuty", "Backstage", "Crossplane",
];

const colorMap: Record<string, string> = {
  green: "border-green/30 hover:border-green/60 text-green",
  cyan: "border-cyan/30 hover:border-cyan/60 text-cyan",
  orange: "border-orange/30 hover:border-orange/60 text-orange",
  red: "border-red/30 hover:border-red/60 text-red",
};

const bgColorMap: Record<string, string> = {
  green: "bg-green/10",
  cyan: "bg-cyan/10",
  orange: "bg-orange/10",
  red: "bg-red/10",
};

export default function HomePage() {
  const featured = accelerators.find((a) => a.featured);

  return (
    <div className="grid-bg">
      {/* ========== HERO ========== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-green/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-4 px-3 py-1 text-xs font-mono tracking-wider uppercase text-green border border-green/30 rounded-full bg-green/5">
                Engineering at Scale
              </span>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl tracking-wide leading-tight">
                FROM CODE TO CLOUD
                <br />
                <span className="gradient-text-green-cyan">SECURED. AUTOMATED.</span>
                <br />
                OPTIMIZED.
              </h1>
              <p className="mt-6 text-lg text-secondary max-w-xl font-body leading-relaxed">
                12 engineering streams. 11 production-ready accelerators. One partner
                that delivers AI-native operations at enterprise scale.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-green px-6 py-3 font-semibold text-[#060810] hover:bg-green/90 transition-colors"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/accelerators"
                  className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 font-semibold text-foreground hover:border-green/50 hover:text-green transition-colors"
                >
                  Explore Accelerators
                </Link>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 w-full max-w-2xl"
          >
            <TerminalBlock />
          </motion.div>
        </div>
      </section>

      {/* ========== STATS BAR ========== */}
      <section className="border-y border-border bg-[#0a0e1a]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className={`font-heading text-4xl md:text-5xl ${stat.color}`}>
                  {stat.value}
                </div>
                <p className="mt-2 text-sm text-secondary">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 12 SERVICE STREAMS ========== */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="12 ENGINEERING STREAMS"
            subtitle="End-to-end coverage across the modern engineering lifecycle — from code to cloud to cost."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                  className={`block p-5 rounded-xl border ${colorMap[svc.color]} bg-card hover:bg-card-hover transition-all group`}
                >
                  <div className="text-2xl mb-2">{svc.icon}</div>
                  <h3 className="font-heading text-lg tracking-wide text-foreground group-hover:text-green transition-colors">
                    {svc.shortName}
                  </h3>
                  <p className="mt-1 text-xs text-muted line-clamp-2">{svc.tagline}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED ACCELERATOR ========== */}
      {featured && (
        <section className="py-24 bg-[#0a0e1a]/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Featured"
              title="AI-NATIVE DEVOPS ACCELERATOR"
              subtitle="Your AI-powered Ops teammate. Always on. Intelligent incident response, smart testing, and natural language operations."
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-5 gap-4"
            >
              {[
                { icon: "🧠", title: "Pipeline Intelligence", desc: "Smart test selection, risk scoring, failure prediction" },
                { icon: "🤖", title: "Agentic Incident Response", desc: "Auto-triage, runbook execution, post-mortem generation" },
                { icon: "🔍", title: "AI Security Co-Pilot", desc: "LLM-powered code review, CVE remediation" },
                { icon: "💬", title: "Ops Copilot", desc: "Natural language to kubectl, Terraform, cost queries" },
                { icon: "📊", title: "DORA AI Dashboard", desc: "AI-enriched metrics with next-action recommendations" },
              ].map((module, i) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-xl border border-orange/20 bg-card hover:bg-card-hover hover:border-orange/40 transition-all"
                >
                  <div className="text-2xl mb-3">{module.icon}</div>
                  <h3 className="font-heading text-sm tracking-wide text-orange">{module.title}</h3>
                  <p className="mt-2 text-xs text-muted">{module.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-8 text-center">
              <Link
                href="/accelerators/ai-native"
                className="inline-flex items-center gap-2 rounded-lg border border-orange/30 px-6 py-3 font-semibold text-orange hover:bg-orange/10 transition-colors"
              >
                Explore AI Accelerator →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Process"
            title="HOW IT WORKS"
            subtitle="A proven 3-phase methodology that delivers measurable outcomes."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative p-8 rounded-xl border border-border bg-card"
              >
                <div className="font-heading text-5xl text-green/20 mb-4">{step.num}</div>
                <h3 className="font-heading text-2xl tracking-wide text-green">{step.title}</h3>
                <p className="mt-3 text-secondary text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TOOLS ECOSYSTEM ========== */}
      <section className="py-16 border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
          <SectionHeading
            label="Ecosystem"
            title="50+ TOOLS WE WORK WITH"
          />
        </div>
        <div className="relative">
          <div className="flex animate-scroll-logos whitespace-nowrap">
            {[...toolLogos, ...toolLogos].map((tool, i) => (
              <div
                key={`${tool}-${i}`}
                className="inline-flex items-center justify-center mx-4 px-6 py-3 rounded-lg border border-border bg-card text-sm font-mono text-secondary whitespace-nowrap"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CASE STUDIES ========== */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Results"
            title="CLIENT WINS"
            subtitle="Real outcomes from real engagements."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl border border-border bg-card card-hover"
              >
                <div className="font-heading text-4xl text-green">{cs.metric}</div>
                <p className="text-sm text-cyan font-mono">{cs.metricLabel}</p>
                <h3 className="mt-4 font-heading text-xl tracking-wide">{cs.title}</h3>
                <p className="mt-2 text-sm text-secondary">{cs.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-24 bg-[#0a0e1a]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Testimonials"
            title="WHAT LEADERS SAY"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl border border-border bg-card"
              >
                <div className="text-green text-2xl mb-4">&ldquo;</div>
                <p className="text-secondary text-sm leading-relaxed italic">{t.quote}</p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold text-foreground text-sm">{t.author}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-2xl border border-green/20 bg-gradient-to-br from-green/5 to-cyan/5"
          >
            <h2 className="font-heading text-4xl md:text-5xl tracking-wide">
              READY TO SCALE?
            </h2>
            <p className="mt-4 text-lg text-secondary">
              Book a free engineering assessment and see how Oddlly can transform your operations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-green px-8 py-3 font-semibold text-[#060810] hover:bg-green/90 transition-colors"
              >
                Book a Free Assessment
              </Link>
              <Link
                href="/roi-calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 font-semibold text-foreground hover:border-green/50 transition-colors"
              >
                Calculate Your ROI
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
