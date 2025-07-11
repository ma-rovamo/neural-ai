'use client'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';

const performanceData = [
  { region: 'Europe', value: 2.5 },
  { region: 'North America', value: 3.5 },
  { region: 'Asia', value: 2.6 },
  { region: 'Latin America', value: 2.8 },
  { region: 'Australia', value: 2.9 },
];

const volumeData = [
  { region: 'Europe', value: 2.9 },
  { region: 'North America', value: 3.6 },
  { region: 'Asia Pacific', value: 1.8 },
  { region: 'Latin America', value: 2.5 },
  { region: 'Australia', value: 2.4 },
];
const PerformanceChart = () => {
  return (
      <div className=" bg-[#232323] rounded-2xl my-5  p-6">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance Breakdown */}
          <Card className="bg-[#1a1a1a] border-gray-800">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-medium text-white">Performance Breakdown</CardTitle>
              <div className="text-sm text-gray-400">By Factor</div>
            </CardHeader>
            <CardContent>
              <div className="h-48 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <XAxis 
                      dataKey="region" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#9ca3af', fontSize: 11 }}
                    />
                    <YAxis 
                      domain={[0, 4]} 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#9ca3af', fontSize: 11 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#8b5cf6" 
                      strokeWidth={3}
                      dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">2.5</div>
                  <div className="text-xs text-gray-400">Europe</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-orange-500">3.5</div>
                  <div className="text-xs text-gray-400">North America</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">2.6</div>
                  <div className="text-xs text-gray-400">Asia</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">2.8</div>
                  <div className="text-xs text-gray-400">Latin America</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">2.9</div>
                  <div className="text-xs text-gray-400">Australia</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Volume Breakdown */}
          <Card className="bg-[#1a1a1a] border-gray-800">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-medium text-white">Volume Breakdown</CardTitle>
              <div className="text-sm text-gray-400">By Factor</div>
            </CardHeader>
            <CardContent>
              <div className="h-48 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={volumeData}>
                    <XAxis 
                      dataKey="region" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#9ca3af', fontSize: 11 }}
                    />
                    <YAxis 
                      domain={[0, 4]} 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#9ca3af', fontSize: 11 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#10b981" 
                      strokeWidth={3}
                      dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">2.9</div>
                  <div className="text-xs text-gray-400">Europe</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-orange-500">3.6</div>
                  <div className="text-xs text-gray-400">North America</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-red-500">1.8</div>
                  <div className="text-xs text-gray-400">Asia Pacific</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">2.5</div>
                  <div className="text-xs text-gray-400">Latin America</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">2.4</div>
                  <div className="text-xs text-gray-400">Australia</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        </div>
  )
}

export default PerformanceChart