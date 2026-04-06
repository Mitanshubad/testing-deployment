"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ label, title, subtitle, center = true }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {label && (
        <span className="inline-block mb-3 px-3 py-1 text-xs font-mono tracking-wider uppercase text-green border border-green/30 rounded-full bg-green/5">
          {label}
        </span>
      )}
      <h2 className="font-heading text-4xl md:text-5xl tracking-wide text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-secondary font-body leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
