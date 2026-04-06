export interface Accelerator {
  slug: string;
  name: string;
  category: string;
  categoryColor: string;
  timeToValue: string;
  starMetric: string;
  description: string;
  tools: string[];
  featured?: boolean;
}

export const accelerators: Accelerator[] = [
  {
    slug: "cicd-pipeline",
    name: "CI/CD Pipeline Accelerator",
    category: "DevOps",
    categoryColor: "green",
    timeToValue: "1–2 days",
    starMetric: "10x faster releases",
    description: "Production-ready CI/CD pipelines with best-practice stages, security scanning, and multi-environment deployments — configured and running in days.",
    tools: ["GitHub Actions", "GitLab CI", "ArgoCD"]
  },
  {
    slug: "gitops-bootstrapper",
    name: "GitOps Bootstrapper",
    category: "DevOps",
    categoryColor: "green",
    timeToValue: "2–3 days",
    starMetric: "80% fewer drift incidents",
    description: "Full GitOps workflow with ArgoCD/Flux, environment promotion, drift detection, and automated reconciliation.",
    tools: ["ArgoCD", "Flux", "Kustomize"]
  },
  {
    slug: "golden-path-templates",
    name: "Golden Path Templates",
    category: "Platform Eng",
    categoryColor: "cyan",
    timeToValue: "3–5 days",
    starMetric: "70% less onboarding time",
    description: "Opinionated, pre-configured service templates that encode best practices for languages, frameworks, and infrastructure.",
    tools: ["Backstage", "Cookiecutter", "Yeoman"]
  },
  {
    slug: "environment-as-a-service",
    name: "Environment-as-a-Service (EaaS)",
    category: "DevOps",
    categoryColor: "green",
    timeToValue: "3–4 days",
    starMetric: "Eliminate env wait times",
    description: "On-demand, ephemeral environments for every PR — spin up, test, and tear down automatically.",
    tools: ["Terraform", "Crossplane", "Argo Workflows"]
  },
  {
    slug: "developer-portal",
    name: "Developer Portal (IDP) Accelerator",
    category: "Platform Eng",
    categoryColor: "cyan",
    timeToValue: "1–2 weeks",
    starMetric: "40% cognitive load reduction",
    description: "Internal developer portal built on Backstage with service catalog, documentation, and self-service workflows.",
    tools: ["Backstage", "TechDocs", "Kubernetes"]
  },
  {
    slug: "shift-left-security",
    name: "Shift-Left Security Pipeline",
    category: "DevSecOps",
    categoryColor: "red",
    timeToValue: "2–3 days",
    starMetric: "CVEs caught 10x earlier",
    description: "Automated security scanning at every stage — from IDE to production — with SAST, DAST, SCA, and container scanning.",
    tools: ["Snyk", "Trivy", "Checkov"]
  },
  {
    slug: "policy-as-code",
    name: "Policy-as-Code Accelerator",
    category: "DevSecOps",
    categoryColor: "red",
    timeToValue: "3–4 days",
    starMetric: "100% compliance gate coverage",
    description: "Enforce organizational policies as code with OPA/Kyverno — no more manual compliance reviews.",
    tools: ["OPA", "Kyverno", "Conftest"]
  },
  {
    slug: "supply-chain-security",
    name: "Software Supply Chain Security",
    category: "DevSecOps",
    categoryColor: "red",
    timeToValue: "3–5 days",
    starMetric: "Full SLSA Level 3 attainment",
    description: "End-to-end supply chain security with SBOM generation, provenance attestation, and dependency verification.",
    tools: ["Sigstore", "SLSA", "Syft"]
  },
  {
    slug: "secrets-management",
    name: "Secrets Management Accelerator",
    category: "DevSecOps",
    categoryColor: "red",
    timeToValue: "1–2 days",
    starMetric: "Zero hardcoded secrets",
    description: "Centralized secrets management with Vault — dynamic secrets, auto-rotation, and zero-trust access policies.",
    tools: ["Vault", "External Secrets", "SOPS"]
  },
  {
    slug: "compliance-as-code",
    name: "Compliance-as-Code Accelerator",
    category: "DevSecOps",
    categoryColor: "red",
    timeToValue: "1 week",
    starMetric: "Audit-ready in every deploy",
    description: "Automated compliance checks for SOC2, HIPAA, PCI-DSS — evidence collection and audit trail built into CI/CD.",
    tools: ["Chef InSpec", "Regula", "Prowler"]
  },
  {
    slug: "ai-native-devops",
    name: "AI-Native DevOps Accelerator",
    category: "AI + DevOps",
    categoryColor: "orange",
    timeToValue: "1–2 weeks",
    starMetric: "40% MTTR reduction",
    description: "AI-powered operations with intelligent incident response, smart test selection, LLM-driven code review, and natural language ops.",
    tools: ["Claude API", "Dynatrace", "PagerDuty AI", "Launchable"],
    featured: true
  }
];
