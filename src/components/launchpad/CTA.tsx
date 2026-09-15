import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CTA({ onLaunch }: { onLaunch: () => void }) {
  return (
    <section id="about" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong glow-ring-strong relative overflow-hidden rounded-4xl px-6 py-20 text-center sm:px-12"
      >
        <motion.div
          animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="bg-gradient-brand pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full blur-[130px]"
        />
        <div className="relative">
          <h2 className="text-3xl font-semibold text-balance sm:text-5xl">
            Stop guessing. <span className="text-gradient">Start validating.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Get a founder-grade validation report in under a minute — before you write a single
            line of product code.
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onLaunch}
            className="bg-gradient-brand glow-ring mt-9 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-primary-foreground"
          >
            Launch Your First Validation <ArrowRight className="size-4" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
