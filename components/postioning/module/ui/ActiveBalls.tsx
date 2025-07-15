'use client';
import { useState, useRef, useCallback } from 'react';
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
  { id: 1, ticker: "PYPL", value: "$76,644", size: 200, x: 50, y: 45, color: "blue-purple" },
  { id: 2, ticker: "AAPL", value: "$31,657", size: 120, x: 25, y: 35, color: "red" },
  { id: 3, ticker: "TSLA", value: "$23,657", size: 110, x: 75, y: 25, color: "red" },
  { id: 4, ticker: "JNJ", value: "$32,982", size: 130, x: 35, y: 65, color: "red" },
  { id: 5, ticker: "MSFT", value: "$21,987", size: 100, x: 70, y: 50, color: "red" },

  // Medium bubbles
  { id: 6, ticker: "", value: "", size: 80, x: 15, y: 55, color: "red" },
  { id: 7, ticker: "", value: "", size: 70, x: 85, y: 35, color: "red" },
  { id: 8, ticker: "", value: "", size: 75, x: 20, y: 20, color: "purple" },
  { id: 9, ticker: "", value: "", size: 85, x: 80, y: 70, color: "purple" },
  { id: 10, ticker: "", value: "", size: 90, x: 60, y: 75, color: "red-purple" },
  { id: 11, ticker: "", value: "", size: 65, x: 10, y: 75, color: "purple" },
  { id: 12, ticker: "", value: "", size: 70, x: 90, y: 60, color: "red-purple" },

  // Small bubbles
  { id: 13, ticker: "", value: "", size: 50, x: 45, y: 20, color: "purple" },
  { id: 14, ticker: "", value: "", size: 45, x: 65, y: 30, color: "purple" },
  { id: 15, ticker: "", value: "", size: 40, x: 30, y: 50, color: "red-purple" },
  { id: 16, ticker: "", value: "", size: 55, x: 85, y: 80, color: "purple" },
  { id: 17, ticker: "", value: "", size: 35, x: 15, y: 40, color: "purple" },
  { id: 18, ticker: "", value: "", size: 45, x: 75, y: 80, color: "red-purple" },

  // Extra small bubbles
  { id: 19, ticker: "", value: "", size: 12, x: 40, y: 30, color: "red-small" },
  { id: 20, ticker: "", value: "", size: 15, x: 25, y: 45, color: "red-small" },
  { id: 21, ticker: "", value: "", size: 10, x: 55, y: 55, color: "red-small" },
  { id: 22, ticker: "", value: "", size: 18, x: 70, y: 40, color: "red-small" },
  { id: 23, ticker: "", value: "", size: 14, x: 80, y: 25, color: "red-small" },
  { id: 24, ticker: "", value: "", size: 16, x: 35, y: 75, color: "red-small" },
  { id: 25, ticker: "", value: "", size: 12, x: 60, y: 65, color: "red-small" },
  { id: 26, ticker: "", value: "", size: 20, x: 50, y: 80, color: "red-small" },
];

