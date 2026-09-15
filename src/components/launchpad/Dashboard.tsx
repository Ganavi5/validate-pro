import { motion } from "motion/react";
import { AlertTriangle, DollarSign, Gauge, Users } from "lucide-react";
import type { ValidationReport } from "@/lib/validation-data";
import { CountUp } from "./primitives";
import { RevenueChart } from "./RevenueChart";
import { CompetitorTable } from "./CompetitorTable";
import { MarketOpportunity } from "./MarketOpportunity";
import { RiskGauge } from "./RiskGauge";
import { SWOT } from "./SWOT";
import { Recommendations } from "./Recommendations";
import { DecisionCard } from "./DecisionCard";

export function Dashboard({ report }: { report: ValidationReport }) {
  const metrics = [
    {
      label: "Market Score",
      icon: Gauge,
      accent: "text-violet",
      node: <CountUp value={report.marketScore} suffix="/100" />,
    },
    {
      label: "Target Users",
      icon: Users,
      accent: "text-blue",
      node: <CountUp value={report.targetUsersValue} decimals={1} suffix="M" />,
    },
    {
      label: "Revenue Potential",
      icon: DollarSign,
      accent: "text-success",
      node: <CountUp value={report.revenuePotentialValue} prefix="$" suffix="K" />,
    },
    {
      label: "Risk Score",
      icon: AlertTriangle,
      accent: "text-warning",
      node: (
        <span>
          <CountUp value={report.riskScore} suffix="%" />
          <span className="ml-2 text-base font-normal text-muted-foreground">
            {report.riskLabel}
          </span>
        </span>
      ),
    },
  ];

  return (
    <motion.section
      id="dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-14 sm:px-8"
    >
      <div className="mb-8">
        <span className="glass inline-flex rounded-full px-3 py-1 text-xs tracking-widest text-muted-foreground uppercase">
          Founder dashboard
        </span>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Your validation <span className="text-gradient">report</span>
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">“{report.idea}”</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-strong hover-glow rounded-3xl p-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{m.label}</span>
              <m.icon className={`size-4 ${m.accent}`} />
            </div>
            <div className="font-display mt-6 text-3xl font-semibold">{m.node}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <RevenueChart data={report.revenue} />
        <RiskGauge
          risk={report.riskScore}
          label={report.riskLabel}
          recommendations={report.riskRecommendations}
        />
      </div>

      <div className="mt-6">
        <CompetitorTable competitors={report.competitors} />
      </div>

      <div className="mt-6">
        <MarketOpportunity market={report.market} />
      </div>

      <div className="mt-6">
        <SWOT swot={report.swot} />
      </div>

      <div className="mt-10">
        <Recommendations recommendations={report.recommendations} />
      </div>

      <div className="mt-10">
        <DecisionCard report={report} />
      </div>
    </motion.section>
  );
}
