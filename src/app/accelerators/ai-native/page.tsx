"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const modules = [
  {
    icon: "🧠",
    title: "Pipeline Intelligence",
    desc: "Smart test selection, risk scoring, failure prediction. AI analyzes your code changes and selects only the tests that matter — cutting CI time by 70% while catching more bugs.",
    features: ["Smart test selection", "Build risk scoring", "Failure prediction", "Flaky test detection"],
  },
  {
    icon: "🤖",
    title: "Agentic Incident Response",
    desc: "Auto-triage, runbook execution, post-mortem generation. When incidents fire, AI agents gather context, execute runbooks, and draft post-mortems — before your team even opens a laptop.",
    features: ["Auto-triage & routing", "Runbook execution", "Impact analysis", "Post-mortem generation"],
  },
  {
    icon: "🔍",
    title: "AI Security Co-Pilot",
    desc: "LLM-powered code review, CVE remediation, threat modelling. AI reviews every PR for security issues, suggests fixes, and models threats across your architecture.",
    features: ["Automated code review", "CVE remediation", "Threat modelling", "Dependency analysis"],
  },
  {
    icon: "💬",
    title: "Ops Copilot (Chat)",
    desc: "Natural language to kubectl, Terraform, cost queries. Ask questions in plain English — get kubectl commands, cost breakdowns, or blast radius analysis instantly.",
    features: ["Natural language ops", "kubectl generation", "Cost queries", "Blast radius analysis"],
  },
  {
    icon: "📊",
    title: "DORA AI Dashboard",
    desc: "AI-enriched DORA metrics, benchmarking, next-action recommendations. Not just dashboards — AI interprets your metrics, spots trends, and recommends specific actions.",
    features: ["DORA metrics tracking", "AI trend analysis", "Benchmarking", "Action recommendations"],
  },
];

const timeline = [
  { week: "Week 1", title: "Assessment & Design", tasks: ["Current state analysis", "AI opportunity mapping", "Architecture design", "Tool selection"] },
  { week: "Week 2", title: "Core Implementation", tasks: ["Pipeline Intelligence setup", "Ops Copilot deployment", "DORA dashboard configuration", "Integration testing"] },
  { week: "Week 3", title: "Advanced Modules", tasks: ["Incident response automation", "Security co-pilot setup", "Custom model tuning", "Team training"] },
  { week: "Week 4", title: "Optimization & Handoff", tasks: ["Performance tuning", "Knowledge transfer", "Documentation", "Continuous improvement plan"] },
];

export default function AINativePage() {
  return (
    <div className="grid-bg">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange/5 rounded-full blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/accelerators" className="text-sm text-muted hover:text-orange transition-colors">
              ← All Accelerators
            </Link>
            <div className="mt-6">
              <span className="inline-block mb-4 px-3 py-1 text-xs font-mono tracking-wider uppercase text-orange border border-orange/30 rounded-full bg-orange/5">
                Featured Accelerator
              </span>
              <h1 className="font-heading text-5xl md:text-7xl tracking-wide">
                AI-NATIVE DEVOPS
                <br />
                <span className="text-orange">ACCELERATOR</span>
              </h1>
              <p className="mt-4 text-xl text-secondary max-w-2xl">
                Your AI-powered Ops teammate. Always on. Intelligent incident response,
                smart testing, and natural language operations.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg bg-orange px-6 py-3 font-semibold text-[#060810] hover:bg-orange/90 transition-colors"
                >
                  Get a Free AI-Ops Assessment
                </Link>
                <Link
                  href="/roi-calculator"
                  className="inline-flex items-center rounded-lg border border-border px-6 py-3 font-semibold text-foreground hover:border-orange/50 transition-colors"
                >
                  Calculate ROI
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 bg-[#0a0e1a]/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl tracking-wide text-red text-center mb-8">THE PROBLEM</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Manual Toil", desc: "Engineers spend 40%+ of their time on repetitive operational tasks instead of building." },
              { title: "Slow Incident Response", desc: "Mean time to recovery is measured in hours because triage is manual and context is scattered." },
              { title: "Blind Pipelines", desc: "CI/CD runs all tests every time, wastes compute, and provides no risk intelligence." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-red/20 bg-card">
                <h3 className="font-heading text-lg tracking-wide text-red">{item.title}</h3>
                <p className="mt-2 text-sm text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Capability Modules */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Capabilities"
            title="5 AI MODULES"
            subtitle="Each module is independently deployable and immediately valuable."
          />
          <div className="space-y-8">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-3 gap-6 p-8 rounded-xl border border-orange/20 bg-card"
              >
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{mod.icon}</span>
                    <h3 className="font-heading text-2xl tracking-wide text-orange">{mod.title}</h3>
                  </div>
                  <p className="text-secondary leading-relaxed">{mod.desc}</p>
                </div>
                <div>
                  <h4 className="text-sm font-mono text-muted mb-3">KEY FEATURES</h4>
                  <ul className="space-y-2">
                    {mod.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-secondary">
                        <span className="text-orange">▸</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-[#0a0e1a]/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl tracking-wide mb-8">TECH STACK</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Claude API", "Dynatrace", "PagerDuty AI", "Launchable", "OpenTelemetry", "LangChain", "Prometheus", "Grafana"].map((tool) => (
              <span key={tool} className="px-5 py-2.5 rounded-lg border border-orange/20 bg-orange/5 font-mono text-sm text-foreground">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Rollout"
            title="IMPLEMENTATION TIMELINE"
            subtitle="From assessment to production in 2–4 weeks."
          />
          <div className="grid md:grid-cols-4 gap-6">
            {timeline.map((phase, i) => (
              <motion.div
                key={phase.week}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card"
              >
                <div className="font-mono text-sm text-orange mb-2">{phase.week}</div>
                <h3 className="font-heading text-lg tracking-wide mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.tasks.map((task) => (
                    <li key={task} className="flex items-center gap-2 text-sm text-secondary">
                      <span className="text-green text-xs">●</span> {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-16 bg-[#0a0e1a]/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "40%", label: "MTTR Reduction" },
              { value: "70%", label: "CI Time Saved" },
              { value: "10x", label: "Faster CVE Remediation" },
              { value: "60%", label: "Less Operational Toil" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-4xl text-orange">{stat.value}</div>
                <p className="mt-2 text-sm text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-4xl tracking-wide">GET YOUR FREE AI-OPS ASSESSMENT</h2>
          <p className="mt-4 text-secondary">Discover how AI can transform your operations in weeks, not months.</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-lg bg-orange px-8 py-3 font-semibold text-[#060810] hover:bg-orange/90 transition-colors"
          >
            Book Your Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
