'use client'
import { Card } from "@/components/ui/card";
import { Info, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

// Circular Progress Component with animation
function CircularProgress({ percentage, color, size = 80, delay = 0 }: any) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [percentage, delay]);

  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#2a2a2a"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
          style={{
            transitionDelay: `${delay}ms`
          }}
        />
      </svg>
    </div>
  );
}

// Progress Bar Component with animation
function ProgressBar({ percentage, color = "#6366f1", delay = 0 }: any) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="w-full bg-[#2a2a2a] rounded-full h-2">
      <div
        className="h-2 rounded-full transition-all duration-1000 ease-out"
        style={{
          width: `${animatedPercentage}%`,
          backgroundColor: color,
          transitionDelay: `${delay}ms`
        }}
      />
    </div>
  );
}

export default function DashboardBreakdown() {
  const volumeData = [
    { label: "Size", percentage: 20, color: "#10b981" },
    { label: "Momentum", percentage: 50, color: "#8b5cf6" },
    { label: "Risk", percentage: 15, color: "#f59e0b" },
  ];

  const sectorsData = [
    { name: "Technology", percentage: 67 },
    { name: "Financials", percentage: 83 },
    { name: "Healthcare", percentage: 21 },
    { name: "Industrial", percentage: 45 },
    { name: "Energy", percentage: 89 },
    { name: "Real Estate", percentage: 56 },
    { name: "Utility", percentage: 95 },
    { name: "Materials", percentage: 24 },
  ];

  return (
    <div className="bg-[#232323] p-6 rounded-3xl border border-[#2a2a2a] shadow-lg my-6">
      
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Volume Breakdown by Factor */}
        <div>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">Volume Breakdown by Factor</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Show:</span>
                <button className="flex items-center gap-1 text-sm text-white bg-[#2a2a2a] px-3 py-1 rounded">
                  1 Week
                  <ChevronDown className="h-3 w-3" />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-400">2023 - 2024</p>
          </div>
          
          <Card className="bg-[#171717] border-[#2a2a2a] p-6 rounded-xl">
            <div className="grid grid-cols-3 gap-8 mb-6">
              {volumeData.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <CircularProgress
                      percentage={item.percentage}
                      color={item.color}
                      size={80}
                      delay={index * 200}
                    />
                  </div>
                  <div className="text-xl font-bold text-white mb-1">{item.percentage}%</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-[#0f1419] border border-[#2a2a2a] rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Info className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300 leading-relaxed">
                  Always conduct thorough research or consult a licensed financial advisor before
                  making buy or sell decisions. Past performance is not indicative of future results.
                  Invest wisely and only with funds you can afford to lose.
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Top 8 Sectors */}
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white">Top 8 Sectors</h3>
            <p className="text-sm text-gray-400">2023 - 2024</p>
          </div>
          
          <Card className="bg-[#171717] border-[#2a2a2a] p-6 rounded-xl">
            <div className="space-y-4">
              {sectorsData.map((sector, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <span className="text-sm text-white w-20">{sector.name}</span>
                    <div className="flex-1">
                      <ProgressBar
                        percentage={sector.percentage}
                        delay={index * 100}
                      />
                    </div>
                  </div>
                  <span className="text-sm text-white font-medium w-10 text-right">
                    {sector.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
