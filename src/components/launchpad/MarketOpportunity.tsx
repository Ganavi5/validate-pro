import { motion } from "motion/react";
import type { MarketSizeTier } from "@/lib/validation-data";

export function MarketOpportunity({ market }: { market: MarketSizeTier[] }) {
  return (
    <div className="glass-strong rounded-4xl p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold">Market opportunity</h3>
      <p className="mt-1 text-sm text-muted-foreground">TAM, SAM and SOM for this idea.</p>

      <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,18rem)_1fr]">
        <div className="relative mx-auto aspect-square w-full max-w-[18rem]">
          {market.map((tier, i) => {
            const size = [100, 68, 40][i];
            return (
              <motion.div
                key={tier.short}
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: `${size}%`, height: `${size}%` }}
                className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-start justify-center rounded-full border border-violet/30 bg-violet/10 pt-3 backdrop-blur-sm"
              >
                <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                  {tier.short}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div className="space-y-3">
          {market.map((tier, i) => (
            <motion.div
              key={tier.short}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass rounded-3xl p-5"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-sm font-medium">{tier.label}</span>
                <span className="font-display text-xl font-semibold text-gradient">
                  {tier.value}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{tier.description}</p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tier.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.12 }}
                  className="bg-gradient-brand h-full rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
