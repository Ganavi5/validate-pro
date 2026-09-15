import { motion } from "motion/react";
import { AlertTriangle, ShieldAlert, Sparkles, Zap } from "lucide-react";
import type { Swot } from "@/lib/validation-data";

export function SWOT({ swot }: { swot: Swot }) {
  const cards = [
    { title: "Strengths", items: swot.strengths, icon: Zap, accent: "text-success", from: -30 },
    {
      title: "Weaknesses",
      items: swot.weaknesses,
      icon: ShieldAlert,
      accent: "text-warning",
      from: 30,
    },
    {
      title: "Opportunities",
      items: swot.opportunities,
      icon: Sparkles,
      accent: "text-violet",
      from: -30,
    },
    {
      title: "Threats",
      items: swot.threats,
      icon: AlertTriangle,
      accent: "text-destructive",
      from: 30,
    },
  ];

  return (
    <div className="glass-strong rounded-4xl p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold">SWOT analysis</h3>
      <p className="mt-1 text-sm text-muted-foreground">The honest version, not the pitch version.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, x: card.from }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass hover-glow rounded-3xl p-5"
          >
            <div className="flex items-center gap-2">
              <card.icon className={`size-4 ${card.accent}`} />
              <span className="text-sm font-medium">{card.title}</span>
            </div>
            <ul className="mt-4 space-y-2">
              {card.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-violet" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
