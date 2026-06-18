"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { CaseChartPoint } from "@/lib/cases-data";

const COLORS = {
  turquoise: "#12C6C2",
  blueMedium: "#0B4D85",
  blueDeep: "#052B50",
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

type CasePerformanceChartProps = {
  data: CaseChartPoint[];
};

export function CasePerformanceChart({ data }: CasePerformanceChartProps) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="receitaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={COLORS.turquoise} stopOpacity={0.35} />
              <stop offset="95%" stopColor={COLORS.turquoise} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E7ECF2" />
          <XAxis dataKey="month" tick={{ fill: "#4A5568", fontSize: 12 }} />
          <YAxis
            tick={{ fill: "#4A5568", fontSize: 12 }}
            tickFormatter={(v) => `${v / 1000}k`}
          />
          <Tooltip
            formatter={(value: number, name: string) => {
              if (name === "leads") return [value, "Leads"];
              return [formatCurrency(value), name === "receita" ? "Receita" : "Investimento"];
            }}
            contentStyle={{
              borderRadius: 8,
              border: "1px solid #E7ECF2",
              fontSize: 13,
            }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="receita"
            name="Receita"
            stroke={COLORS.turquoise}
            fill="url(#receitaGradient)"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="investimento"
            name="Investimento"
            stroke={COLORS.blueMedium}
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CaseLeadsChart({ data }: CasePerformanceChartProps) {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E7ECF2" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: "#4A5568", fontSize: 12 }} />
          <YAxis tick={{ fill: "#4A5568", fontSize: 12 }} />
          <Tooltip
            formatter={(value: number) => [value, "Leads"]}
            contentStyle={{
              borderRadius: 8,
              border: "1px solid #E7ECF2",
              fontSize: 13,
            }}
          />
          <Bar dataKey="leads" name="Leads" fill={COLORS.blueDeep} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

type AggregateChartProps = {
  data: { name: string; roas: number; leads: number }[];
};

export function AggregateResultsChart({ data }: AggregateChartProps) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E7ECF2" />
          <XAxis dataKey="name" tick={{ fill: "#4A5568", fontSize: 12 }} />
          <YAxis yAxisId="left" tick={{ fill: "#4A5568", fontSize: 12 }} />
          <YAxis yAxisId="right" orientation="right" tick={{ fill: "#4A5568", fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              borderRadius: 8,
              border: "1px solid #E7ECF2",
              fontSize: 13,
            }}
          />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="roas"
            name="ROAS médio"
            stroke={COLORS.turquoise}
            strokeWidth={3}
            dot={{ r: 5, fill: COLORS.turquoise }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="leads"
            name="Leads gerados"
            stroke={COLORS.blueMedium}
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
