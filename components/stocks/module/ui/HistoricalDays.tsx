'use client'

import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { 
  BarChart as ShadcnBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

type MonthData = {
  month: string;
  usa: number;
  china: number;
  germany: number;
};

const monthlyData: MonthData[] = [
  { month: "Jan", usa: 80, china: 60, germany: 45 },
  { month: "Feb", usa: 65, china: 40, germany: 30 },
  { month: "Mar", usa: 90, china: 70, germany: 35 },
  { month: "Apr", usa: 75, china: 85, germany: 55 },
  { month: "May", usa: 85, china: 50, germany: 40 },
  { month: "Jun", usa: 70, china: 65, germany: 45 },
  { month: "Jul", usa: 95, china: 75, germany: 60 },
  { month: "Aug", usa: 88, china: 80, germany: 50 },
  { month: "Sep", usa: 82, china: 45, germany: 35 },
  { month: "Oct", usa: 78, china: 55, germany: 40 },
  { month: "Nov", usa: 72, china: 70, germany: 45 },
  { month: "Dec", usa: 85, china: 65, germany: 50 }
];

function CircularProgress({ percentage, label, color }: { percentage: number; label: string; color: string }) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [animatedValue, setAnimatedValue] = useState(0);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 500);

    // Animate the percentage number
    const duration = 1500;
    const steps = 60;
    const stepValue = percentage / steps;
    let currentStep = 0;
    const numberTimer = setInterval(() => {
      currentStep++;
      setAnimatedValue(Math.min(Math.round(currentStep * stepValue), percentage));
      
      if (currentStep >= steps) {
        clearInterval(numberTimer);
      }
    }, duration / steps);

    return () => {
      clearTimeout(timer);
      clearInterval(numberTimer);
    };
  }, [percentage]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="text-gray-700"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={color}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
        </svg>
      </div>
      <div className="text-center mt-2">
        <div className="text-2xl font-bold text-white">{animatedValue}%</div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </div>
  );
}

function VerticalBarChart() {
  const [chartData, setChartData] = useState<MonthData[]>([]);
  
  useEffect(() => {
    // Animate the data loading
    const timer = setTimeout(() => {
      setChartData(monthlyData);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#2a2a2a] p-3 rounded-md border border-gray-700 shadow-lg">
          <p className="text-white font-medium">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
   <div className="bg-[#171717] rounded-lg p-3 sm:p-6 flex-1 border border-gray-800">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
    <h2 className="text-lg sm:text-xl font-semibold text-white">Historical Days to Trade</h2>
    <div className="flex items-center gap-2">
      <span className="text-xs sm:text-sm text-gray-400">Show:</span>
      <div className="flex items-center gap-1 bg-[#2a2a2a] rounded-lg px-2 sm:px-3 py-1 cursor-pointer hover:bg-[#333333] transition-colors">
        <span className="text-xs sm:text-sm text-white">In This Year</span>
        <ChevronDown size={16} className="text-gray-400" />
      </div>
    </div>
  </div>
       
  <div className="h-60 sm:h-[350px] w-full">
    <ResponsiveContainer width="100%" height="100%">
      <ShadcnBarChart
        data={chartData}
        margin={{ top: 10, right: 10, left: 5, bottom: 10 }}
        barGap={2}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
        <XAxis
          dataKey="month"
          axisLine={{ stroke: '#444' }}
          tickLine={false}
          tick={{ fill: '#999', fontSize: 10 }}
        />
        <YAxis
          axisLine={{ stroke: '#444' }}
          tickLine={false}
          tick={{ fill: '#999', fontSize: 10 }}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: 'rgba(50, 50, 50, 0.2)' }}
        />
        <Legend
          wrapperStyle={{ paddingTop: 15 }}
          iconType="circle"
          formatter={(value) => <span className="text-gray-300">{value}</span>}
        />
        <Bar
          dataKey="usa"
          name="USA"
          fill="#10b981"
          radius={[4, 4, 0, 0]}
          animationDuration={1500}
          animationEasing="ease-out"
        />
        <Bar
          dataKey="china"
          name="China"
          fill="#a855f7"
          radius={[4, 4, 0, 0]}
          animationDuration={1500}
          animationEasing="ease-out"
          animationBegin={300}
        />
        <Bar
          dataKey="germany"
          name="Germany"
          fill="#3b82f6"
          radius={[4, 4, 0, 0]}
          animationDuration={1500}
          animationEasing="ease-out"
          animationBegin={600}
        />
      </ShadcnBarChart>
    </ResponsiveContainer>
  </div>
</div>

  );
}

export default function HistoricalDaysChart() {
  return (
    <div className="bg-[#232323] rounded-2xl my-5  p-6">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          <VerticalBarChart />
          
          <div className="flex flex-row lg:flex-col gap-4">
            <Card className="bg-[#171717] border-gray-800 p-6 flex-1">
              <CardContent className="p-0">
                <CircularProgress percentage={75} label="Target" color="text-green-400" />
              </CardContent>
            </Card>
            
            <Card className="bg-[#171717] border-gray-800 p-6 flex-1">
              <CardContent className="p-0 relative">
                <CircularProgress percentage={50} label="Achieved" color="text-purple-400" />
               
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
