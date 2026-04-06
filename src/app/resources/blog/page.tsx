"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/data/blog";

const categoryColors: Record<string, { text: string; bg: string; border: string }> = {
  FinOps: { text: "text-orange", bg: "bg-orange/10", border: "border-orange/30" },
  SRE: { text: "text-green", bg: "bg-green/10", border: "border-green/30" },
  "Platform Eng": { text: "text-cyan", bg: "bg-cyan/10", border: "border-cyan/30" },
  GitOps: { text: "text-green", bg: "bg-green/10", border: "border-green/30" },
  AIOps: { text: "text-orange", bg: "bg-orange/10", border: "border-orange/30" },
  DevSecOps: { text: "text-red", bg: "bg-red/10", border: "border-red/30" },
};

const coverGradients: Record<string, string> = {
  orange: "from-orange/20 to-orange/5",
  green: "from-green/20 to-green/5",
  cyan: "from-cyan/20 to-cyan/5",
  red: "from-red/20 to-red/5",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="grid-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Blog"
          title="BLOG & ARTICLES"
          subtitle="Deep dives on DevOps, platform engineering, security, and AI-native operations from the Oddlly engineering team."
        />

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Link
            href={`/resources/blog/${featured.slug}`}
            className="block group"
          >
            <div className={`rounded-2xl border border-border bg-gradient-to-br ${coverGradients[featured.coverColor]} p-8 md:p-12 transition-all hover:border-green/30`}>
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    {(() => {
                      const colors = categoryColors[featured.category] || categoryColors.FinOps;
                      return (
                        <span className={`px-2.5 py-0.5 text-xs font-mono rounded border ${colors.text} ${colors.bg} ${colors.border}`}>
                          {featured.category}
                        </span>
                      );
                    })()}
                    <span className="text-xs text-muted">{featured.readTime} read</span>
                    <span className="text-xs text-muted">·</span>
                    <span className="text-xs text-muted">{featured.date}</span>
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl tracking-wide text-foreground group-hover:text-green transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-secondary leading-relaxed">{featured.excerpt}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green/30 to-cyan/30 flex items-center justify-center text-xs font-bold text-green">
                      {featured.author.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{featured.author}</p>
                      <p className="text-xs text-muted">{featured.authorRole}</p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center w-48 h-48 rounded-xl border border-border/50 bg-card/50">
                  <span className="font-heading text-6xl text-green/20">{featured.category.slice(0, 2)}</span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, i) => {
            const colors = categoryColors[post.category] || categoryColors.FinOps;
            return (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={`/resources/blog/${post.slug}`}
                  className="block h-full group"
                >
                  <article className="flex flex-col h-full p-6 rounded-xl border border-border bg-card hover:bg-card-hover transition-all">
                    {/* Cover strip */}
                    <div className={`h-1.5 w-16 rounded-full mb-5 ${colors.bg}`} />

                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2 py-0.5 text-xs font-mono rounded border ${colors.text} ${colors.bg} ${colors.border}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-muted">{post.readTime}</span>
                    </div>

                    <h3 className="font-heading text-xl tracking-wide text-foreground group-hover:text-green transition-colors">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-sm text-secondary leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green/30 to-cyan/30 flex items-center justify-center text-[10px] font-bold text-green">
                          {post.author.split(" ").map(n => n[0]).join("")}
                        </div>
                        <span className="text-xs text-muted">{post.author}</span>
                      </div>
                      <span className="text-xs text-muted">{post.date}</span>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
