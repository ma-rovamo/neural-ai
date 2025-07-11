'use client';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Star, MoreHorizontal } from "lucide-react";

type Stock = {
  name: string;
  ticker: string;
  pressure: number;
  daysToTrade: number;
  rating: number; // 1-5
  ratingColor: string;
  ratingBg: string;
  isPositive: boolean;
};

const stocks: Stock[] = [
  {
    name: "Amazon",
    ticker: "AMZN",
    pressure: 650,
    daysToTrade: 20,
    rating: 5,
    ratingColor: "text-blue-400",
    ratingBg: "bg-blue-500/20",
    isPositive: true,
  },
  {
    name: "Meta",
    ticker: "META",
    pressure: 250,
    daysToTrade: 16,
    rating: 2,
    ratingColor: "text-red-400",
    ratingBg: "bg-red-500/20",
    isPositive: false,
  },
  {
    name: "NVIDIA Corp",
    ticker: "NVDA",
    pressure: 128,
    daysToTrade: 21,
    rating: 4,
    ratingColor: "text-yellow-400",
    ratingBg: "bg-yellow-500/20",
    isPositive: true,
  },
];

function RatingStars({ count, color }: { count: number; color: string }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={cn(
            i < count ? color : "text-gray-600",
            "mr-0.5"
          )}
          fill={i < count ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

function MiniSparkline({ isPositive }: { isPositive: boolean }) {
  return (
    <div className="w-12 h-4 flex items-center">
      <svg width="48" height="16" viewBox="0 0 48 16" className="overflow-visible">
        <path
          d="M0 12 L8 8 L16 10 L24 6 L32 9 L40 4 L48 7"
          stroke={isPositive ? "#0d6cd1" : "#ef4444"}
          strokeWidth="1.5"
          fill="none"
          className="drop-shadow-sm"
        />
      </svg>
    </div>
  );
}

export default function InvestorAvoid() {
  return (
    <div className="bg-[#232323]  rounded-2xl  p-6">
      <Card className="bg-[#171717] border-gray-800 shadow-2xl  mx-auto">
        <CardContent className="p-0">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">
               This Investor Might Avoid
              </h2>
              <button className="text-gray-400 hover:text-gray-300">
                <MoreHorizontal size={20} />
              </button>
            </div>
            
            <div className="rounded-lg bg-[#0f0f0f] overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-5 gap-4 px-6 py-4 border-b border-gray-800">
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">NAME</div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">TICKER</div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">PRESSURE</div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">DAYS TO TRADE</div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">RATINGS</div>
              </div>
              
              {/* Stock Rows */}
              {stocks.map((stock, idx) => (
                <div
                  key={stock.ticker}
                  className={cn(
                    "grid grid-cols-5 gap-4 items-center px-6 py-5 border-b border-gray-800 last:border-none hover:bg-[#1a1a1a]/50 transition-colors",
                  )}
                >
                  <div className="text-white font-medium text-base">{stock.name}</div>
                  <div className="text-white font-semibold text-base">{stock.ticker}</div>
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "font-semibold text-base",
                        stock.isPositive ? "text-green-400" : "text-red-400"
                      )}
                    >
                      {stock.isPositive ? "+" : "-"} ${Math.abs(stock.pressure).toFixed(2)}
                    </span>
                    <MiniSparkline isPositive={stock.isPositive} />
                  </div>
                  <div className="text-white font-medium text-base">{stock.daysToTrade}</div>
                  <div>
                    <div
                      className={cn(
                        "inline-flex px-3 py-1.5 rounded-lg",
                        stock.ratingBg
                      )}
                    >
                      <RatingStars count={stock.rating} color={stock.ratingColor} />
                    </div>
                  </div>
                </div>
              ))}
              
              {/* View All Button */}
              <div className="p-4">
                <button className="w-full py-3 bg-[#1a1a1a] rounded-lg text-gray-400 hover:bg-[#2a2a2a] transition-colors text-sm font-medium">
                  View All
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}