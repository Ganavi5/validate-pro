import { motion } from "motion/react";
import { Sparkles, Wand2 } from "lucide-react";
import { EXAMPLE_IDEA } from "@/lib/validation-data";
import { FadeUp, SectionHeading } from "./primitives";

export function IdeaInput({
  value,
  onChange,
  onAnalyze,
  disabled,
}: {
  value: string;
  onChange: (v: string) => void;
  onAnalyze: () => void;
  disabled?: boolean;
}) {
  return (
    <section id="validate" className="relative mx-auto w-full max-w-4xl scroll-mt-24 px-5 py-16 sm:px-8">
      <SectionHeading
        eyebrow="The centerpiece"
        title="Describe your"
        highlight="startup idea"
        subtitle="One paragraph is enough. Seven agents will take it from there."
      />

      <FadeUp delay={0.1} className="mt-10">
        <div className="glass-strong glow-ring-strong rounded-4xl p-2">
          <div className="rounded-3xl bg-background/40 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs tracking-widest text-muted-foreground uppercase">
              <Sparkles className="size-3.5 text-violet" /> Idea brief
            </div>
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              rows={5}
              placeholder="Example: AI-powered fitness app for students."
              className="mt-4 w-full resize-none bg-transparent text-lg leading-relaxed outline-none placeholder:text-muted-foreground/60"
            />
            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-glass-border pt-5">
              <motion.button
                whileHover={{ scale: disabled ? 1 : 1.04 }}
                whileTap={{ scale: disabled ? 1 : 0.96 }}
                disabled={disabled || value.trim().length < 8}
                onClick={onAnalyze}
                className="bg-gradient-brand glow-ring inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground disabled:opacity-40"
              >
                <Wand2 className="size-4" /> Analyze Idea
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onChange(EXAMPLE_IDEA)}
                className="glass rounded-full px-6 py-3 text-sm font-medium"
              >
                Try Example
              </motion.button>
              <span className="ml-auto text-xs text-muted-foreground">
                {value.trim().length} characters
              </span>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
