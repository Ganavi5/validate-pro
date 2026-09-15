import { useCallback, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "motion/react";

import { Navbar } from "@/components/launchpad/Navbar";
import { Hero } from "@/components/launchpad/Hero";
import { TrustSection } from "@/components/launchpad/TrustSection";
import { IdeaInput } from "@/components/launchpad/IdeaInput";
import { LoadingWorkflow } from "@/components/launchpad/LoadingWorkflow";
import { Dashboard } from "@/components/launchpad/Dashboard";
import { WorkflowTimeline } from "@/components/launchpad/WorkflowTimeline";
import { Features } from "@/components/launchpad/Features";
import { CTA } from "@/components/launchpad/CTA";
import { Footer } from "@/components/launchpad/Footer";
import { Orbs } from "@/components/launchpad/primitives";
import { EXAMPLE_IDEA, sampleReport, type ValidationReport } from "@/lib/validation-data";

const title = "LaunchPad AI — Validate your startup before you build it";
const description =
  "Autonomous AI research agents analyze market demand, competitors, risks and revenue potential, then hand you a founder-grade validation report.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Stage = "idle" | "analyzing" | "report";

function Index() {
  const [idea, setIdea] = useState("");
  const [stage, setStage] = useState<Stage>("idle");
  const [report, setReport] = useState<ValidationReport | null>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  const scrollToInput = useCallback(() => {
    document.getElementById("validate")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const runAnalysis = useCallback(() => {
    setStage("analyzing");
    setReport(null);
    requestAnimationFrame(() => {
      document.getElementById("agents")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const handleDone = useCallback(() => {
    // Swap this for a Gemini API response later — same ValidationReport shape.
    setReport({ ...sampleReport, idea: idea.trim() || EXAMPLE_IDEA });
    setStage("report");
  }, [idea]);

  const handleDemo = useCallback(() => {
    setIdea(EXAMPLE_IDEA);
    scrollToInput();
    setTimeout(runAnalysis, 700);
  }, [runAnalysis, scrollToInput]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar onGetStarted={scrollToInput} />

      <main>
        <Hero onAnalyze={scrollToInput} onDemo={handleDemo} />
        <TrustSection />

        <div ref={inputRef} className="relative">
          <Orbs className="opacity-60" />
          <IdeaInput
            value={idea}
            onChange={setIdea}
            onAnalyze={runAnalysis}
            disabled={stage === "analyzing"}
          />

          <div id="agents" className="scroll-mt-24">
            <AnimatePresence mode="wait">
              {stage === "analyzing" ? (
                <LoadingWorkflow key="loading" onDone={handleDone} />
              ) : null}
            </AnimatePresence>
          </div>

          {stage === "report" && report ? <Dashboard report={report} /> : null}
        </div>

        <WorkflowTimeline />
        <Features />
        <CTA onLaunch={scrollToInput} />
      </main>

      <Footer />
    </div>
  );
}
