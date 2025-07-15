"use client";
import { Sparkles } from "lucide-react";
import {
	CartesianGrid,
	Line,
	LineChart,
	XAxis,
	YAxis,
	ResponsiveContainer,
	Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RankingCards from "./RankingCard";

export const description = "Your Dashboard Chart";

const chartData = [
	{ month: "Jan", market: 650, impact: 580 },
	{ month: "Feb", market: 720, impact: 750 },
	{ month: "Mar", market: 680, impact: 780 },
	{ month: "Apr", market: 780, impact: 620 },
	{ month: "May", market: 850, impact: 650 },
	{ month: "Jun", market: 800, impact: 600 },
	{ month: "Jul", market: 650, impact: 520 },
	{ month: "Aug", market: 580, impact: 350 },
	{ month: "Sep", market: 620, impact: 480 },
	{ month: "Oct", market: 550, impact: 520 },
	{ month: "Nov", market: 480, impact: 450 },
	{ month: "Dec", market: 520, impact: 480 },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
	if (active && payload && payload.length) {
		return (
			<div className="bg-[#171717] rounded-lg p-3 shadow-lg border border-[#2a2a2a]">
				<p className="text-xs text-gray-400 mb-1">{label}</p>
				{payload.map((entry: any, index: number) => (
					<p
						key={`tooltip-${index}`}
						className="text-sm font-semibold"
						style={{ color: entry.stroke }}>
						{entry.name}: ${entry.value}
					</p>
				))}
			</div>
		);
	}
	return null;
};

export function DashboardChart() {
	return (
	<div className="bg-[#232323] p-3 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#2a2a2a] shadow-lg my-4 sm:my-6">
    <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center">
            <h2 className="text-lg sm:text-2xl font-bold text-white">Your Dashboard</h2>
            <div className="ml-3 sm:ml-4 px-2 sm:px-3 py-1 bg-[#6366f1]/10 rounded-full"></div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-[#171717] rounded-full border border-[#2a2a2a]">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#6366f1] rounded-full"></div>
                <span className="text-xs sm:text-sm text-gray-300">Market</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-[#171717] rounded-full border border-[#2a2a2a]">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#10b981] rounded-full"></div>
                <span className="text-xs sm:text-sm text-gray-300">Impact</span>
            </div>
        </div>
    </div>
    <Card className="border-[#2a2a2a] bg-[#171717] overflow-hidden rounded-xl sm:rounded-2xl shadow-md">
        <CardContent className="p-2 sm:p-4 relative">
            <div className="h-60 sm:h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={chartData}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 5,
                            bottom: 10,
                        }}>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#2a2a2a"
                            vertical={false}
                        />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tick={{ fill: "#9ca3af", fontSize: 10 }}
                            interval="preserveStartEnd"
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tick={{ fill: "#9ca3af", fontSize: 10 }}
                            domain={[0, 1200]}
                            tickCount={5}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Line
                            name="Market"
                            dataKey="market"
                            type="monotone"
                            stroke="#6366f1"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{
                                r: 4,
                                fill: "#171717",
                                stroke: "#6366f1",
                                strokeWidth: 2,
                            }}
                        />
                        <Line
                            name="Impact"
                            dataKey="impact"
                            type="monotone"
                            stroke="#10b981"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{
                                r: 4,
                                fill: "#171717",
                                stroke: "#10b981",
                                strokeWidth: 2,
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </CardContent>
    </Card>
    <div className="my-4 sm:my-5">
        <RankingCards />
    </div>
</div>

	);
}
