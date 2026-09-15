import { motion } from "motion/react";
import {
  Braces,
  FileText,
  Lightbulb,
  LineChart,
  Search,
  Users,
  type LucideIcon,
} from "lucide-react";
import { FadeUp, SectionHeading } from "./primitives";

const steps: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Idea", description: "Your brief becomes a structured problem statement.", icon: Lightbulb },
  { title: "Keyword Extraction", description: "Industry, audience and intent signals.", icon: Braces },
  { title: "Market Research", description: "Trends, demand curves and timing.", icon: Search },
  { title: "Competitor Discovery", description: "Who wins today and where they leak.", icon: Users },
  { title: "Financial Simulation", description: "Revenue paths and unit economics.", icon: LineChart },
  { title: "Founder Report", description: "A decision, not a data dump.", icon: FileText },
];

export function WorkflowTimeline() {
  return (
    <section id="workflow" className="relative mx-auto w-full max-w-5xl scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Workflow"
        title="Six agents,"
        highlight="one pipeline"
        subtitle="Every validation follows the same disciplined research path."
      />

      <div className="relative mt-14">
        <div className="absolute top-0 bottom-0 left-6 w-px bg-glass-border md:left-1/2" />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className="bg-gradient-brand absolute top-0 bottom-0 left-6 w-px md:left-1/2"
        />

        <div className="space-y-6">
          {steps.map((step, i) => (
            <FadeUp key={step.title} delay={i * 0.08}>
              <div
                className={`relative pl-16 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                <span
                  className={`bg-gradient-brand glow-ring absolute top-6 left-6 flex size-9 -translate-x-1/2 items-center justify-center rounded-xl ${
                    i % 2 === 0 ? "md:right-0 md:left-auto md:translate-x-1/2" : "md:-left-0"
                  }`}
                >
                  <step.icon className="size-4 text-primary-foreground" />
                </span>
                <div className="glass hover-glow rounded-3xl p-5">
                  <h4 className="text-base font-semibold">{step.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
