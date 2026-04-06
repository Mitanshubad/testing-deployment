"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const blogPosts = [
  { title: "How to Cut Cloud Costs 40% in 30 Days", category: "FinOps", readTime: "8 min", date: "Mar 2026" },
  { title: "SLO Design for Platform Teams: A Practical Guide", category: "SRE", readTime: "12 min", date: "Mar 2026" },
  { title: "The Developer Portal Checklist: 20 Features Your IDP Needs", category: "Platform Eng", readTime: "10 min", date: "Feb 2026" },
  { title: "GitOps at Scale: Lessons from 50+ Kubernetes Clusters", category: "GitOps", readTime: "15 min", date: "Feb 2026" },
  { title: "AI in Incident Response: Beyond ChatGPT", category: "AIOps", readTime: "11 min", date: "Jan 2026" },
  { title: "Shift-Left Security Without Slowing Down Developers", category: "DevSecOps", readTime: "9 min", date: "Jan 2026" },
];

const caseStudies = [
  { title: "FinTech: Zero-Downtime K8s Migration", metric: "99.99% uptime", industry: "Financial Services" },
  { title: "SaaS Platform: $2.4M Cloud Cost Reduction", metric: "60% savings", industry: "SaaS" },
  { title: "Healthcare: SOC2 Compliance Automation", metric: "100% audit pass", industry: "Healthcare" },
  { title: "E-commerce: SRE Transformation", metric: "70% MTTR reduction", industry: "Retail" },
];

const runbooks = [
  "Kubernetes Node Failure Recovery",
  "Vault Secrets Rotation Runbook",
  "Database Failover Procedure",
  "CI/CD Pipeline Recovery",
  "Incident Response Playbook",
  "Cost Spike Investigation",
];

const whitepapers = [
  "The Enterprise Platform Engineering Playbook",
  "AI-Native Operations: A CTO's Guide",
  "FinOps Maturity Model for Cloud-Native Teams",
  "Supply Chain Security in the Age of AI",
];

const categoryColors: Record<string, string> = {
  FinOps: "text-orange",
  SRE: "text-green",
  "Platform Eng": "text-cyan",
  GitOps: "text-green",
  AIOps: "text-orange",
  DevSecOps: "text-red",
};

export default function ResourcesPage() {
  return (
    <div className="grid-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Resources"
          title="LEARN & BUILD"
          subtitle="Blog posts, case studies, runbooks, and whitepapers to accelerate your engineering journey."
        />

        {/* Blog Posts */}
        <section className="mb-24">
          <h2 className="font-heading text-3xl tracking-wide mb-8">BLOG & ARTICLES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-xl border border-border bg-card hover:bg-card-hover transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-mono ${categoryColors[post.category] || "text-secondary"}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-muted">·</span>
                  <span className="text-xs text-muted">{post.readTime}</span>
                </div>
                <h3 className="font-heading text-lg tracking-wide text-foreground group-hover:text-green transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 text-xs text-muted">{post.date}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-24">
          <h2 className="font-heading text-3xl tracking-wide mb-8">CASE STUDIES</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl border border-border bg-card hover:bg-card-hover transition-all cursor-pointer"
              >
                <span className="text-xs font-mono text-cyan">{cs.industry}</span>
                <h3 className="mt-2 font-heading text-xl tracking-wide">{cs.title}</h3>
                <div className="mt-4 inline-block px-3 py-1 rounded bg-green/10 text-green text-sm font-mono">
                  {cs.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Runbooks & Whitepapers */}
        <div className="grid md:grid-cols-2 gap-12">
          <section>
            <h2 className="font-heading text-3xl tracking-wide mb-8">RUNBOOKS & PLAYBOOKS</h2>
            <div className="space-y-3">
              {runbooks.map((rb) => (
                <div key={rb} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-card-hover transition-all cursor-pointer">
                  <span className="text-green font-mono text-sm">📋</span>
                  <span className="text-sm text-foreground">{rb}</span>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="font-heading text-3xl tracking-wide mb-8">WHITEPAPERS</h2>
            <div className="space-y-3">
              {whitepapers.map((wp) => (
                <div key={wp} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-card-hover transition-all cursor-pointer">
                  <span className="text-cyan font-mono text-sm">📄</span>
                  <span className="text-sm text-foreground">{wp}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
