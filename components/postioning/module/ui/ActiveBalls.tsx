'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  Minus, 
  RotateCcw, 
  Shuffle, 
  BarChart3,
  ChevronDown
} from "lucide-react";

const bubbleData = [
  { id: 1, ticker: "PYPL", value: "$76,644", size: 200, x: 50, y: 45, color: "from-blue-600 to-purple-600" },
  { id: 2, ticker: "AAPL", value: "$31,657", size: 120, x: 25, y: 35, color: "from-red-700 to-red-500" },
  { id: 3, ticker: "TSLA", value: "$23,657", size: 110, x: 75, y: 25, color: "from-red-500 to-red-500" },
  { id: 4, ticker: "JNJ", value: "$32,982", size: 130, x: 35, y: 65, color: "from-red-500 to-red-500" },
  { id: 5, ticker: "MSFT", value: "$21,987", size: 100, x: 70, y: 50, color: "from-red-500 to-red-500" },

  // Medium bubbles
  { id: 6, ticker: "", value: "", size: 80, x: 15, y: 55, color: "from-red-600 to-red-400" },
  { id: 7, ticker: "", value: "", size: 70, x: 85, y: 35, color: "from-red-600 to-red-400" },
  { id: 8, ticker: "", value: "", size: 75, x: 20, y: 20, color: "from-purple-900 to-purple-700" },
  { id: 9, ticker: "", value: "", size: 85, x: 80, y: 70, color: "from-purple-900 to-purple-700" },
  { id: 10, ticker: "", value: "", size: 90, x: 60, y: 75, color: "from-red-500 to-purple-500" },
  { id: 11, ticker: "", value: "", size: 65, x: 10, y: 75, color: "from-purple-900 to-purple-700" },
  { id: 12, ticker: "", value: "", size: 70, x: 90, y: 60, color: "from-red-500 to-purple-500" },

  // Small bubbles
  { id: 13, ticker: "", value: "", size: 50, x: 45, y: 20, color: "from-purple-900 to-purple-700" },
  { id: 14, ticker: "", value: "", size: 45, x: 65, y: 30, color: "from-purple-900 to-purple-700" },
  { id: 15, ticker: "", value: "", size: 40, x: 30, y: 50, color: "from-red-500 to-purple-500" },
  { id: 16, ticker: "", value: "", size: 55, x: 85, y: 80, color: "from-purple-900 to-purple-700" },
  { id: 17, ticker: "", value: "", size: 35, x: 15, y: 40, color: "from-purple-900 to-purple-700" },
  { id: 18, ticker: "", value: "", size: 45, x: 75, y: 80, color: "from-red-500 to-purple-500" },

  // Extra small bubbles
  { id: 19, ticker: "", value: "", size: 12, x: 40, y: 30, color: "from-red-400 to-red-600" },
  { id: 20, ticker: "", value: "", size: 15, x: 25, y: 45, color: "from-red-400 to-red-600" },
  { id: 21, ticker: "", value: "", size: 10, x: 55, y: 55, color: "from-red-400 to-red-600" },
  { id: 22, ticker: "", value: "", size: 18, x: 70, y: 40, color: "from-red-400 to-red-600" },
  { id: 23, ticker: "", value: "", size: 14, x: 80, y: 25, color: "from-red-400 to-red-600" },
  { id: 24, ticker: "", value: "", size: 16, x: 35, y: 75, color: "from-red-400 to-red-600" },
  { id: 25, ticker: "", value: "", size: 12, x: 60, y: 65, color: "from-red-400 to-red-600" },
  { id: 26, ticker: "", value: "", size: 20, x: 50, y: 80, color: "from-red-400 to-red-600" },
];


