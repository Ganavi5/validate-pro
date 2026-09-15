import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import type { Competitor } from "@/lib/validation-data";
import { cn } from "@/lib/utils";

export function CompetitorTable({ competitors }: { competitors: Competitor[] }) {
  return (
    <div className="glass-strong rounded-4xl p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold">Competitor analysis</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Where incumbents are strong, weak, and exposed.
      </p>

      <div className="mt-6 overflow-x-auto">
        <div className="min-w-[46rem]">
          <div className="grid grid-cols-[1.1fr_1.4fr_1.4fr_1.4fr] gap-4 px-5 pb-3 text-xs tracking-widest text-muted-foreground uppercase">
            <span>Company</span>
            <span>Strength</span>
            <span>Weakness</span>
            <span>Market gap</span>
          </div>
          <div className="space-y-2.5">
            {competitors.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={cn(
                  "grid grid-cols-[1.1fr_1.4fr_1.4fr_1.4fr] items-start gap-4 rounded-3xl px-5 py-4 text-sm",
                  c.isYou
                    ? "glow-ring-strong border border-violet/60 bg-violet/10"
                    : "glass border border-transparent",
                )}
              >
                <span className="flex items-center gap-2 font-medium">
                  {c.isYou ? <Sparkles className="size-4 shrink-0 text-violet" /> : null}
                  {c.name}
                </span>
                <span className="text-muted-foreground">{c.strength}</span>
                <span className="text-muted-foreground">{c.weakness}</span>
                <span className={c.isYou ? "text-foreground" : "text-muted-foreground"}>
                  {c.marketGap}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
