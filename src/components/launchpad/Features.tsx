import { motion } from "motion/react";
import {
  Brain,
  Compass,
  LineChart,
  Radar,
  Rocket,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./primitives";

const features: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "AI Market Validation",
    description: "Demand signals, trend velocity and timing scored into one market number.",
    icon: Brain,
  },
  {
    title: "Competitor Intelligence",
    description: "Who owns the space today, what they miss, and the gap you can take.",
    icon: Radar,
  },
  {
    title: "Revenue Simulation",
    description: "Twelve-month revenue paths from realistic conversion and pricing assumptions.",
    icon: LineChart,
  },
  {
    title: "Risk Detection",
    description: "Acquisition, churn, moat and regulatory risk surfaced before you commit.",
    icon: ShieldAlert,
  },
  {
    title: "Founder Roadmap",
    description: "A sequenced plan from first interview to shipped MVP.",
    icon: Compass,
  },
  {
    title: "Launch Recommendation",
    description: "A clear yes, no, or pivot — with the reasoning attached.",
    icon: Rocket,
  },
];

export function Features() {
  return (
    <section id="features" className="relative mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Features"
        title="An analyst team"
        highlight="on every idea"
        subtitle="Six specialised capabilities, one report you can act on today."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.07 }}
            className="glass-strong hover-glow group rounded-3xl p-6"
          >
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              className="bg-gradient-brand glow-ring flex size-11 items-center justify-center rounded-2xl"
            >
              <f.icon className="size-5 text-primary-foreground" />
            </motion.span>
            <h3 className="mt-6 text-base font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
