"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

interface RoadmapTrack {
  level: string;
  duration: string;
  color: string;
  topics: string[];
}

interface Roadmap {
  name: string;
  icon: string;
  tracks: RoadmapTrack[];
}

const roadmaps: Roadmap[] = [
  {
    name: "DevOps",
    icon: "⚙️",
    tracks: [
      { level: "Beginner", duration: "0–3 months", color: "text-green", topics: ["Linux & Networking Basics", "Git & Version Control", "CI/CD Concepts", "Docker Fundamentals", "Cloud Provider Basics"] },
      { level: "Intermediate", duration: "3–6 months", color: "text-cyan", topics: ["Advanced CI/CD Pipelines", "Infrastructure as Code", "Kubernetes Basics", "Monitoring & Logging", "Configuration Management"] },
      { level: "Advanced", duration: "6–12 months", color: "text-orange", topics: ["GitOps & ArgoCD", "Multi-Environment Strategies", "DORA Metrics", "Chaos Engineering", "Advanced K8s Patterns"] },
      { level: "Expert", duration: "12+ months", color: "text-red", topics: ["Platform Engineering", "Developer Experience", "AI-Native DevOps", "Organization Scaling", "DevOps Strategy & Culture"] },
    ],
  },
  {
    name: "DevSecOps",
    icon: "🔒",
    tracks: [
      { level: "Beginner", duration: "0–3 months", color: "text-green", topics: ["Security Fundamentals", "OWASP Top 10", "SAST/DAST Concepts", "Secrets Management Basics", "Dependency Scanning"] },
      { level: "Intermediate", duration: "3–6 months", color: "text-cyan", topics: ["Supply Chain Security", "Container Security", "Policy-as-Code (OPA)", "Compliance Frameworks", "Shift-Left Implementation"] },
      { level: "Advanced", duration: "6–12 months", color: "text-orange", topics: ["SLSA Framework", "Runtime Security", "Threat Modeling", "Security Architecture", "Incident Response"] },
      { level: "Expert", duration: "12+ months", color: "text-red", topics: ["Security Program Design", "Zero-Trust Architecture", "AI Security Co-Pilot", "Compliance Automation", "Red Team Operations"] },
    ],
  },
  {
    name: "Platform Engineering",
    icon: "🏗️",
    tracks: [
      { level: "Beginner", duration: "0–3 months", color: "text-green", topics: ["Platform Concepts", "Developer Experience Basics", "Service Catalogs", "API Design", "Internal Tooling"] },
      { level: "Intermediate", duration: "3–6 months", color: "text-cyan", topics: ["Backstage Setup", "Golden Path Design", "Self-Service Portals", "Platform APIs", "Documentation Systems"] },
      { level: "Advanced", duration: "6–12 months", color: "text-orange", topics: ["Multi-Tenant Platforms", "Platform-as-Product", "Cognitive Load Reduction", "Governance at Scale", "Developer Metrics"] },
      { level: "Expert", duration: "12+ months", color: "text-red", topics: ["Platform Strategy", "Organization Design", "Team Topologies", "Platform Business Cases", "AI-Enhanced Platforms"] },
    ],
  },
  {
    name: "SRE",
    icon: "🎯",
    tracks: [
      { level: "Beginner", duration: "0–3 months", color: "text-green", topics: ["SRE Principles", "SLIs, SLOs, SLAs", "Monitoring Basics", "Incident Management", "Linux System Admin"] },
      { level: "Intermediate", duration: "3–6 months", color: "text-cyan", topics: ["Error Budgets", "On-Call Best Practices", "Observability (3 Pillars)", "Capacity Planning", "Post-Mortem Culture"] },
      { level: "Advanced", duration: "6–12 months", color: "text-orange", topics: ["Reliability Architecture", "Chaos Engineering", "Performance Engineering", "Distributed Systems", "Toil Automation"] },
      { level: "Expert", duration: "12+ months", color: "text-red", topics: ["SRE Program Design", "Multi-Region Reliability", "AI-Driven SRE", "Reliability Culture", "Business Continuity"] },
    ],
  },
  {
    name: "FinOps",
    icon: "📊",
    tracks: [
      { level: "Beginner", duration: "0–3 months", color: "text-green", topics: ["Cloud Billing Basics", "Cost Visibility", "Tagging Strategies", "Reserved Instances", "Budget Alerts"] },
      { level: "Intermediate", duration: "3–6 months", color: "text-cyan", topics: ["Chargeback/Showback", "Rightsizing", "Spot Instances", "Unit Economics", "FinOps Team Structure"] },
      { level: "Advanced", duration: "6–12 months", color: "text-orange", topics: ["Multi-Cloud FinOps", "Commitment Optimization", "Engineering Efficiency", "Cost per Feature", "Forecasting"] },
      { level: "Expert", duration: "12+ months", color: "text-red", topics: ["FinOps Strategy", "C-Level Reporting", "Business Value Metrics", "AI Cost Optimization", "Cloud Financial Governance"] },
    ],
  },
];

export default function RoadmapsPage() {
  const [active, setActive] = useState(0);
  const roadmap = roadmaps[active];

  return (
    <div className="grid-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Learning"
          title="ENGINEERING ROADMAPS"
          subtitle="Structured learning paths from beginner to expert across every discipline."
        />

        {/* Roadmap Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {roadmaps.map((rm, i) => (
            <button
              key={rm.name}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-lg text-sm font-mono transition-all flex items-center gap-2 ${
                active === i ? "bg-green text-[#060810] font-bold" : "border border-border text-secondary hover:text-green"
              }`}
            >
              <span>{rm.icon}</span> {rm.name}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {roadmap.tracks.map((track, i) => (
              <motion.div
                key={track.level}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className={`hidden md:flex absolute left-6 top-6 w-5 h-5 rounded-full border-2 ${track.color.replace("text-", "border-")} bg-background`} />

                <div className="p-6 rounded-xl border border-border bg-card">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`font-heading text-xl tracking-wide ${track.color}`}>{track.level}</span>
                    <span className="text-xs font-mono text-muted px-2 py-0.5 border border-border rounded">{track.duration}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {track.topics.map((topic) => (
                      <div key={topic} className="flex items-center gap-2 text-sm text-secondary">
                        <span className={track.color}>▸</span> {topic}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
