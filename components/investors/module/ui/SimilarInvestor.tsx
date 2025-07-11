'use client'
import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

interface FundCard {
  id: string;
  name: string;
  subName: string;
  status: 'STRONG' | 'WEAK' | 'MILD';
  holdings: number;
  color: string;
}

const fundCards: FundCard[] = [
  {
    id: '1',
    name: 'JP Morgan',
    subName: 'BNY Mellon Asset Management',
    status: 'STRONG',
    holdings: 380,
    color: 'orange'
  },
  {
    id: '2',
    name: 'JP Morgan',
    subName: 'BNY Mellon Asset Management',
    status: 'WEAK',
    holdings: 124,
    color: 'green'
  },
  {
    id: '3',
    name: 'JP Morgan',
    subName: 'BNY Mellon Asset Management',
    status: 'MILD',
    holdings: 250,
    color: 'blue'
  },
  {
    id: '4',
    name: 'JP Morgan',
    subName: 'BNY Mellon Asset Management',
    status: 'WEAK',
    holdings: 65,
    color: 'green'
  }
];

const SimilarInvestor = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('In This Year');

  const CircularProgress = ({ status, color }: { status: string; color: string }) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);

    const getStrokeColor = () => {
      switch (color) {
        case 'orange': return '#ff6b35';
        case 'green': return '#00d4aa';
        case 'blue': return '#4a90e2';
        default: return '#ff6b35';
      }
    };

    const getProgress = () => {
      switch (status) {
        case 'STRONG': return 75;
        case 'WEAK': return 30;
        case 'MILD': return 50;
        default: return 50;
      }
    };

    const targetProgress = getProgress();
    const radius = 30;
    const circumference = 2 * Math.PI * radius;

    // Animate progress on mount
    useEffect(() => {
      const timer = setTimeout(() => {
        setAnimatedProgress(targetProgress);
      }, 100);
      return () => clearTimeout(timer);
    }, [targetProgress]);

    const strokeDashoffset = circumference - (animatedProgress / 100) * circumference;

    return (
      <div className="relative w-16 h-16 flex items-center justify-center group">
        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 70 70">
          {/* Background circle */}
          <circle
            cx="35"
            cy="35"
            r={radius}
            stroke="#333"
            strokeWidth="4"
            fill="none"
            className="opacity-30"
          />
          {/* Animated progress circle */}
          <circle
            cx="35"
            cy="35"
            r={radius}
            stroke={getStrokeColor()}
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1500 ease-out"
            style={{
              filter: `drop-shadow(0 0 6px ${getStrokeColor()}40)`
            }}
          />
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-semibold text-white group-hover:scale-110 transition-transform duration-200">
            {status}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4 bg-[#232323] rounded-2xl p-4 mb-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-white">Similar Investors</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Show:</span>
          <div className="relative">
            <select
              className="bg-transparent border-none text-white text-sm appearance-none pr-6 cursor-pointer focus:outline-none"
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
            >
              <option value="In This Year" className="bg-[#2a2a2a]">In This Year</option>
              <option value="Last 6 Months" className="bg-[#2a2a2a]">Last 6 Months</option>
              <option value="Last 3 Months" className="bg-[#2a2a2a]">Last 3 Months</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {fundCards.map((fund:FundCard) => (
          <Card key={fund.id} className="bg-[#171717]  rounded-lg hover:bg-[#333] transition-all duration-300 hover:scale-105">
            <CardContent className="p-4">
              <div className="text-center space-y-3">
                {/* Fund Info */}
                <div>
                  <h3 className="font-medium text-white text-sm">{fund.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">{fund.subName}</p>
                </div>

                {/* Progress Circle */}
                <div className="flex justify-center">
                  <CircularProgress status={fund.status} color={fund.color} />
                </div>

                {/* Holdings */}
                <div>
                  <p className="text-xs text-gray-400">No. of Holdings</p>
                  <p className="text-lg font-bold text-white mt-1">{fund.holdings}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SimilarInvestor;
