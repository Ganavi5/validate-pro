import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useMotionValue, useSpring, animate } from "motion/react";
import { cn } from "@/lib/utils";

export function Orbs({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -top-40 left-[10%] h-[32rem] w-[32rem] animate-float-orb rounded-full bg-violet/25 blur-[120px]" />
      <div className="absolute top-40 right-[5%] h-[28rem] w-[28rem] animate-float-orb rounded-full bg-blue/25 blur-[130px] [animation-delay:-5s]" />
      <div className="absolute bottom-0 left-[35%] h-[24rem] w-[24rem] animate-float-orb rounded-full bg-cyan/10 blur-[140px] [animation-delay:-9s]" />
    </div>
  );
}

export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <FadeUp className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <span className="glass inline-flex rounded-full px-3 py-1 text-xs font-medium tracking-widest text-muted-foreground uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">
        {title} {highlight ? <span className="text-gradient">{highlight}</span> : null}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base text-pretty text-muted-foreground">{subtitle}</p>
      ) : null}
    </FadeUp>
  );
}

export function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.6,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export function useSpringValue(value: number) {
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 18 });
  useEffect(() => {
    mv.set(value);
  }, [mv, value]);
  return spring;
}
