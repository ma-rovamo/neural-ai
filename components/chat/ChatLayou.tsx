'use client';
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  History, 
  RotateCcw, 
  Maximize2, 
  X, 
  Paperclip, 
  Smile, 
  Mic, 
  Send,
  Download,
  Image as ImageIcon
} from "lucide-react";

const sidebarItems = [
  {
    time: "8:56 PM",
    title: "Apple stock insight",
    subtitle: "Is Apple stock a good buy?",
    description: "Based on recent earnings and growth potential, AAPL remains a...",
    category: "TODAY"
  },
  {
    time: "9:02 PM",
    title: "EV stock compare",
    subtitle: "Compare Tesla vs Ford",
    description: "Tesla leads in innovation, while Ford shows steady dividends...",
    category: "TODAY"
  },
  {
    time: "10:48 PM",
    title: "ETF explained",
    subtitle: "What is an ETF?",
    description: "ETFs are funds that track indices and offer diversified exposure...",
    category: "TODAY"
  },
  {
    time: "Jul 9",
    title: "Tech stock trends",
    subtitle: "Show trending tech stocks",
    description: "Trending tickers include NVDA, MSFT, and AMD with high volume spikes...",
    category: "YESTERDAY"
  },
  {
    time: "Jul 11",
    title: "Dividend picks",
    subtitle: "Best stocks in healthcare",
    description: "JNJ and ABBV offer strong yields and consistent payouts...",
    category: "YESTERDAY"
  }
];

const stockData = [
  { name: "Technology", percentage: 67, color: "bg-blue-500" },
  { name: "Finance", percentage: 53, color: "bg-purple-500" },
  { name: "Healthcare", percentage: 31, color: "bg-blue-400" },
  { name: "Industrial", percentage: 45, color: "bg-purple-400" },
  { name: "Energy", percentage: 19, color: "bg-blue-600" },
  { name: "Real Estate", percentage: 56, color: "bg-purple-600" },
  { name: "Utility", percentage: 32, color: "bg-blue-500" },
  { name: "Materials", percentage: 24, color: "bg-purple-500" }
];

export default function FinancialChatInterface() {
  const [message, setMessage] = useState('');
  const [activeCategory, setActiveCategory] = useState('TODAY');

  const categories = ['TODAY', 'YESTERDAY'];

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white">
      {/* Sidebar */}
      <div className="w-80 bg-[#1a1a1a] border-r border-gray-800 flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-800">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-300 hover:bg-gray-800 h-10"
          >
            <History className="mr-2 h-4 w-4" />
            History
          </Button>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto">
          {categories.map((category) => (
            <div key={category} className="p-4">
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                {category}
              </h3>
              <div className="space-y-3">
                {sidebarItems
                  .filter(item => item.category === category)
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className="group cursor-pointer hover:bg-gray-800/50 rounded-lg p-3 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-sm font-medium text-white truncate">
                              {item.title}
                            </h4>
                            <span className="text-xs text-gray-500 ml-2">
                              {item.time}
                            </span>
                          </div>
                          <p className="text-sm text-gray-300 mb-1 truncate">
                            {item.subtitle}
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="h-16 bg-[#1a1a1a] border-b border-gray-800 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <RotateCcw className="h-5 w-5 text-gray-400" />
            <h1 className="text-lg font-medium">New chat</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Maximize2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-[#2a2a2a] rounded-lg p-4 max-w-md">
              <p className="text-sm text-gray-300">
                Give me the basic details about stock exchange, i want to know more
              </p>
            </div>
          </div>

          {/* AI Response */}
          <div className="flex justify-start">
            <div className="bg-[#1a1a1a] rounded-lg p-4 max-w-2xl">
              <p className="text-sm text-gray-300 mb-4">
                A key principle in reducing risk is diversification—spreading investments across various sectors or companies to avoid heavy losses if one stock performs poorly.
              </p>
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                <li>• The stock market allows people to buy/sell shares and become part-owners of companies.</li>
                <li>• Stock prices are affected by company performance, economy, global events, and investor behavior.</li>
              </ul>
              
              {/* Action Cards */}
              <div className="flex gap-3 mb-4">
                <Card className="bg-[#2a2a2a] border-gray-700 p-3 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span className="text-sm font-medium">My Stocks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">50.3 Mi</span>
                    <Download className="h-3 w-3 text-gray-400" />
                  </div>
                </Card>
                
                <Card className="bg-[#2a2a2a] border-gray-700 p-3 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <ImageIcon className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium">Top Sectors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">350 kb</span>
                    <Download className="h-3 w-3 text-gray-400" />
                  </div>
                </Card>
              </div>

              <p className="text-sm text-gray-300 mb-4">
                Give me image of my top stocks
              </p>

              {/* Stock Chart */}
              <Card className="bg-[#2a2a2a] border-gray-700 p-4">
                <div className="space-y-3">
                  {stockData.map((stock, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm text-gray-300 w-20">{stock.name}</span>
                      <div className="flex-1 mx-4">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${stock.color}`}
                            style={{ width: `${stock.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-300 w-8 text-right">
                        {stock.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-6 bg-[#1a1a1a] border-t border-gray-800">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Input
                placeholder="Type something..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-400 pr-12 focus:border-blue-500 focus:ring-blue-500/20"
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <Paperclip className="h-4 w-4" />
              </Button>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-400 hover:text-white"
            >
              <Smile className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-400 hover:text-white"
            >
              <Mic className="h-4 w-4" />
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}