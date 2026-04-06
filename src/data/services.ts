export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  tagline: string;
  problem: string;
  capabilities: string[];
  approach: string[];
  tools: string[];
  deliverables: string[];
  metrics: string[];
  color: string;
}

export const services: Service[] = [
  {
    slug: "devops",
    name: "DevOps",
    shortName: "DevOps",
    icon: "⚙️",
    tagline: "Accelerate delivery with world-class CI/CD and developer workflows",
    problem: "Slow, manual release processes create bottlenecks, increase risk, and frustrate engineering teams trying to ship faster.",
    capabilities: [
      "CI/CD pipeline design & optimization",
      "DORA metrics implementation & tracking",
      "Release orchestration & deployment strategies",
      "Developer workflow automation",
      "Culture coaching & DevOps transformation"
    ],
    approach: ["Assess current pipelines", "Design target architecture", "Implement & automate", "Measure & optimize"],
    tools: ["GitHub Actions", "GitLab CI", "Jenkins", "Tekton", "ArgoCD"],
    deliverables: ["CI/CD pipeline architecture", "Automated deployment runbooks", "DORA metrics dashboard", "DevOps maturity assessment"],
    metrics: ["Deployment frequency", "Lead time for changes", "Change failure rate", "Mean time to recovery"],
    color: "green"
  },
  {
    slug: "devsecops",
    name: "DevSecOps",
    shortName: "DevSecOps",
    icon: "🔒",
    tagline: "Security baked into every pipeline — not bolted on after",
    problem: "Security as an afterthought means vulnerabilities ship to production, compliance gaps widen, and remediation costs skyrocket.",
    capabilities: [
      "SAST/DAST integration",
      "Software supply chain security",
      "Shift-left security implementation",
      "Threat modelling workshops",
      "Compliance automation"
    ],
    approach: ["Security posture assessment", "Threat model & gap analysis", "Integrate security gates", "Continuous compliance monitoring"],
    tools: ["Snyk", "Trivy", "Checkov", "OPA", "Kyverno", "Vault"],
    deliverables: ["Security pipeline architecture", "Vulnerability management workflow", "Compliance-as-code policies", "Threat model documentation"],
    metrics: ["CVE detection time", "Vulnerability remediation SLA", "Compliance coverage", "Security gate pass rate"],
    color: "red"
  },
  {
    slug: "platform-engineering",
    name: "Platform Engineering",
    shortName: "Platform Eng",
    icon: "🏗️",
    tagline: "Build golden paths that make the right way the easy way",
    problem: "Without a platform, every team reinvents the wheel — inconsistent tooling, high cognitive load, and slow onboarding drain productivity.",
    capabilities: [
      "Internal Developer Platform (IDP) design",
      "Backstage portal implementation",
      "Golden path template creation",
      "Self-service portal development",
      "Developer experience optimization"
    ],
    approach: ["Developer experience audit", "Platform product strategy", "Build & integrate IDP", "Measure adoption & iterate"],
    tools: ["Backstage", "Kratix", "Humanitec", "Port", "Crossplane"],
    deliverables: ["IDP architecture blueprint", "Golden path templates", "Self-service portal", "Platform adoption metrics"],
    metrics: ["Developer onboarding time", "Cognitive load score", "Platform adoption rate", "Time-to-first-deploy"],
    color: "cyan"
  },
  {
    slug: "cloud-operations",
    name: "Cloud Operations",
    shortName: "Cloud Ops",
    icon: "☁️",
    tagline: "Multi-cloud management that keeps your business running 24/7",
    problem: "Cloud sprawl, unmanaged resources, and reactive incident response lead to outages, cost overruns, and audit failures.",
    capabilities: [
      "Multi-cloud management strategy",
      "Incident response automation",
      "Cloud provider migrations",
      "Runbook development & automation",
      "Disaster recovery planning"
    ],
    approach: ["Cloud estate assessment", "Architecture & governance design", "Migration & optimization", "Operational excellence"],
    tools: ["AWS", "Azure", "GCP", "Terraform", "Ansible"],
    deliverables: ["Cloud architecture blueprint", "Automated runbooks", "DR/BCP plan", "Cloud governance framework"],
    metrics: ["Uptime SLA", "Incident response time", "Cloud spend efficiency", "Migration velocity"],
    color: "cyan"
  },
  {
    slug: "cost-optimization",
    name: "Cost Optimization",
    shortName: "Cost Opt",
    icon: "💰",
    tagline: "Cut cloud waste — keep the performance, lose the bill",
    problem: "Unoptimized cloud spend wastes 30%+ of budgets on idle, oversized, or untagged resources that nobody tracks.",
    capabilities: [
      "Rightsizing analysis & automation",
      "Tagging strategy & governance",
      "Reserved & spot instance optimization",
      "Budget governance & alerts",
      "Commitment management (RIs/Savings Plans)"
    ],
    approach: ["Cost visibility audit", "Optimization roadmap", "Implement quick wins & automation", "Governance & continuous optimization"],
    tools: ["Kubecost", "CloudHealth", "Infracost", "OpenCost", "AWS Cost Explorer"],
    deliverables: ["Cost optimization report", "Tagging policy", "Rightsizing recommendations", "Budget alert framework"],
    metrics: ["Monthly cloud spend reduction", "Resource utilization rate", "Cost per deployment", "Waste elimination %"],
    color: "orange"
  },
  {
    slug: "sre",
    name: "Site Reliability Engineering",
    shortName: "SRE",
    icon: "🎯",
    tagline: "Define reliability as a feature — with SLOs, error budgets, and on-call excellence",
    problem: "Without SRE practices, reliability is accidental — no error budgets, no structured on-call, and postmortems that go nowhere.",
    capabilities: [
      "SLO/SLA/SLI design & implementation",
      "Error budget policy creation",
      "On-call rotation setup & optimization",
      "Post-mortem culture establishment",
      "Toil reduction & automation"
    ],
    approach: ["Reliability assessment", "SLO framework design", "Implement monitoring & alerting", "Operationalize SRE culture"],
    tools: ["Prometheus", "Grafana", "PagerDuty", "Datadog", "Blameless"],
    deliverables: ["SLO/SLI framework", "Error budget policies", "On-call runbooks", "Post-mortem templates"],
    metrics: ["SLO attainment", "Error budget burn rate", "MTTR", "Toil reduction %"],
    color: "green"
  },
  {
    slug: "observability",
    name: "Observability & Monitoring",
    shortName: "Observability",
    icon: "📡",
    tagline: "See everything, debug anything — logs, metrics, and traces unified",
    problem: "Blind spots in production lead to alert fatigue, slow debugging, and finger-pointing when incidents strike.",
    capabilities: [
      "Three-pillar observability (logs, metrics, traces)",
      "OpenTelemetry instrumentation",
      "Dashboard design & alerting",
      "Distributed tracing implementation",
      "AIOps-powered anomaly detection"
    ],
    approach: ["Observability maturity assessment", "Instrumentation strategy", "Implement & instrument", "Alert tuning & optimization"],
    tools: ["OpenTelemetry", "Prometheus", "Grafana", "Datadog", "Jaeger"],
    deliverables: ["Observability architecture", "Dashboard library", "Alert playbooks", "Instrumentation guide"],
    metrics: ["Mean time to detect", "Alert signal-to-noise ratio", "Trace coverage", "Dashboard adoption"],
    color: "cyan"
  },
  {
    slug: "iac-gitops",
    name: "Infrastructure as Code / GitOps",
    shortName: "IaC / GitOps",
    icon: "📜",
    tagline: "Declarative infrastructure, versioned and auditable — every change through Git",
    problem: "Manual infrastructure changes cause drift, outages, and compliance violations that are impossible to audit or reproduce.",
    capabilities: [
      "Terraform module library development",
      "Pulumi stack design",
      "ArgoCD / Flux GitOps setup",
      "Drift detection & remediation",
      "Multi-environment management"
    ],
    approach: ["Infrastructure audit", "IaC strategy & module design", "GitOps pipeline implementation", "Drift monitoring & governance"],
    tools: ["Terraform", "Pulumi", "ArgoCD", "Flux", "Crossplane"],
    deliverables: ["Terraform module library", "GitOps pipeline setup", "Drift detection tooling", "IaC style guide"],
    metrics: ["Infrastructure drift incidents", "Change lead time", "Rollback success rate", "IaC coverage %"],
    color: "green"
  },
  {
    slug: "finops",
    name: "FinOps",
    shortName: "FinOps",
    icon: "📊",
    tagline: "Cloud financial accountability — from visibility to action",
    problem: "Engineering teams overspend because cloud costs are invisible, unattributed, and disconnected from business outcomes.",
    capabilities: [
      "Cloud financial accountability framework",
      "Chargeback/showback model design",
      "Unit economics implementation",
      "FinOps team enablement",
      "Forecasting & budgeting automation"
    ],
    approach: ["Cost visibility baseline", "Attribution & allocation model", "Optimization & governance", "FinOps culture adoption"],
    tools: ["Kubecost", "CloudHealth", "Infracost", "OpenCost", "Apptio"],
    deliverables: ["FinOps maturity assessment", "Chargeback model", "Unit cost dashboards", "FinOps playbook"],
    metrics: ["Cost per unit", "Budget variance", "Chargeback accuracy", "Optimization savings"],
    color: "orange"
  },
  {
    slug: "chaos-engineering",
    name: "Chaos Engineering & Resilience",
    shortName: "Chaos Eng",
    icon: "💥",
    tagline: "Break things on purpose — so they don't break by surprise",
    problem: "Untested failure modes become production incidents. Without chaos testing, you discover weaknesses from customers, not engineers.",
    capabilities: [
      "GameDay planning & facilitation",
      "Fault injection framework setup",
      "Resilience scoring & benchmarking",
      "Chaos Monkey / LitmusChaos implementation",
      "Blast radius analysis"
    ],
    approach: ["Resilience assessment", "Hypothesis & experiment design", "Controlled chaos execution", "Hardening & continuous testing"],
    tools: ["Chaos Monkey", "LitmusChaos", "Gremlin", "Chaos Mesh", "Steadybit"],
    deliverables: ["Chaos experiment catalog", "GameDay playbook", "Resilience scorecard", "Failure mode documentation"],
    metrics: ["Resilience score", "Mean time to recovery", "Blast radius containment", "Experiment coverage"],
    color: "orange"
  },
  {
    slug: "kubernetes",
    name: "Kubernetes & Container Ops",
    shortName: "K8s & Containers",
    icon: "🐳",
    tagline: "Production-grade Kubernetes — from cluster to service mesh",
    problem: "Kubernetes complexity overwhelms teams — misconfigurations, security gaps, and operational overhead slow everything down.",
    capabilities: [
      "K8s cluster management & upgrades",
      "Helm chart development",
      "Service mesh implementation (Istio/Linkerd)",
      "Container registry & image management",
      "Multi-cluster & federation setup"
    ],
    approach: ["Cluster assessment", "Architecture & security hardening", "Workload migration & optimization", "Day-2 operations & scaling"],
    tools: ["EKS", "GKE", "AKS", "Helm", "Istio", "Linkerd"],
    deliverables: ["Cluster architecture blueprint", "Helm chart library", "Service mesh configuration", "Container security policies"],
    metrics: ["Cluster uptime", "Pod scheduling latency", "Resource utilization", "Image vulnerability count"],
    color: "cyan"
  },
  {
    slug: "mlops-aiops",
    name: "MLOps / AIOps",
    shortName: "MLOps / AIOps",
    icon: "🤖",
    tagline: "AI-powered operations and production-ready ML pipelines",
    problem: "ML models stuck in notebooks never reach production. Manual ops can't keep pace with the volume and velocity of modern incidents.",
    capabilities: [
      "ML model pipeline automation",
      "AI-driven alerting & anomaly detection",
      "Intelligent incident response",
      "Model serving & monitoring",
      "LLM-Ops & prompt engineering workflows"
    ],
    approach: ["ML/AI maturity assessment", "Pipeline & platform design", "Model operationalization", "AIOps integration & tuning"],
    tools: ["MLflow", "Kubeflow", "Dynatrace", "Moogsoft", "PagerDuty AI"],
    deliverables: ["MLOps pipeline architecture", "AIOps integration plan", "Model monitoring dashboard", "AI-Ops playbook"],
    metrics: ["Model deployment frequency", "Inference latency", "AI alert accuracy", "Incident auto-resolution rate"],
    color: "green"
  }
];
