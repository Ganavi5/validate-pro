import { motion } from "motion/react";
import { Map, Megaphone, Users, type LucideIcon } from "lucide-react";
import type { Recommendation } from "@/lib/validation-data";

const icons: Record<Recommendation["icon"], LucideIcon> = {
  users: Users,
  map: Map,
  megaphone: Megaphone,
};

export function Recommendations({ recommendations }: { recommendations: Recommendation[] }) {
  return (
    <div>
      <h3 className="font-display text-lg font-semibold">AI recommendations</h3>
      <p className="mt-1 text-sm text-muted-foreground">Your next 30 days, prioritised.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {recommendations.map((rec, i) => {
          const Icon = icons[rec.icon];
          return (
            <motion.div
              key={rec.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-strong hover-glow rounded-3xl p-6"
            >
              <span className="bg-gradient-brand flex size-10 items-center justify-center rounded-2xl">
                <Icon className="size-5 text-primary-foreground" />
              </span>
              <h4 className="mt-5 text-base font-semibold">{rec.title}</h4>
              <ul className="mt-3 space-y-2">
                {rec.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-violet" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
