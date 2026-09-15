import { motion } from "motion/react";
import { ArrowRight, Play, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";
import { Orbs } from "./primitives";

function MockCard({
  className,
  delay,
  children,
}: {
  className?: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      animate={{ opacity: 1, y: [0, -14, 0] }}
      transition={{
        opacity: { duration: 0.8, delay },
        y: { duration: 9, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={`glass-strong glow-ring absolute hidden rounded-3xl p-4 lg:block ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Hero({
  onAnalyze,
  onDemo,
}: {
  onAnalyze: () => void;
  onDemo: () => void;
}) {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="grid-bg absolute inset-0" />
      <Orbs />

      <MockCard className="top-28 left-6 w-56" delay={0.4}>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <TrendingUp className="size-4 text-violet" /> Market score
        </div>
        <div className="font-display mt-2 text-3xl font-semibold">86/100</div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "86%" }}
            transition={{ duration: 1.6, delay: 0.9 }}
            className="bg-gradient-brand h-full rounded-full"
          />
        </div>
      </MockCard>

      <MockCard className="right-8 bottom-28 w-60" delay={0.8}>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="size-4 text-success" /> Risk detection
        </div>
        <div className="font-display mt-2 text-3xl font-semibold">34%</div>
        <p className="mt-1 text-xs text-muted-foreground">Moderate · 3 mitigations suggested</p>
      </MockCard>

      <MockCard className="top-40 right-14 w-52" delay={1.1}>
        <div className="text-xs text-muted-foreground">Revenue · month 12</div>
        <div className="font-display mt-1 text-2xl font-semibold text-gradient">$250,000</div>
        <div className="mt-3 flex h-10 items-end gap-1">
          {[10, 22, 30, 44, 60, 78, 100].map((h, i) => (
            <motion.span
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: 1.2 + i * 0.07 }}
              className="bg-gradient-brand w-full rounded-sm"
            />
          ))}
        </div>
      </MockCard>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-8">
        <motion.a
          href="#validate"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass hover-glow inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground"
        >
          <Sparkles className="size-3.5 text-violet" />
          Autonomous research agents · live in 4 seconds
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-4xl leading-[1.05] font-semibold text-balance sm:text-6xl md:text-7xl"
        >
          Validate your startup{" "}
          <span className="text-gradient">before you build it.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-base text-pretty text-muted-foreground sm:text-lg"
        >
          LaunchPad AI uses autonomous AI research agents to analyze market demand, competitors,
          risks, and revenue opportunities before you spend time or money building your product.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onAnalyze}
            className="bg-gradient-brand glow-ring-strong inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-primary-foreground"
          >
            Analyze Idea <ArrowRight className="size-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onDemo}
            className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium"
          >
            <Play className="size-4 text-violet" /> Watch Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
