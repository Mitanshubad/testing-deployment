"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export default function ROICalculatorPage() {
  const [teamSize, setTeamSize] = useState(20);
  const [cloudSpend, setCloudSpend] = useState(50000);
  const [deployFreq, setDeployFreq] = useState(5);

  // Calculations
  const hoursSavedPerWeek = Math.round(teamSize * 3.5);
  const costSavedPerMonth = Math.round(cloudSpend * 0.35);
  const mttrReduction = 40;
  const deploymentSpeedup = Math.round(deployFreq * 8);
  const annualSavings = costSavedPerMonth * 12;
  const engineerTimeSaved = Math.round(hoursSavedPerWeek * 52);

  return (
    <div className="grid-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="ROI Calculator"
          title="CALCULATE YOUR SAVINGS"
          subtitle="See how Oddlly accelerators can impact your team's efficiency, costs, and reliability."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 rounded-2xl border border-border bg-card"
          >
            <h3 className="font-heading text-2xl tracking-wide text-green mb-8">YOUR INPUTS</h3>

            <div className="space-y-8">
              <div>
                <label className="flex justify-between mb-3">
                  <span className="text-sm text-secondary">Engineering Team Size</span>
                  <span className="font-mono text-green">{teamSize} engineers</span>
                </label>
                <input
                  type="range"
                  min={5}
                  max={200}
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-green"
                />
                <div className="flex justify-between text-xs text-muted mt-1">
                  <span>5</span><span>200</span>
                </div>
              </div>

              <div>
                <label className="flex justify-between mb-3">
                  <span className="text-sm text-secondary">Monthly Cloud Spend</span>
                  <span className="font-mono text-cyan">${cloudSpend.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min={5000}
                  max={500000}
                  step={5000}
                  value={cloudSpend}
                  onChange={(e) => setCloudSpend(Number(e.target.value))}
                  className="w-full accent-cyan"
                />
                <div className="flex justify-between text-xs text-muted mt-1">
                  <span>$5K</span><span>$500K</span>
                </div>
              </div>

              <div>
                <label className="flex justify-between mb-3">
                  <span className="text-sm text-secondary">Current Deploys per Week</span>
                  <span className="font-mono text-orange">{deployFreq}/week</span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={100}
                  value={deployFreq}
                  onChange={(e) => setDeployFreq(Number(e.target.value))}
                  className="w-full accent-orange"
                />
                <div className="flex justify-between text-xs text-muted mt-1">
                  <span>1</span><span>100</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl border border-green/20 bg-green/5">
                <div className="font-heading text-3xl text-green">{hoursSavedPerWeek}</div>
                <p className="text-sm text-secondary mt-1">Hours saved / week</p>
              </div>
              <div className="p-6 rounded-xl border border-cyan/20 bg-cyan/5">
                <div className="font-heading text-3xl text-cyan">${costSavedPerMonth.toLocaleString()}</div>
                <p className="text-sm text-secondary mt-1">Cloud savings / month</p>
              </div>
              <div className="p-6 rounded-xl border border-orange/20 bg-orange/5">
                <div className="font-heading text-3xl text-orange">{mttrReduction}%</div>
                <p className="text-sm text-secondary mt-1">MTTR reduction</p>
              </div>
              <div className="p-6 rounded-xl border border-green/20 bg-green/5">
                <div className="font-heading text-3xl text-green">{deploymentSpeedup}x</div>
                <p className="text-sm text-secondary mt-1">Potential deploy frequency</p>
              </div>
            </div>

            <div className="p-8 rounded-xl border border-green/30 bg-gradient-to-br from-green/5 to-cyan/5">
              <h3 className="font-heading text-xl tracking-wide text-green mb-4">ANNUAL IMPACT</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-secondary">Cloud cost savings</span>
                  <span className="font-mono text-green font-bold">${annualSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Engineering hours reclaimed</span>
                  <span className="font-mono text-cyan font-bold">{engineerTimeSaved.toLocaleString()} hrs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Equivalent FTE savings</span>
                  <span className="font-mono text-orange font-bold">{Math.round(engineerTimeSaved / 2080)} engineers</span>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="block text-center rounded-lg bg-green px-8 py-3 font-semibold text-[#060810] hover:bg-green/90 transition-colors"
            >
              Get a Personalized Assessment
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
