import Link from "next/link";
import Logo from "@/components/Logo";

const footerLinks = {
  Services: [
    { href: "/services/devops", label: "DevOps" },
    { href: "/services/devsecops", label: "DevSecOps" },
    { href: "/services/platform-engineering", label: "Platform Engineering" },
    { href: "/services/sre", label: "SRE" },
    { href: "/services/kubernetes", label: "Kubernetes" },
    { href: "/services/mlops-aiops", label: "MLOps / AIOps" },
  ],
  Accelerators: [
    { href: "/accelerators", label: "All Accelerators" },
    { href: "/accelerators/ai-native", label: "AI-Native DevOps" },
    { href: "/roi-calculator", label: "ROI Calculator" },
  ],
  Resources: [
    { href: "/resources", label: "Blog & Articles" },
    { href: "/roadmaps", label: "Learning Roadmaps" },
    { href: "/tools", label: "Tools & Ecosystem" },
    { href: "/community", label: "Community" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/contact", label: "Book a Demo" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#060810]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-muted leading-relaxed">
              From Code to Cloud — Secured, Automated, Optimized.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-heading text-sm tracking-wider text-green mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Oddlly. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
