'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export default function InvestorLink() {
  const CircularProgress = ({ percentage, color, size = 80 }: { percentage: number; color: string; size?: number }) => {
    const radius = (size - 8) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative bg-[#232323] inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-gray-700"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-300 ease-in-out"
          />
        </svg>
      </div>
    );
  };

  const StatCard = ({ title, value, subtitle }: { title: string; value: string; subtitle?: string }) => (
    <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
      <CardContent className="p-6">
        <div className="text-2xl font-bold text-white mb-1">{value}</div>
        <div className="text-sm text-gray-400">{title}</div>
        {subtitle && <div className="text-xs text-gray-500 mt-1">{subtitle}</div>}
      </CardContent>
    </Card>
  );

  const FundCard = ({ 
    title, 
    subtitle, 
    rating, 
    holdings, 
    color,
    percentage 
  }: {
    title: string;
    subtitle: string;
    rating: string;
    holdings: number;
    color: string;
    percentage: number;
  }) => (
    <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105">
      <CardContent className="p-6">
        <div className="text-white font-semibold mb-2">{title}</div>
        <div className="text-sm text-gray-400 mb-4">{subtitle}</div>
        
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            <CircularProgress percentage={percentage} color={color} size={100} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Badge 
                variant="secondary" 
                className={`text-xs font-bold px-2 py-1 ${
                  rating === 'STRONG' ? 'bg-orange-500 text-white' :
                  rating === 'WEAK' ? 'bg-green-500 text-white' :
                  rating === 'MILD' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'
                }`}
              >
                {rating}
              </Badge>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="text-sm text-gray-400">No. of Holdings</div>
          <div className="text-xl font-bold text-white">{holdings}</div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">JP Morgan Asset Management</h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-500">Last Updated: 2 July 2024</span>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            List of funds
          </Button>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Predictability Card */}
          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">High</div>
                  <div className="text-sm text-gray-400">Predictability</div>
                </div>
                <CircularProgress percentage={75} color="#f97316" size={60} />
              </div>
            </CardContent>
          </Card>

          <StatCard 
            title="Total Market Share"
            value="$123.7K"
          />

          <StatCard 
            title="Turn Over"
            value="8%"
          />

          <StatCard 
            title="No. of Holdings"
            value="2581"
          />
        </div>

        {/* Similar Investors */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Similar Investors</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Show:</span>
              <Select defaultValue="in-this-year">
                <SelectTrigger className="w-32 bg-gray-800 border-gray-700 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="in-this-year" className="text-white">In This Year</SelectItem>
                  <SelectItem value="last-year" className="text-white">Last Year</SelectItem>
                  <SelectItem value="all-time" className="text-white">All Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FundCard
              title="JP Morgan"
              subtitle="BNY Mellon Asset Management"
              rating="STRONG"
              holdings={390}
              color="#f97316"
              percentage={85}
            />
            
            <FundCard
              title="JP Morgan"
              subtitle="BNY Mellon Asset Management"
              rating="WEAK"
              holdings={124}
              color="#10b981"
              percentage={35}
            />
            
            <FundCard
              title="JP Morgan"
              subtitle="BNY Mellon Asset Management"
              rating="MILD"
              holdings={360}
              color="#3b82f6"
              percentage={60}
            />
            
            <FundCard
              title="JP Morgan"
              subtitle="BNY Mellon Asset Management"
              rating="WEAK"
              holdings={68}
              color="#10b981"
              percentage={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
}