export default function BubbleChartVisualization() {
  const [hoveredBubble, setHoveredBubble] = useState(null);
  const [bubbles, setBubbles] = useState(bubbleData);
  const [draggedBubble, setDraggedBubble] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const svgRef = useRef(null);

  const getGradientColors = (colorType:any) => {
    switch (colorType) {
      case 'blue-purple':
        return { start: '#3b82f6', end: '#8b5cf6' };
      case 'red':
        return { start: '#ef4444', end: '#dc2626' };
      case 'purple':
        return { start: '#8b5cf6', end: '#5b21b6' };
      case 'red-purple':
        return { start: '#ef4444', end: '#8b5cf6' };
      case 'red-small':
        return { start: '#ff6b6b', end: '#e74c3c' };
      default:
        return { start: '#8b5cf6', end: '#7c3aed' };
    }
  };

  const handleMouseDown = useCallback((e:any , bubble:any) => {
    e.preventDefault();
    setDraggedBubble(bubble.id);
    // @ts-ignore
    const svgRect = svgRef.current.getBoundingClientRect();
    const bubbleX = (bubble.x / 100) * svgRect.width;
    const bubbleY = (bubble.y / 100) * svgRect.height;
    
    setDragOffset({
      x: e.clientX - bubbleX,
      y: e.clientY - bubbleY
    });
  }, []);

  const handleMouseMove = useCallback((e:any) => {
    if (!draggedBubble || !svgRef.current) return;
// @ts-ignore
    const svgRect = svgRef.current.getBoundingClientRect();
    const newX = ((e.clientX - dragOffset.x) / svgRect.width) * 100;
    const newY = ((e.clientY - dragOffset.y) / svgRect.height) * 100;

    // Keep bubbles within bounds
    const clampedX = Math.max(5, Math.min(95, newX));
    const clampedY = Math.max(5, Math.min(95, newY));

    setBubbles(prev => prev.map(bubble => 
      bubble.id === draggedBubble 
        ? { ...bubble, x: clampedX, y: clampedY }
        : bubble
    ));
  }, [draggedBubble, dragOffset]);

  const handleMouseUp = useCallback(() => {
    setDraggedBubble(null);
    setDragOffset({ x: 0, y: 0 });
  }, []);

  const handleTouchStart = useCallback((e:any, bubble:any) => {
    e.preventDefault();
    const touch = e.touches[0];
    setDraggedBubble(bubble.id);
    // @ts-ignore
    const svgRect = svgRef.current.getBoundingClientRect();
    const bubbleX = (bubble.x / 100) * svgRect.width;
    const bubbleY = (bubble.y / 100) * svgRect.height;
    
    setDragOffset({
      x: touch.clientX - bubbleX,
      y: touch.clientY - bubbleY
    });
  }, []);

  const handleTouchMove = useCallback((e:any) => {
    if (!draggedBubble || !svgRef.current) return;
    e.preventDefault();

    const touch = e.touches[0];
    // @ts-ignore
    const svgRect = svgRef.current.getBoundingClientRect();
    const newX = ((touch.clientX - dragOffset.x) / svgRect.width) * 100;
    const newY = ((touch.clientY - dragOffset.y) / svgRect.height) * 100;

    const clampedX = Math.max(5, Math.min(95, newX));
    const clampedY = Math.max(5, Math.min(95, newY));

    setBubbles(prev => prev.map(bubble => 
      bubble.id === draggedBubble 
        ? { ...bubble, x: clampedX, y: clampedY }
        : bubble
    ));
  }, [draggedBubble, dragOffset]);

  const handleTouchEnd = useCallback(() => {
    setDraggedBubble(null);
    setDragOffset({ x: 0, y: 0 });
  }, []);

  return (
    <div 
      className="w-full h-screen bg-[#121212] relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header Controls */}
      <div className="absolute top-6 left-6 flex items-center gap-6 z-10">
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">Sector:</span>
          <Button variant="ghost" className="text-white text-sm font-medium h-8 px-3 hover:bg-gray-800 border border-gray-700">
            AAPL
            <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">Portfolio:</span>
          <Button variant="ghost" className="text-white text-sm font-medium h-8 px-3 hover:bg-gray-800 border border-gray-700">
            Code
            <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">Country:</span>
          <Button variant="ghost" className="text-white text-sm font-medium h-8 px-3 hover:bg-gray-800 border border-gray-700">
            USA
            <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Reset Selection Button */}
      <div className="absolute top-6 right-6 z-10">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white h-9 px-4 text-sm font-medium shadow-lg">
          ↻ Reset Selection
        </Button>
      </div>

      {/* Right Side Controls */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-10">
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800 w-10 h-10 border border-gray-700">
          <Plus className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800 w-10 h-10 border border-gray-700">
          <Minus className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800 w-10 h-10 border border-gray-700">
          <RotateCcw className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800 w-10 h-10 border border-gray-700">
          <Shuffle className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800 w-10 h-10 border border-gray-700">
          <BarChart3 className="h-4 w-4" />
        </Button>
      </div>

      {/* Bottom Right Expand Button */}
      <div className="absolute bottom-6 right-6 z-10">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full shadow-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </Button>
      </div>

      {/* Bubble Chart */}
      <div className="absolute inset-0 w-full h-full">
        <svg 
          ref={svgRef}
          width="100%" 
          height="100%" 
          className="overflow-visible"
          style={{ cursor: draggedBubble ? 'grabbing' : 'default' }}
        >
          <defs>
            {bubbles.map((bubble) => {
              const colors = getGradientColors(bubble.color);
              return (
                <radialGradient key={`gradient-${bubble.id}`} id={`gradient-${bubble.id}`} cx="30%" cy="30%">
                  <stop offset="0%" stopColor={colors.start} stopOpacity="0.9" />
                  <stop offset="70%" stopColor={colors.end} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={colors.end} stopOpacity="0.6" />
                </radialGradient>
              );
            })}
            
            {/* Glow filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {bubbles.map((bubble) => (
            <g key={bubble.id}>
              <circle
                cx={`${bubble.x}%`}
                cy={`${bubble.y}%`}
                r={bubble.size / 2}
                fill={`url(#gradient-${bubble.id})`}
                className="transition-all duration-300"
                style={{
                  cursor: 'grab',
                  filter: hoveredBubble === bubble.id || draggedBubble === bubble.id ? 'url(#glow) brightness(1.3)' : 'brightness(1)',
                  transform: hoveredBubble === bubble.id && draggedBubble !== bubble.id ? 'scale(1.1)' : 'scale(1)',
                  transformOrigin: 'center'
                }}
                // @ts-ignore
                onMouseEnter={() => setHoveredBubble(bubble.id)}
                onMouseLeave={() => setHoveredBubble(null)}
                onMouseDown={(e) => handleMouseDown(e, bubble)}
                onTouchStart={(e) => handleTouchStart(e, bubble)}
              />
              
              {bubble.ticker && (
                <g style={{ pointerEvents: 'none' }}>
                  <text
                    x={`${bubble.x}%`}
                    y={`${bubble.y - 1}%`}
                    textAnchor="middle"
                    className="fill-white text-sm font-semibold"
                    style={{ fontSize: '14px', textShadow: '0 0 8px rgba(0,0,0,0.8)' }}
                  >
                    {bubble.ticker}
                  </text>
                  <text
                    x={`${bubble.x}%`}
                    y={`${bubble.y + 1.5}%`}
                    textAnchor="middle"
                    className="fill-white text-xs"
                    style={{ fontSize: '12px', textShadow: '0 0 8px rgba(0,0,0,0.8)' }}
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