"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';
import { TrendingUp, TrendingDown, Plus, MoreHorizontal, Star } from 'lucide-react';

const stockData = [
  { 
    name: 'Amazon', 
    symbol: 'AMZN', 
    price: 3247.15, 
    change: 2.4, 
    color: 'orange', 
    daysToTrade: 10,
    rating: 4.5,
    chartData: [
      { value: 45 }, { value: 52 }, { value: 48 }, { value: 61 }, 
      { value: 55 }, { value: 67 }, { value: 43 }, { value: 58 }
    ]
  },
  { 
    name: 'Tesla', 
    symbol: 'TSLA', 
    price: 1234.56, 
    change: 4.2, 
    color: 'blue', 
    daysToTrade: 16,
    rating: 4.2,
    chartData: [
      { value: 35 }, { value: 42 }, { value: 58 }, { value: 51 }, 
      { value: 65 }, { value: 47 }, { value: 53 }, { value: 68 }
    ]
  },
  { 
    name: 'Microsoft', 
    symbol: 'MSFT', 
    price: 423.18, 
    change: -1.2, 
    color: 'green', 
    daysToTrade: 8,
    rating: 4.8,
    chartData: [
      { value: 55 }, { value: 48 }, { value: 62 }, { value: 41 }, 
      { value: 57 }, { value: 63 }, { value: 49 }, { value: 58 }
    ]
  },
  { 
    name: 'PayPal', 
    symbol: 'PYPL', 
    price: 187.92, 
    change: -3.1, 
    color: 'red', 
    daysToTrade: 12,
    rating: 3.9,
    chartData: [
      { value: 65 }, { value: 52 }, { value: 48 }, { value: 41 }, 
      { value: 35 }, { value: 47 }, { value: 43 }, { value: 38 }
    ]
  },
];


export default function SimilarStocks() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div className=" bg-[#232323] rounded-2xl  p-6">
      <div className=" mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium text-gray-300">Similar Stocks</h1>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Stock Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stockData.map((stock) => (
            <Card key={stock.symbol} className="bg-[#1a1a1a] border-gray-800 hover:bg-[#222] transition-all duration-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      stock.color === 'orange' ? 'bg-orange-500' :
                      stock.color === 'blue' ? 'bg-blue-500' :
                      stock.color === 'green' ? 'bg-green-500' :
                      'bg-red-500'
                    }`} />
                    <span className="text-sm font-medium text-white">{stock.name}</span>
                  </div>
                </div>
                
                <div className="text-lg font-semibold text-white mb-1">
                  ${stock.price.toLocaleString()}
                </div>
                
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1">
                    {stock.change > 0 ? (
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500" />
                    )}
                    <span className={`text-xs font-medium ${stock.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {stock.change > 0 ? '+' : ''}{stock.change}%
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(stock.rating)}
                  </div>
                </div>

                <div className="h-12 mb-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={stock.chartData}>
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke={
                          stock.color === 'orange' ? '#f97316' :
                          stock.color === 'blue' ? '#3b82f6' :
                          stock.color === 'green' ? '#10b981' :
                          '#ef4444'
                        }
                        fill={
                          stock.color === 'orange' ? '#f97316' :
                          stock.color === 'blue' ? '#3b82f6' :
                          stock.color === 'green' ? '#10b981' :
                          '#ef4444'
                        }
                        fillOpacity={0.1}
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                
                <Badge 
                  variant="outline" 
                  className={`text-xs border ${
                    stock.color === 'orange' ? 'border-orange-500 text-orange-500' :
                    stock.color === 'blue' ? 'border-blue-500 text-blue-500' :
                    stock.color === 'green' ? 'border-green-500 text-green-500' :
                    'border-red-500 text-red-500'
                  } bg-transparent`}
                >
                  {stock.daysToTrade} Days to Trade
                </Badge>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Add Stock Button */}
        <Button variant="outline" className=" border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white bg-transparent">
          <Plus className="h-4 w-4 mr-2" />
          Add another stock
        </Button>


      </div>
    </div>
  );
}