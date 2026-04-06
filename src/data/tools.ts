export interface Tool {
  name: string;
  category: string;
}

export const toolCategories = [
  "CI/CD", "GitOps", "IaC", "Containers", "Kubernetes",
  "Service Mesh", "Security", "Observability", "AIOps", "FinOps", "Chaos"
];

export const tools: Tool[] = [
  // CI/CD
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "GitLab CI", category: "CI/CD" },
  { name: "Jenkins", category: "CI/CD" },
  { name: "Tekton", category: "CI/CD" },
  { name: "CircleCI", category: "CI/CD" },
  // GitOps
  { name: "ArgoCD", category: "GitOps" },
  { name: "Flux", category: "GitOps" },
  { name: "Helm", category: "GitOps" },
  { name: "Kustomize", category: "GitOps" },
  // IaC
  { name: "Terraform", category: "IaC" },
  { name: "Pulumi", category: "IaC" },
  { name: "Crossplane", category: "IaC" },
  { name: "Ansible", category: "IaC" },
  // Containers
  { name: "Docker", category: "Containers" },
  { name: "Podman", category: "Containers" },
  { name: "Buildah", category: "Containers" },
  { name: "Kaniko", category: "Containers" },
  // Kubernetes
  { name: "EKS", category: "Kubernetes" },
  { name: "GKE", category: "Kubernetes" },
  { name: "AKS", category: "Kubernetes" },
  { name: "Rancher", category: "Kubernetes" },
  { name: "OpenShift", category: "Kubernetes" },
  // Service Mesh
  { name: "Istio", category: "Service Mesh" },
  { name: "Linkerd", category: "Service Mesh" },
  { name: "Cilium", category: "Service Mesh" },
  // Security
  { name: "Snyk", category: "Security" },
  { name: "Trivy", category: "Security" },
  { name: "Checkov", category: "Security" },
  { name: "OPA", category: "Security" },
  { name: "Kyverno", category: "Security" },
  { name: "Vault", category: "Security" },
  // Observability
  { name: "Prometheus", category: "Observability" },
  { name: "Grafana", category: "Observability" },
  { name: "OpenTelemetry", category: "Observability" },
  { name: "Datadog", category: "Observability" },
  { name: "Jaeger", category: "Observability" },
  // AIOps
  { name: "Dynatrace", category: "AIOps" },
  { name: "Moogsoft", category: "AIOps" },
  { name: "PagerDuty AI", category: "AIOps" },
  { name: "Launchable", category: "AIOps" },
  // FinOps
  { name: "Kubecost", category: "FinOps" },
  { name: "CloudHealth", category: "FinOps" },
  { name: "Infracost", category: "FinOps" },
  { name: "OpenCost", category: "FinOps" },
  // Chaos
  { name: "Chaos Monkey", category: "Chaos" },
  { name: "LitmusChaos", category: "Chaos" },
  { name: "Gremlin", category: "Chaos" },
];
