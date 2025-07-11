'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function InvestorLink() {
  const CircularProgress = ({ percentage, color }: { percentage: number; color: string }) => {
    const size = 50;
    const strokeWidth = 4;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <svg width={size} height={size} className="rotate-[-90deg]">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#333"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
    );
  };

  return (
  <div className="bg-[#232323] rounded-2xl mb-4 text-white">
      <div className="px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">

          {/* Left Section */}
          <div className="space-y-2">
            <h1 className="text-base sm:text-lg font-semibold">
              JP Morgan Asset Management
            </h1>
            <div className="flex items-center text-xs sm:text-sm text-green-500">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2" />
              Last Updated: 2 July 2024
            </div>
            <Button className="mt-2 bg-[#0066FF] hover:bg-[#005ce0] text-white text-xs sm:text-sm rounded-md h-8 px-4">
              List of funds
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full lg:w-auto">
            {/* Predictability (Circle First) */}
            <Card className="bg-[#121212] border-none rounded-md hover:bg-[#1a1a1a] transition-colors">
              <CardContent className=" flex items-center gap-3">
                <div className="flex-shrink-0">
                  <CircularProgress percentage={75} color="#DE350B"   />
                </div>
                <div>
                  <div className="text-xl font-semibold">High</div>
                  <div className="text-xs text-gray-400">Predictability</div>
                </div>
              </CardContent>
            </Card>

            {/* Market Share */}
            <Card className="bg-[#121212] border-none rounded-md hover:bg-[#1a1a1a] transition-colors">
              <CardContent >
                <div className="text-xl text-center font-semibold">$123.7K</div>
                <div className="text-xs text-center text-gray-400">Total Market Share</div>
              </CardContent>
            </Card>

            {/* Turn Over */}
            <Card className="bg-[#121212] border-none rounded-md hover:bg-[#1a1a1a] transition-colors">
              <CardContent >
                <div className="text-xl text-center font-semibold">8%</div>
                <div className="text-xs text-center text-gray-400">Turn Over</div>
              </CardContent>
            </Card>

            {/* Holdings */}
            <Card className="bg-[#121212] border-none rounded-md hover:bg-[#1a1a1a] transition-colors">
              <CardContent >
                <div className="text-xl text-center font-semibold">2,581</div>
                <div className="text-xs text-center text-gray-400">No. of Holdings</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>


  );
}
