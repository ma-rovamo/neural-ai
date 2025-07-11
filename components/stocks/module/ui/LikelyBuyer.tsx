'use client'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';
const buyerData = [
  { name: 'Morgan', buyers: 60, sellers: 40, rating: 4.2 },
  { name: 'William', buyers: 45, sellers: 55, rating: 3.8 },
  { name: 'Michael', buyers: 85, sellers: 25, rating: 4.8 },
  { name: 'Thomas', buyers: 35, sellers: 65, rating: 3.2 },
  { name: 'Grace', buyers: 70, sellers: 30, rating: 4.5 },
  { name: 'JP', buyers: 50, sellers: 50, rating: 4.0 },
];
const sellerData = [
  { name: 'Henry', buyers: 30, sellers: 70, rating: 4.1 },
  { name: 'Julia', buyers: 25, sellers: 75, rating: 3.9 },
  { name: 'RC', buyers: 40, sellers: 60, rating: 4.3 },
  { name: 'Chloe', buyers: 35, sellers: 65, rating: 3.7 },
  { name: 'NH', buyers: 45, sellers: 55, rating: 4.0 },
  { name: 'Scott', buyers: 20, sellers: 80, rating: 4.6 },
];
const LikelyBuyer = () => {
  return (
    <div className=" bg-[#232323] rounded-2xl my-5  p-6">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Likely Buyers Chart */}
          <Card className="bg-[#1a1a1a] border-gray-800">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium text-white">Likely Buyers</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>Similarity with you</span>
                  <span>Ratings</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={buyerData} barCategoryGap="20%">
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#9ca3af', fontSize: 12 }}
                    />
                    <YAxis 
                      domain={[0, 100]} 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#9ca3af', fontSize: 12 }}
                    />
                    <Bar dataKey="buyers" fill="#3b82f6" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="sellers" fill="#10b981" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Likely Sellers Chart */}
          <Card className="bg-[#1a1a1a] border-gray-800">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium text-white">Likely Sellers</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>Similarity with you</span>
                  <span>Ratings</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sellerData} barCategoryGap="20%">
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#9ca3af', fontSize: 12 }}
                    />
                    <YAxis 
                      domain={[0, 100]} 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#9ca3af', fontSize: 12 }}
                    />
                    <Bar dataKey="sellers" fill="#8b5cf6" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="buyers" fill="#10b981" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        </div>
  )
}

export default LikelyBuyer