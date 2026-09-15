import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { RevenuePoint } from "@/lib/validation-data";

export function RevenueChart({ data }: { data: RevenuePoint[] }) {
  return (
    <div className="glass-strong rounded-4xl p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h3 className="font-display text-lg font-semibold">Revenue forecast</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Simulated 12-month trajectory at current assumptions.
          </p>
        </div>
        <span className="font-display text-2xl font-semibold text-gradient">
          ${data[data.length - 1]?.revenue.toLocaleString()}
        </span>
      </div>

      <div className="mt-8 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: 4, right: 8, top: 8, bottom: 0 }}>
            <defs>
              <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-violet)" stopOpacity={0.45} />
                <stop offset="100%" stopColor="var(--color-violet)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="revStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--color-blue)" />
                <stop offset="100%" stopColor="var(--color-violet)" />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="var(--color-border)" strokeDasharray="4 6" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              width={58}
              tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
              tickFormatter={(v: number) => (v >= 1000 ? `$${v / 1000}k` : `$${v}`)}
            />
            <Tooltip
              cursor={{ stroke: "var(--color-violet)", strokeDasharray: "4 4" }}
              contentStyle={{
                background: "var(--color-popover)",
                border: "1px solid var(--color-border)",
                borderRadius: 16,
                color: "var(--color-foreground)",
              }}
              formatter={(v: number) => [`$${v.toLocaleString()}`, "Revenue"]}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="url(#revStroke)"
              strokeWidth={3}
              fill="url(#revFill)"
              dot={{ r: 4, fill: "var(--color-violet)", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
