'use client';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";

type Stock = {
  name: string;
  ticker: string;
  shares: string;
  weight: string;
  outstanding: string;
};

const stocks: Stock[] = [
  {
    name: "Berkshire",
    ticker: "BRK",
    shares: "25000000",
    weight: "20%",
    outstanding: "45%",
  },
  {
    name: "Johnson & Johnson",
    ticker: "JNJ",
    shares: "45000.00",
    weight: "16%",
    outstanding: "87%",
  },
  {
    name: "JPMorgan Chase",
    ticker: "JPM",
    shares: "12800000.00",
    weight: "21%",
    outstanding: "53%",
  },
];

export default function PortfolioAsToday() {
  return (
    <>
      <Card className="bg-[#232323] border-gray-800 shadow-2xl  mx-auto">
        <CardContent className="p-0">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-medium text-white">
                Portfolio as of Today
              </h2>
              <button className="text-gray-400 hover:text-gray-300">
                <MoreHorizontal size={20} />
              </button>
            </div>
            
            <div className="rounded-lg bg-[#171717] overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-5 gap-6 px-8 py-4 border-b border-gray-700">
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">NAME</div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">TICKER</div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">NO. OF SHARES</div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">WEIGHT</div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">OUTSTANDING SHARES</div>
              </div>
              
              {/* Stock Rows */}
              {stocks.map((stock, idx) => (
                <div
                  key={stock.ticker}
                  className={cn(
                    "grid grid-cols-5 gap-6 items-center px-8 py-6 border-b border-gray-800 last:border-none hover:bg-[#1a1a1a]/30 transition-colors",
                  )}
                >
                  <div className="text-white font-medium text-base">{stock.name}</div>
                  <div className="text-white font-semibold text-base">{stock.ticker}</div>
                  <div className="text-white font-medium text-base">{stock.shares}</div>
                  <div className="text-white font-medium text-base">{stock.weight}</div>
                  <div className="text-white font-medium text-base">{stock.outstanding}</div>
                </div>
              ))}
              
              {/* View All Button */}
              <div className="p-6">
                <button className="w-full py-4 bg-[#2a2a2a] rounded-lg text-gray-300 hover:bg-[#333333] transition-colors text-sm font-medium">
                  View All
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}