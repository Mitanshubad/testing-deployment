"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const lines = [
  { prompt: true, text: "git push origin main" },
  { prompt: false, text: "Enumerating objects: 42, done." },
  { prompt: false, text: "remote: Resolving deltas: 100% (18/18)" },
  { prompt: true, text: "kubectl rollout status deploy/api-v2" },
  { prompt: false, text: 'deployment "api-v2" successfully rolled out' },
  { prompt: true, text: "curl -s https://api.oddlly.io/health | jq" },
  { prompt: false, text: '{ "status": "healthy", "latency": "12ms" }' },
  { prompt: true, text: "oddlly scan --security --compliance" },
  { prompt: false, text: "0 critical vulnerabilities found" },
  { prompt: false, text: "SOC2 compliance: PASS" },
];

export default function TerminalBlock() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 600);
      return () => clearTimeout(timer);
    }
    // Reset after showing all
    const resetTimer = setTimeout(() => setVisibleLines(0), 3000);
    return () => clearTimeout(resetTimer);
  }, [visibleLines]);

  return (
    <div className="w-full max-w-2xl rounded-xl border border-border bg-[#0a0e18] overflow-hidden shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0d1220] border-b border-border">
        <div className="w-3 h-3 rounded-full bg-red/80" />
        <div className="w-3 h-3 rounded-full bg-orange/80" />
        <div className="w-3 h-3 rounded-full bg-green/80" />
        <span className="ml-3 text-xs font-mono text-muted">oddlly-terminal</span>
      </div>
      {/* Content */}
      <div className="p-4 font-mono text-sm space-y-1 min-h-[280px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {line.prompt ? (
              <span>
                <span className="text-green">$</span>{" "}
                <span className="text-foreground">{line.text}</span>
              </span>
            ) : (
              <span className="text-secondary">{line.text}</span>
            )}
          </motion.div>
        ))}
        {visibleLines < lines.length && (
          <span className="text-green">
            $ <span className="cursor-blink">_</span>
          </span>
        )}
      </div>
    </div>
  );
}
