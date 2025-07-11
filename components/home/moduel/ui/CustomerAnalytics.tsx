'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const countries = [
  { rank: 1, name: 'United States', customers: '12.8K', flag: '🇺🇸', color: 'bg-blue-500' },
  { rank: 2, name: 'China', customers: '5.3K', flag: '🇨🇳', color: 'bg-red-500' },
  { rank: 3, name: 'Turkey', customers: '2.7K', flag: '🇹🇷', color: 'bg-purple-700' },
  { rank: 4, name: 'Brasil', customers: '1.0K', flag: '🇧🇷', color: 'bg-yellow-600' }
];

const CustomerAnalytics = () => {
  return (
    <div className="bg-[#232323] p-4 rounded-3xl border border-[#2a2a2a] shadow-lg">
      <div className="bg-[#171717] p-2 rounded-2xl border border-[#2a2a2a] shadow-lg flex flex-col lg:flex-row gap-6 lg:gap-8 my-6">
        {/* Left: Card */}
        <div className="w-full lg:max-w-md">
          <Card className="bg-[#171717] border-none shadow-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-xl font-semibold">
                Top 4 Countries
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Total Customers */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-4xl font-bold text-white">21.2K</span>
                  <div className="flex items-center text-green-400 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>105.23 %</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">Our customers</p>
              </div>

              {/* Countries List */}
              <div className="space-y-3">
                {countries.map((country) => (
                  <div
                    key={country.rank}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      country.rank === 1
                        ? 'bg-blue-900/30'
                        : country.rank === 2
                        ? 'bg-red-900/30'
                        : country.rank === 3
                        ? 'bg-purple-900/30'
                        : 'bg-yellow-900/30'
                    }`}
                  >
                    <span className="text-gray-400 text-sm font-medium w-4">
                      {country.rank}.
                    </span>
                    <div className="flex items-center gap-2 flex-1">
                      <div
                        className={`w-6 h-6 rounded-full ${country.color} flex items-center justify-center text-xs`}
                      >
                        {country.flag}
                      </div>
                      <span className="text-white font-medium">{country.name}</span>
                    </div>
                    <span className="text-gray-300 font-semibold">{country.customers}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right: Map */}
        <div className="w-full flex items-center justify-center relative">
          <img
            src="/image.png"
            alt="World Map"
            className="w-full h-[300px] md:h-[400px] object-contain "
          />
        
        
        </div>
      </div>
    </div>
  );
};

export default CustomerAnalytics;
