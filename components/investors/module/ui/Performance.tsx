'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function PerformanceBreakdown() {
  const [selectedPeriod, setSelectedPeriod] = useState('1 Year');

  const data = [
    { month: 'Jan', euTech: 3, japanValues: -5, usMomentum: 1 },
    { month: 'Feb', euTech: 7, japanValues: -4, usMomentum: -3 },
    { month: 'Mar', euTech: 7, japanValues: -2, usMomentum: 0 },
    { month: 'Apr', euTech: 4, japanValues: -6, usMomentum: 0 },
    { month: 'May', euTech: 4, japanValues: -7, usMomentum: 0 },
    { month: 'Jun', euTech: 3, japanValues: -3, usMomentum: 2 },
    { month: 'Jul', euTech: 0, japanValues: -3, usMomentum: 2 },
    { month: 'Aug', euTech: 1, japanValues: -2, usMomentum: 5 },
    { month: 'Sep', euTech: 2, japanValues: -1, usMomentum: 4 },
    { month: 'Oct', euTech: 3, japanValues: -1, usMomentum: 1 },
    { month: 'Nov', euTech: 2, japanValues: -4, usMomentum: 3 },
    { month: 'Dec', euTech: 3, japanValues: -4, usMomentum: 2 }
  ];

  const periods = ['1 Year', '2 Year', '3 Year'];

  return (
   <div className="bg-[#1a1a1a] text-white p-3 sm:p-6 rounded-lg">
  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
    <h2 className="text-lg sm:text-xl font-semibold text-white">Performance Breakdown By Factor</h2>
    <div className="flex bg-[#2a2a2a] rounded-lg p-1 overflow-x-auto">
      {periods.map((period) => (
        <button
          key={period}
          onClick={() => setSelectedPeriod(period)}
          className={`px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm transition-all whitespace-nowrap ${
            selectedPeriod === period
              ? 'bg-white text-black font-medium'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {period}
        </button>
      ))}
    </div>
  </div>
  
  {/* Chart */}
  <div className="h-64 sm:h-96 mb-4 sm:mb-6">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 10, left: 5, bottom: 5 }}>
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#9ca3af', fontSize: 10 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#9ca3af', fontSize: 10 }}
          tickFormatter={(value) => `${value}%`}
          domain={[-8, 8]}
          tickCount={5}
        />
        <Line
          type="monotone"
          dataKey="euTech"
          stroke="#22c55e"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: '#22c55e' }}
        />
        <Line
          type="monotone"
          dataKey="japanValues"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: '#3b82f6' }}
        />
        <Line
          type="monotone"
          dataKey="usMomentum"
          stroke="#f97316"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: '#f97316' }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
  
  {/* Legend */}
  <div className="flex flex-wrap items-center gap-4 sm:gap-6">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#22c55e] rounded-full"></div>
      <span className="text-xs sm:text-sm text-gray-300">EU Tech</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3b82f6] rounded-full"></div>
      <span className="text-xs sm:text-sm text-gray-300">Japan Values</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#f97316] rounded-full"></div>
      <span className="text-xs sm:text-sm text-gray-300">US Momentum</span>
    </div>
  </div>
</div>

  );
}