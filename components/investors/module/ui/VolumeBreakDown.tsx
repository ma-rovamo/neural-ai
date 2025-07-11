"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface VolumeDataItem {
	month: string;
	value: number;
}

interface TimePeriod {
	label: string;
	value: string;
}

const VolumeBreakdownChart = () => {
	const [selectedPeriod, setSelectedPeriod] = useState("1 Year");

	const timePeriods: TimePeriod[] = [
		{ label: "1 Year", value: "1 Year" },
		{ label: "2 Year", value: "2 Year" },
		{ label: "3 Year", value: "3 Year" },
	];

	const volumeData: VolumeDataItem[] = [
		{ month: "Jan", value: 8.2 },
		{ month: "Feb", value: 5.5 },
		{ month: "Mar", value: 4.8 },
		{ month: "Apr", value: 6.8 },
		{ month: "May", value: -4.2 },
		{ month: "Jun", value: -7.1 },
		{ month: "Jul", value: -1.8 },
		{ month: "Aug", value: -5.4 },
		{ month: "Sept", value: 5.9 },
		{ month: "Oct", value: 1.2 },
		{ month: "Nov", value: 3.1 },
		{ month: "Dec", value: 5.3 },
	];

	const maxAbsValue = Math.max(
		...volumeData.map((item) => Math.abs(item.value))
	);
	const yAxisSteps = [8, 5, 2, 0, -2, -5, -8];

	const getBarHeight = (value: number) => {
		return (Math.abs(value) / maxAbsValue) * 120; // Fixed pixel height
	};

	return (
		<div className="bg-[#232323] rounded-2xl my-4 p-6">
			<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6 sm:mb-8">
				<div>
					<h2 className="text-base sm:text-lg font-medium text-foreground mb-1">
						Volume Breakdown By Factor
					</h2>
				</div>

				{/* Time Period Buttons */}
				<div className="flex gap-1 bg-muted rounded-md p-1">
					{timePeriods.map((period) => (
						<Button
							key={period.value}
							variant={selectedPeriod === period.value ? "default" : "ghost"}
							size="sm"
							onClick={() => setSelectedPeriod(period.value)}
							className="h-7 sm:h-8 px-2 sm:px-3 text-xs">
							{period.label}
						</Button>
					))}
				</div>
			</div>
			<Card className="p-4 sm:p-6 bg-card border-border">
				{/* Header */}

				{/* Chart Container */}
				<div className="relative">
					{/* Y-axis labels */}
					<div className="absolute left-0 top-0 bottom-12 w-6 sm:w-8 flex flex-col justify-between items-end pr-2 h-80">
						{yAxisSteps.map((step) => (
							<span key={step} className="text-xs text-muted-foreground">
								{step}%
							</span>
						))}
					</div>

					{/* Chart area */}
					<div className="ml-8 sm:ml-10 relative">
						<div className="relative h-80">
							{/* Zero line */}
							<div className="absolute w-full border-t-2 border-border top-1/2 transform -translate-y-1/2 z-10" />

							{/* Grid lines */}
							{[...Array(7)].map((_, i) => (
								<div
									key={i}
									className="absolute w-full border-t border-muted/30"
									style={{ top: `${(i / 6) * 100}%` }}
								/>
							))}

							{/* Bars Container */}
							<div className="flex justify-between items-center h-full relative">
								{volumeData.map((item, index) => {
									const barHeight = getBarHeight(item.value);
									const isPositive = item.value >= 0;

									return (
										<div
											key={item.month}
											className="flex flex-col items-center group relative h-full">
											{/* Bar */}
											<div className="relative h-full w-4 sm:w-6 flex items-center justify-center">
												<div
													className={`w-3 sm:w-4 rounded-sm animate-in slide-in-from-bottom-4 fade-in-0 duration-700 ease-out hover:opacity-80 absolute ${
														isPositive ? "bg-blue-500" : "bg-green-500"
													}`}
													style={{
														height: `${barHeight}px`,
														[isPositive ? "bottom" : "top"]: "50%",
														animationDelay: `${index * 100}ms`,
													}}
												/>
											</div>

											{/* Tooltip */}
											<div className="absolute -top-8 sm:-top-10 bg-popover text-popover-foreground text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity border shadow-md whitespace-nowrap z-20">
												{item.value > 0 ? "+" : ""}
												{item.value}%
											</div>
										</div>
									);
								})}
							</div>
						</div>

						{/* Month labels */}
						<div className="flex justify-between mt-4 px-1">
							{volumeData.map((item, index) => (
								<div
									key={item.month}
									className="flex-1 text-center animate-in fade-in-0 duration-500"
									style={{ animationDelay: `${index * 100 + 300}ms` }}>
									<span className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
										{item.month}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default VolumeBreakdownChart;
