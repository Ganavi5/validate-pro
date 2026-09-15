import { motion } from "motion/react";
import { BarChart3, Gauge, Radar, UserCheck } from "lucide-react";
import { CountUp, FadeUp } from "./primitives";

const stats = [
  { icon: BarChart3, value: 10000, suffix: "+", label: "Ideas analyzed" },
  { icon: Gauge, value: 92, suffix: "%", label: "Validation confidence" },
  { icon: Radar, value: 120, suffix: "+", label: "Market signals checked" },
  { icon: UserCheck, value: 0, suffix: "", label: "Founder-first workflow", text: "Founder-first" },
];

export function TrustSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <FadeUp key={s.label} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              className="glass-strong hover-glow h-full rounded-3xl p-6"
            >
              <s.icon className="size-5 text-violet" />
              <div className="font-display mt-5 text-3xl font-semibold">
                {s.text ? (
                  <span className="text-gradient">{s.text}</span>
                ) : (
                  <CountUp value={s.value} suffix={s.suffix} />
                )}
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
