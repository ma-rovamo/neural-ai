import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  subtitle?: string;
}

export function MetricCard({
  title,
  value,
  change,
  changeType,
  subtitle,
}: MetricCardProps) {
  const isPositive = changeType === "positive";

  return (
    <Card className="bg-[#171717]  p-6 rounded-2xl shadow-sm">
      <div className="space-y-4 text-center">
        <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
          {title}
        </p>
        <h3 className="text-2xl font-bold text-white">{value}</h3>
        {subtitle && (
          <p className="text-xs text-gray-500">{subtitle}</p>
        )}
        <div className="flex items-center justify-center gap-1">
          {isPositive ? (
            <ArrowUp className="w-3 h-3 text-green-500" />
          ) : (
            <ArrowDown className="w-3 h-3 text-red-500" />
          )}
          <span
            className={cn(
              "text-xs font-medium",
              isPositive ? "text-green-500" : "text-red-500"
            )}
          >
            {change}
          </span>
        </div>
      </div>
    </Card>
  );
}

// Main component
export default function EuropeanSmallCupsSection() {
  return (
    <section className="bg-[#232323] p-6 rounded-2xl border border-[#2a2a2a]">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">European Small Cups</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Market Value"
          value="$21.2K"
          change="105.23%"
          changeType="positive"
          subtitle="($15.8k last month)"
        />
        <MetricCard
          title="Total Potential Pressure"
          value="$375.4K"
          change="20.15%"
          changeType="negative"
          subtitle="($643.7K last month)"
        />
        <MetricCard
          title="Days to Trade"
          value="20"
          change="15.20%"
          changeType="positive"
          subtitle="(16 last month)"
        />
        <MetricCard
          title="Potential Market Impact"
          value="78%"
          change="46%"
          changeType="positive"
          subtitle="(32% last month)"
        />
      </div>
    </section>
  );
}