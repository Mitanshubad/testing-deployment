"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/devops", label: "DevOps" },
      { href: "/services/devsecops", label: "DevSecOps" },
      { href: "/services/platform-engineering", label: "Platform Engineering" },
      { href: "/services/cloud-operations", label: "Cloud Operations" },
      { href: "/services/cost-optimization", label: "Cost Optimization" },
      { href: "/services/sre", label: "SRE" },
      { href: "/services/observability", label: "Observability" },
      { href: "/services/iac-gitops", label: "IaC / GitOps" },
      { href: "/services/finops", label: "FinOps" },
      { href: "/services/chaos-engineering", label: "Chaos Engineering" },
      { href: "/services/kubernetes", label: "Kubernetes & Containers" },
      { href: "/services/mlops-aiops", label: "MLOps / AIOps" },
    ],
  },
  { href: "/accelerators", label: "Accelerators" },
  { href: "/tools", label: "Tools & Ecosystem" },
  { href: "/resources", label: "Resources" },
  { href: "/roadmaps", label: "Roadmaps" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-[#060810]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setDropdownOpen(link.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  href={link.href}
                  className="px-3 py-2 text-sm text-secondary hover:text-green transition-colors font-body"
                >
                  {link.label}
                  {link.children && <span className="ml-1 text-xs">▾</span>}
                </Link>
                {link.children && dropdownOpen === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 mt-1 w-64 rounded-lg border border-border bg-card p-2 shadow-xl"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm text-secondary hover:bg-card-hover hover:text-green transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center rounded-lg bg-green px-4 py-2 text-sm font-semibold text-[#060810] hover:bg-green/90 transition-colors"
            >
              Book a Demo
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-secondary hover:text-green"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border bg-[#060810]"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-secondary hover:text-green transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block pl-8 py-1.5 text-sm text-muted hover:text-green transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block mt-4 text-center rounded-lg bg-green px-4 py-2 font-semibold text-[#060810]"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
