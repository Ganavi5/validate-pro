import { motion } from "motion/react";
import { ArrowUpRight, Trophy } from "lucide-react";
import type { ValidationReport } from "@/lib/validation-data";

export function DecisionCard({ report }: { report: ValidationReport }) {
  const { decision, marketScore } = report;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glow-ring-strong relative overflow-hidden rounded-4xl border border-violet/40 p-[1px]"
    >
      <div className="bg-gradient-brand absolute inset-0 opacity-25 blur-2xl" />
      <div className="relative rounded-4xl bg-card/80 p-7 backdrop-blur-xl sm:p-10">
        <div className="flex items-center gap-2 text-xs tracking-widest text-muted-foreground uppercase">
          <Trophy className="size-4 text-violet" /> Launch recommendation
        </div>

        <div className="mt-7 grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
          <div className="flex items-center gap-7">
            <div>
              <div className="font-display text-7xl leading-none font-semibold text-gradient sm:text-8xl">
                {decision.verdict}
              </div>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">{decision.summary}</p>
            </div>
            <div className="hidden h-24 w-px bg-glass-border sm:block" />
            <div className="hidden sm:block">
              <div className="text-xs tracking-widest text-muted-foreground uppercase">
                Market score
              </div>
              <div className="font-display mt-1 text-4xl font-semibold">{marketScore}/100</div>
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <div className="text-xs tracking-widest text-muted-foreground uppercase">
              Immediate next steps
            </div>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {decision.nextSteps.map((step, i) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-2 text-sm"
                >
                  <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-violet" />
                  {step}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
