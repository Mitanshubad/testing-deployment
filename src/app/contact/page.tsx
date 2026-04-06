"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="grid-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="LET'S BUILD TOGETHER"
          subtitle="Book a free assessment or get in touch. We'll respond within 24 hours."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 rounded-2xl border border-border bg-card"
          >
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="font-heading text-2xl tracking-wide text-green">MESSAGE SENT</h3>
                <p className="mt-3 text-secondary">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-secondary mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-green focus:outline-none transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-secondary mb-2">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-green focus:outline-none transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-secondary mb-2">Work Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-green focus:outline-none transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-secondary mb-2">Company</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-green focus:outline-none transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label className="block text-sm text-secondary mb-2">What are you interested in?</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-green focus:outline-none transition-colors"
                  >
                    <option>Free Engineering Assessment</option>
                    <option>DevOps Consulting</option>
                    <option>Platform Engineering</option>
                    <option>AI-Native DevOps Accelerator</option>
                    <option>DevSecOps & Compliance</option>
                    <option>Cost Optimization / FinOps</option>
                    <option>SRE & Reliability</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-secondary mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-green focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your current challenges and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-green px-6 py-3 font-semibold text-[#060810] hover:bg-green/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-xl border border-green/20 bg-green/5">
              <h3 className="font-heading text-xl tracking-wide text-green mb-4">FREE ASSESSMENT INCLUDES</h3>
              <ul className="space-y-3">
                {[
                  "60-minute deep dive with a senior engineer",
                  "Engineering maturity assessment across all 12 streams",
                  "Prioritized recommendations with quick wins",
                  "Custom accelerator roadmap for your team",
                  "ROI projection based on your specific environment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-secondary">
                    <span className="text-green mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-xl border border-border bg-card">
              <h3 className="font-heading text-xl tracking-wide mb-4">GET IN TOUCH</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted">Email</p>
                  <p className="text-foreground">hello@oddlly.io</p>
                </div>
                <div>
                  <p className="text-sm text-muted">Response Time</p>
                  <p className="text-foreground">Within 24 hours</p>
                </div>
                <div>
                  <p className="text-sm text-muted">Based in</p>
                  <p className="text-foreground">San Francisco, CA · Remote-first</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-xl border border-border bg-card">
              <h3 className="font-heading text-xl tracking-wide mb-4">FOLLOW US</h3>
              <div className="flex gap-4">
                {["GitHub", "LinkedIn", "Twitter/X", "YouTube"].map((social) => (
                  <span
                    key={social}
                    className="px-4 py-2 rounded-lg border border-border text-sm text-secondary hover:text-green hover:border-green/30 transition-colors cursor-pointer"
                  >
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
