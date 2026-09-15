import { Rocket } from "lucide-react";

const links = ["Privacy", "Terms", "Contact", "GitHub"];

export function Footer() {
  return (
    <footer className="border-t border-glass-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="bg-gradient-brand flex size-8 items-center justify-center rounded-lg">
            <Rocket className="size-4 text-primary-foreground" />
          </span>
          <span className="font-display text-sm font-semibold">LaunchPad AI</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {links.map((l) => (
            <a
              key={l}
              href="#top"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l}
            </a>
          ))}
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} LaunchPad AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
