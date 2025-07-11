'use client'
import React, { useState } from 'react';
import { Star } from 'lucide-react';

const StockDashboard = () => {
  const [selectedStocks, setSelectedStocks] = useState(new Set());
  const [draggedStock, setDraggedStock] = useState(null);
  const [likeRatings, setLikeRatings] = useState(0);
  const [dislikeRatings, setDislikeRatings] = useState(0);

  const centerStocks = [
    { symbol: 'CRM', x: '30%', y: '25%' },
    { symbol: 'PEP', x: '70%', y: '25%' },
    { symbol: 'NVDA', x: '50%', y: '35%' },
    { symbol: 'AMZN', x: '25%', y: '45%' },
    { symbol: 'CVX', x: '20%', y: '65%' },
    { symbol: 'TSLA', x: '50%', y: '50%' },
    { symbol: 'NFLX', x: '75%', y: '50%' },
    { symbol: 'AAPL', x: '25%', y: '75%' },
    { symbol: 'PYPL', x: '75%', y: '75%' },
    { symbol: 'INTC', x: '40%', y: '85%' },
    { symbol: 'ADBE', x: '60%', y: '85%' }
  ];

  const handleDragStart = (e: any, stock: any) => {
    setDraggedStock(stock);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setDraggedStock(null);
  };

  const handleLikeRating = (rating: number) => {
    setLikeRatings(rating);
  };

  const handleDislikeRating = (rating: number) => {
    setDislikeRatings(rating);
  };

  const StockBubble = ({ stock, size = 'md' }: any) => {
    const sizeClasses: any = {
      sm: 'w-10 h-10 md:w-12 md:h-12 text-xs',
      md: 'w-12 h-12 md:w-16 md:h-16 text-xs md:text-sm',
      lg: 'w-14 h-14 md:w-20 md:h-20 text-sm md:text-base'
    };

    return (
      <div
        className={`${sizeClasses[size]} bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 hover:from-purple-700 hover:via-blue-700 hover:to-purple-800 rounded-full flex items-center justify-center text-white font-bold cursor-grab active:cursor-grabbing transition-all duration-300 absolute shadow-2xl border border-purple-400/50 touch-none`}
        style={{
          left: stock.x,
          top: stock.y,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 30px rgba(147, 51, 234, 0.6), 0 0 60px rgba(147, 51, 234, 0.3)'
        }}
        draggable
        onDragStart={(e) => handleDragStart(e, stock)}
        onTouchStart={(e) => e.preventDefault()}
      >
        {stock.symbol}
      </div>
    );
  };

  const StarRating = ({ type, maxRating = 5 }: any) => {
    const currentRating = type === 'like' ? likeRatings : dislikeRatings;
    const handleRating = type === 'like' ? handleLikeRating : handleDislikeRating;

    const strokeColor = type === 'like' ? '#ffffff' : '#ffffff';
    const fillColor = type === 'like' ? '#22c55e' : '#ef4444';
    const bgColorFilled = type === 'like' ? 'bg-green-500' : 'bg-red-500';
    const bgColorEmpty = type === 'like' ? 'bg-green-500/20' : 'bg-red-500/20';

    return (
      <div className="flex flex-col space-y-2 items-center">
        {[...Array(maxRating)].map((_, index) => {
          const isFilled = index < currentRating;
          return (
            <div
              key={index}
              className={`w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110 ${
                isFilled ? bgColorFilled : bgColorEmpty
              }`}
              onClick={() => handleRating(index + 1)}
            >
              <Star
                className="w-5 h-5"
                stroke={strokeColor}
                fill={isFilled ? fillColor : 'none'}
                strokeWidth={1.5}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-[#232323] pb-10 rounded-2xl text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 md:px-6 py-4  flex-wrap gap-4">
        <div className="flex items-center space-x-2 md:space-x-6 flex-wrap gap-2">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm">Country:</span>
            <select className="bg-transparent text-white border-none outline-none text-sm">
              <option>France</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm">Sector:</span>
            <select className="bg-transparent text-white border-none outline-none text-sm">
              <option>Consumer</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm">Style:</span>
            <select className="bg-transparent text-white border-none outline-none text-sm">
              <option>Code</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm">Size:</span>
            <select className="bg-transparent text-white border-none outline-none text-sm">
              <option>All</option>
            </select>
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 px-3 md:px-4 py-2 rounded-md text-white font-medium transition-colors flex items-center space-x-2 text-sm">
          <span>Reset Selection</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Sidebar - Dislike */}
        <div className="w-20 flex flex-col items-center justify-center space-y-6 bg-[#232323]">
          <div className="text-white font-bold text-sm whitespace-nowrap">Dislike</div>
          <div>
            <StarRating type="dislike" />
          </div>
        </div>

        {/* Center Area */}
        <div className="flex-1 relative bg-[#232323] p-8">
          <h2 className="text-lg font-bold mb-6 text-start text-white">Drag & Drop Stock to Reflect Convictions</h2>
          <div
            className="relative h-full w-full rounded-xl overflow-hidden"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {/* Concentric Circle Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute w-24 h-24 border border-purple-400/60 rounded-full animate-pulse" style={{ transform: 'translate(-50%, -50%)' }}></div>
                <div className="absolute w-40 h-40 border border-purple-400/50 rounded-full" style={{ transform: 'translate(-50%, -50%)' }}></div>
                <div className="absolute w-56 h-56 border border-purple-400/40 rounded-full" style={{ transform: 'translate(-50%, -50%)' }}></div>
                <div className="absolute w-72 h-72 border border-purple-400/30 rounded-full" style={{ transform: 'translate(-50%, -50%)' }}></div>
                <div className="absolute w-88 h-88 border border-purple-400/20 rounded-full" style={{ transform: 'translate(-50%, -50%)' }}></div>
                <div className="absolute w-96 h-96 border border-purple-400/15 rounded-full" style={{ transform: 'translate(-50%, -50%)' }}></div>
                <div
                  className="absolute w-3 h-3 bg-purple-400 rounded-full"
                  style={{
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 20px rgba(147, 51, 234, 0.8)'
                  }}
                ></div>
              </div>
            </div>



            {/* Bubbles */}
            {centerStocks.map((stock, index) => (
              <StockBubble key={index} stock={stock} size="md" />
            ))}
          </div>

          
        </div>

        {/* Right Sidebar - Like */}
        <div className="w-20 flex flex-col items-center justify-center space-y-6 bg-[#232323]">
          <div className="text-white font-bold text-sm whitespace-nowrap">Like</div>
          <div>
            <StarRating type="like" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDashboard;