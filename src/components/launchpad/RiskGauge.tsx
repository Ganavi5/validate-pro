import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function RiskGauge({
  risk,
  label,
  recommendations,
}: {
  risk: number;
  label: string;
  recommendations: string[];
}) {
  const r = 78;
  const c = 2 * Math.PI * r;

  return (
    <div className="glass-strong rounded-4xl p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold">Risk analysis</h3>
      <p className="mt-1 text-sm text-muted-foreground">Weighted across 9 risk vectors.</p>

      <div className="mt-8 flex flex-col items-center">
        <div className="relative size-48">
          <svg viewBox="0 0 200 200" className="size-full -rotate-90">
            <defs>
              <linearGradient id="riskGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--color-success)" />
                <stop offset="100%" stopColor="var(--color-warning)" />
              </linearGradient>
            </defs>
            <circle
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke="var(--color-muted)"
              strokeWidth="14"
            />
            <motion.circle
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke="url(#riskGrad)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray={c}
              initial={{ strokeDashoffset: c }}
              whileInView={{ strokeDashoffset: c - (c * risk) / 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-4xl font-semibold">{risk}%</span>
            <span className="mt-1 text-xs tracking-widest text-warning uppercase">{label}</span>
          </div>
        </div>

        <ul className="mt-8 w-full space-y-2.5">
          {recommendations.map((rec, i) => (
            <motion.li
              key={rec}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass flex items-center gap-3 rounded-2xl px-4 py-3 text-sm"
            >
              <CheckCircle2 className="size-4 shrink-0 text-success" />
              {rec}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
