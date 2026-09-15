/**
 * Shape of a validation report.
 *
 * This is intentionally a plain JSON contract so the same components can later
 * be populated from a Gemini (or any LLM) API response without changes:
 *   const report: ValidationReport = await fetchReportFromAI(idea)
 */

export interface Competitor {
  name: string;
  strength: string;
  weakness: string;
  marketGap: string;
  isYou?: boolean;
}

export interface Swot {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface Recommendation {
  title: string;
  icon: "users" | "map" | "megaphone";
  points: string[];
}

export interface MarketSizeTier {
  label: string;
  short: string;
  value: string;
  description: string;
  percent: number;
}

export interface RevenuePoint {
  month: string;
  revenue: number;
}

export interface ValidationReport {
  idea: string;
  marketScore: number;
  targetUsers: string;
  targetUsersValue: number;
  revenuePotential: string;
  revenuePotentialValue: number;
  riskScore: number;
  riskLabel: string;
  revenue: RevenuePoint[];
  competitors: Competitor[];
  market: MarketSizeTier[];
  riskRecommendations: string[];
  swot: Swot;
  recommendations: Recommendation[];
  decision: {
    verdict: string;
    summary: string;
    nextSteps: string[];
    timeline: string;
    biggestRisk: string;
  };
}

export const EXAMPLE_IDEA =
  "AI-powered fitness app for students that builds adaptive workout plans around class schedules and dorm-room equipment.";

export const sampleReport: ValidationReport = {
  idea: EXAMPLE_IDEA,
  marketScore: 86,
  targetUsers: "2.4M",
  targetUsersValue: 2.4,
  revenuePotential: "$250K",
  revenuePotentialValue: 250,
  riskScore: 34,
  riskLabel: "Moderate",
  revenue: [
    { month: "Month 1", revenue: 500 },
    { month: "Month 3", revenue: 4000 },
    { month: "Month 6", revenue: 22000 },
    { month: "Month 9", revenue: 75000 },
    { month: "Month 12", revenue: 250000 },
  ],
  competitors: [
    {
      name: "MyFitnessPal",
      strength: "Massive nutrition database and brand recall",
      weakness: "Cluttered UX, aggressive paywall",
      marketGap: "No schedule-aware coaching for students",
    },
    {
      name: "Fittr",
      strength: "Human coach marketplace with community",
      weakness: "Expensive for a student budget",
      marketGap: "Pricing under $8/month is unserved",
    },
    {
      name: "Nike Training Club",
      strength: "Premium content production quality",
      weakness: "Generic plans, zero personalisation",
      marketGap: "Adaptive plans around real calendars",
    },
    {
      name: "Your Startup",
      strength: "Calendar-aware adaptive AI plans, dorm-equipment aware",
      weakness: "No brand yet, cold-start content library",
      marketGap: "Owns the student niche end to end",
      isYou: true,
    },
  ],
  market: [
    {
      label: "Total Addressable Market",
      short: "TAM",
      value: "$18.4B",
      description: "Global digital fitness and wellness apps",
      percent: 100,
    },
    {
      label: "Serviceable Available Market",
      short: "SAM",
      value: "$2.1B",
      description: "Students in English-speaking markets",
      percent: 58,
    },
    {
      label: "Serviceable Obtainable Market",
      short: "SOM",
      value: "$46M",
      description: "Reachable via campus and creator channels in 3 years",
      percent: 30,
    },
  ],
  riskRecommendations: [
    "Validate pricing with a $6–9/month tier",
    "Interview early users on 3 campuses",
    "Build MVP before scaling paid acquisition",
  ],
  swot: {
    strengths: [
      "Sharp, underserved niche",
      "Low content production cost with AI",
      "Natural word-of-mouth inside campuses",
    ],
    weaknesses: [
      "Low willingness to pay among students",
      "No proprietary training data yet",
      "Solo founder bandwidth",
    ],
    opportunities: [
      "University wellness budgets and partnerships",
      "Campus ambassador distribution",
      "Wearable data integrations",
    ],
    threats: [
      "Incumbents shipping AI coaching",
      "Seasonal churn around exams",
      "App store discovery costs rising",
    ],
  },
  recommendations: [
    {
      title: "Customer Validation",
      icon: "users",
      points: [
        "Interview 20 students this week",
        "Test a $7/month price point",
        "Track drop-off reasons verbatim",
      ],
    },
    {
      title: "MVP Roadmap",
      icon: "map",
      points: [
        "Build the smallest valuable feature first",
        "One adaptive weekly plan generator",
        "Ship in 3 weeks, no account system",
      ],
    },
    {
      title: "Marketing",
      icon: "megaphone",
      points: [
        "Launch on Product Hunt",
        "Share in fitness and student subreddits",
        "Target campus clubs and societies",
      ],
    },
  ],
  decision: {
    verdict: "YES",
    summary:
      "Strong demand signals in an underserved niche with a credible 12-month path to meaningful revenue.",
    nextSteps: [
      "Build core feature",
      "Validate with 20 users",
      "Expected MVP timeline: 3 weeks",
      "Biggest risk: customer acquisition",
    ],
    timeline: "3 weeks",
    biggestRisk: "Customer acquisition",
  },
};
