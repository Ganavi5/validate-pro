import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Loader2, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const TASKS = [
  "Understanding your idea",
  "Extracting industry keywords",
  "Scanning market trends",
  "Finding competitors",
  "Estimating market size",
  "Simulating revenue",
  "Generating founder report",
];

const LOGS = [
  "agent:orchestrator → spawning 7 research workers",
  "Parsing idea brief and intent...",
  "Extracting industry keywords: fitness, students, adaptive AI",
  "Searching public market data...",
  "Indexing 4 trend sources · 12 months of signal",
  "Comparing 120 competitors...",
  "Detecting pricing gaps...",
  "Estimating TAM / SAM / SOM ranges...",
  "Building financial simulation...",
  "Running 500 Monte Carlo revenue paths",
  "Scoring risk vectors: acquisition, churn, moat",
  "Finalizing founder report...",
];

const DURATION = 4000;

export function LoadingWorkflow({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 450);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  useEffect(() => {
    const step = DURATION / LOGS.length;
    const timers = LOGS.map((line, i) =>
      setTimeout(() => setLogs((prev) => [...prev, line]), i * step),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [logs]);

  const exact = progress * TASKS.length;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto w-full max-w-6xl px-5 py-12 sm:px-8"
    >
      <div className="glass-strong glow-ring-strong rounded-4xl p-6 sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold">Autonomous research in progress</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Seven agents working in parallel on your idea.
            </p>
          </div>
          <span className="font-display text-3xl font-semibold text-gradient">
            {Math.round(progress * 100)}%
          </span>
        </div>

        <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="bg-gradient-brand h-full rounded-full transition-[width] duration-100"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <ul className="space-y-2.5">
            {TASKS.map((task, i) => {
              const local = Math.max(0, Math.min(1, exact - i));
              const done = local >= 1;
              const active = local > 0 && local < 1;
              return (
                <li
                  key={task}
                  className={cn(
                    "glass rounded-2xl px-4 py-3 transition-opacity",
                    !done && !active && "opacity-40",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex size-6 shrink-0 items-center justify-center rounded-full border",
                        done
                          ? "border-transparent bg-success/20 text-success"
                          : active
                            ? "border-violet/50 text-violet"
                            : "border-border text-muted-foreground",
                      )}
                    >
                      {done ? (
                        <Check className="size-3.5" />
                      ) : active ? (
                        <Loader2 className="size-3.5 animate-spin" />
                      ) : (
                        <span className="size-1.5 rounded-full bg-current" />
                      )}
                    </span>
                    <span className="text-sm">{task}</span>
                  </div>
                  <div className="mt-2 ml-9 h-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="bg-gradient-brand h-full rounded-full"
                      style={{ width: `${local * 100}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="glass flex h-full min-h-[22rem] flex-col overflow-hidden rounded-3xl">
            <div className="flex items-center gap-2 border-b border-glass-border px-4 py-3">
              <Terminal className="size-4 text-violet" />
              <span className="font-mono text-xs text-muted-foreground">agent-activity.log</span>
              <span className="ml-auto flex gap-1.5">
                <i className="size-2.5 rounded-full bg-destructive/60" />
                <i className="size-2.5 rounded-full bg-warning/60" />
                <i className="size-2.5 rounded-full bg-success/60" />
              </span>
            </div>
            <div ref={logRef} className="flex-1 space-y-1.5 overflow-y-auto p-4 font-mono text-xs">
              <AnimatePresence initial={false}>
                {logs.map((line, i) => (
                  <motion.div
                    key={line + i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-2 text-muted-foreground"
                  >
                    <span className="text-violet">›</span>
                    <span>{line}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div className="flex gap-2 text-violet">
                <span>›</span>
                <motion.span
                  animate={{ opacity: [1, 0.15, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ▍
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