export default function BubbleChartVisualization() {
  const [hoveredBubble, setHoveredBubble] = useState(null);

  return (
    <div className="w-full h-screen bg-[#121212] relative overflow-hidden">
      {/* Header Controls */}
      <div className="absolute top-6 left-6 flex items-center gap-6 z-10">
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">Sector:</span>
          <Button variant="ghost" className="text-white text-sm font-medium h-8 px-3 hover:bg-gray-800">
            AAPL
            <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">Portfolio:</span>
          <Button variant="ghost" className="text-white text-sm font-medium h-8 px-3 hover:bg-gray-800">
            Code
            <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">Country:</span>
          <Button variant="ghost" className="text-white text-sm font-medium h-8 px-3 hover:bg-gray-800">
            USA
            <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Reset Selection Button */}
      <div className="absolute top-6 right-6 z-10">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white h-9 px-4 text-sm font-medium">
          ↻ Reset Selection
        </Button>
      </div>

      {/* Right Side Controls */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-10">
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800 w-10 h-10">
          <Plus className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800 w-10 h-10">
          <Minus className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800 w-10 h-10">
          <RotateCcw className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800 w-10 h-10">
          <Shuffle className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800 w-10 h-10">
          <BarChart3 className="h-4 w-4" />
        </Button>
      </div>

      {/* Bottom Right Expand Button */}
      <div className="absolute bottom-6 right-6 z-10">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </Button>
      </div>

      {/* Bubble Chart */}
      <div className="absolute inset-0 w-full h-full">
        <svg width="100%" height="100%" className="overflow-visible">
          <defs>
            {bubbleData.map((bubble) => {
  // Determine gradient colors based on bubble.color string
  let startColor = '#8b5cf6'; // default purple
  let endColor = '#7c3aed';

  if (bubble.color.includes('red-400') || bubble.color.includes('red-500') || bubble.color.includes('red-600') || bubble.color.includes('red-700')) {
    startColor = '#ef4444'; // red-500
    endColor = '#dc2626';   // red-600
  } else if (bubble.color.includes('purple-600') || bubble.color.includes('purple-700') || bubble.color.includes('purple-900')) {
    startColor = '#5b21b6'; // dark purple (purple-900)
    endColor = '#7c3aed';   // purple-700
  } else if (bubble.color.includes('blue-600')) {
    startColor = '#3b82f6'; // blue-600
    endColor = '#1e40af';   // blue-900
  }

  return (
    <radialGradient key={`gradient-${bubble.id}`} id={`gradient-${bubble.id}`} cx="30%" cy="30%">
      <stop offset="0%" stopColor={startColor} stopOpacity="0.9" />
      <stop offset="100%" stopColor={endColor} stopOpacity="0.8" />
    </radialGradient>
  );
})}

          </defs>
          
          {bubbleData.map((bubble:any) => (
            <g key={bubble.id}>
              <circle
                cx={`${bubble.x}%`}
                cy={`${bubble.y}%`}
                r={bubble.size / 2}
                fill={`url(#gradient-${bubble.id})`}
                className="cursor-pointer transition-all duration-300 hover:scale-110"
                style={{
                  filter: hoveredBubble === bubble.id ? 'brightness(1.2)' : 'brightness(1)',
                  boxShadow: hoveredBubble === bubble.id ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none'
                }}
                onMouseEnter={() => setHoveredBubble(bubble.id)}
                onMouseLeave={() => setHoveredBubble(null)}
              />
              
              {bubble.ticker && (
                <g>
                  <text
                    x={`${bubble.x}%`}
                    y={`${bubble.y - 1}%`}
                    textAnchor="middle"
                    className="fill-white text-sm font-semibold"
                    style={{ fontSize: '14px' }}
                  >
                    {bubble.ticker}
                  </text>
                  <text
                    x={`${bubble.x}%`}
                    y={`${bubble.y + 1.5}%`}
                    textAnchor="middle"
                    className="fill-white text-xs"
                    style={{ fontSize: '12px' }}
                  >
                    {bubble.value}
                  </text>
                </g>
              )}
            </g>
          ))}
        </svg>
      </div>

     
    </div>
  );
}