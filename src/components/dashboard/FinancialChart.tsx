"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { month: "Mar", income: 6500, expense: 3900 },
  { month: "Abr", income: 7200, expense: 4100 },
  { month: "Mai", income: 5800, expense: 3700 },
  { month: "Jun", income: 8400, expense: 4300 },
  { month: "Jul", income: 7600, expense: 4500 },
  { month: "Ago", income: 9100, expense: 4700 }
];

export function FinancialChart() {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1c2430" />
          <XAxis dataKey="month" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip contentStyle={{ background: "#0d1117", border: "1px solid #1c2430", borderRadius: 12 }} />
          <Area type="monotone" dataKey="income" stroke="#60a5fa" fill="#60a5fa" fillOpacity={0.08} />
          <Area type="monotone" dataKey="expense" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.05} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
