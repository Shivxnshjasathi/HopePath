"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { month: "Jan", daysSober: 18, urgesResisted: 12 },
  { month: "Feb", daysSober: 25, urgesResisted: 19 },
  { month: "Mar", daysSober: 28, urgesResisted: 22 },
  { month: "Apr", daysSober: 30, urgesResisted: 27 },
  { month: "May", daysSober: 27, urgesResisted: 23 },
  { month: "Jun", daysSober: 31, urgesResisted: 29 },
]

const chartConfig = {
    daysSober: {
      label: "Days Sober",
      color: "hsl(var(--chart-1))",
    },
    urgesResisted: {
      label: "Urges Resisted",
      color: "hsl(var(--chart-2))",
    },
  }

export function ProgressChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
            <XAxis dataKey="month" tickLine={false} axisLine={false} stroke="#888888" fontSize={12} />
            <YAxis tickLine={false} axisLine={false} stroke="#888888" fontSize={12} />
            <Tooltip cursor={false} content={<ChartTooltipContent />} />
            <Legend />
            <Bar dataKey="daysSober" fill="var(--color-daysSober)" radius={4} />
            <Bar dataKey="urgesResisted" fill="var(--color-urgesResisted)" radius={4} />
        </BarChart>
        </ResponsiveContainer>
    </ChartContainer>
  )
}
