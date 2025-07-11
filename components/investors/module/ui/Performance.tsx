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
    <div className="bg-[#1a1a1a] text-white p-6 rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-semibold text-white">Performance Breakdown By Factor</h2>
        <div className="flex bg-[#2a2a2a] rounded-lg p-1">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 rounded-md text-sm transition-all ${
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
      <div className="h-96 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              tickFormatter={(value) => `${value}%`}
              domain={[-8, 8]}
              ticks={[8, 5, 2, 0, -2, -5, -8]}
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
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#22c55e] rounded-full"></div>
          <span className="text-sm text-gray-300">EU Tech</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#3b82f6] rounded-full"></div>
          <span className="text-sm text-gray-300">Japan Values</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#f97316] rounded-full"></div>
          <span className="text-sm text-gray-300">US Momentum</span>
        </div>
      </div>

   
    </div>
  );
}