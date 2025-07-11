"use client";
import React, { useState } from "react";
import { Star, Plus, MoreHorizontal } from "lucide-react";

const TableStock = () => {
    const preferredStocks = [
        {
            name: "Microsoft",
            ticker: "MSFT",
            days: 35,
            price: 415.23,
            change: 2.45,
            rating: 5,
        },
        {
            name: "Tesla",
            ticker: "TSLA",
            days: 27,
            price: 238.45,
            change: -1.23,
            rating: 4,
        },
        {
            name: "Apple",
            ticker: "AAPL",
            days: 24,
            price: 189.25,
            change: 0.87,
            rating: 4,
        },
    ];

    const likedStocks = [
        { name: "Amazon", ticker: "AMZN", days: 35, rating: 5 },
        { name: "Meta", ticker: "META", days: 27, rating: 4 },
        { name: "Netflix", ticker: "NFLX", days: 24, rating: 4 },
    ];

    const dislikedStocks = [
        { name: "Adobe", ticker: "ADBE", days: 35, rating: 2 },
        { name: "Uber", ticker: "UBER", days: 27, rating: 2 },
        { name: "VBR Inc", ticker: "VBR", days: 24, rating: 2 },
    ];

    const maybeStocks = [
        { name: "PayPal", ticker: "PYPL", days: 35, rating: 3 },
        { name: "Intel", ticker: "INTC", days: 27, rating: 3 },
        { name: "PayPal", ticker: "PYPL", days: 24, rating: 3 },
    ];

    const renderStars = (rating: any) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 ${
                    i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
                }`}
            />
        ));
    };

    const MobileStockCard = ({ stock, showPrice = false }: any) => (
        <div className="bg-gray-800/30 rounded-lg p-3 mb-2">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h4 className="text-white font-medium text-sm">{stock.name}</h4>
                    <p className="text-gray-400 text-xs">{stock.ticker}</p>
                </div>
                <div className="flex space-x-1">{renderStars(stock.rating)}</div>
            </div>
            <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">{stock.days} days</span>
                {showPrice && (
                    <div className="flex items-center space-x-2">
                        <span className="text-white font-medium">${stock.price}</span>
                        <span
                            className={`${
                                stock.change > 0 ? "text-green-400" : "text-red-400"
                            }`}
                        >
                            {stock.change > 0 ? "+" : ""}
                            {stock.change}%
                        </span>
                    </div>
                )}
            </div>
        </div>
    );

    const DesktopStockRow = ({ stock, showPrice = false }: any) => (
        <div className="flex items-center justify-between py-2 px-1 hover:bg-gray-900/50 rounded transition-colors">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
                <span className="text-white font-medium text-sm truncate">{stock.name}</span>
                <span className="text-gray-400 text-sm flex-shrink-0">{stock.ticker}</span>
            </div>
            <div className="flex items-center space-x-4 flex-shrink-0">
                <span className="text-gray-400 text-sm w-8 text-center">{stock.days}d</span>
                {showPrice && (
                    <>
                        <span className="text-white font-medium text-sm w-16 text-right">
                            ${stock.price}
                        </span>
                        <span
                            className={`text-sm w-12 text-right ${
                                stock.change > 0 ? "text-green-400" : "text-red-400"
                            }`}
                        >
                            {stock.change > 0 ? "+" : ""}
                            {stock.change}%
                        </span>
                    </>
                )}
                <div className="flex space-x-0.5">{renderStars(stock.rating)}</div>
            </div>
        </div>
    );

    const StockSection = ({ title, stocks, showPrice = false }: any) => (
        <div className="w-full">
            <h3 className="text-sm xs:text-base md:text-lg font-semibold mb-3 text-white px-1">
                {title}
            </h3>
            
            {/* Mobile View */}
            <div className="block md:hidden">
                <div className="space-y-2">
                    {stocks.map((stock: any, index: number) => (
                        <MobileStockCard key={index} stock={stock} showPrice={showPrice} />
                    ))}
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
                <div className="bg-[#171717] rounded-lg p-4">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-3 pb-2 border-b border-gray-700/50">
                        <span className="font-medium">NAME</span>
                        <div className="flex space-x-4">
                            <span className="w-8 text-center">DAYS</span>
                            {showPrice && (
                                <>
                                    <span className="w-16 text-right">PRICE</span>
                                    <span className="w-12 text-right">CHANGE</span>
                                </>
                            )}
                            <span>RATING</span>
                        </div>
                    </div>
                    <div className="space-y-1">
                        {stocks.map((stock: any, index: number) => (
                            <DesktopStockRow key={index} stock={stock} showPrice={showPrice} />
                        ))}
                    </div>
                </div>
            </div>

            <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 mt-3 transition-colors px-1">
                <Plus className="w-3 h-3 xs:w-4 xs:h-4" />
                <span className="text-xs xs:text-sm">Add another stock</span>
            </button>
        </div>
    );

    return (
        <div className="w-full  mx-auto px-2 xs:px-4">
            <div className="space-y-4 xs:space-y-6">
                {/* Preferred and Liked Stocks */}
                <div className="bg-[#232323] p-3 xs:p-4 sm:p-6 rounded-xl xs:rounded-2xl">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xs:gap-6 xl:gap-8">
                        <StockSection 
                            title="Your Preferred Stocks" 
                            stocks={preferredStocks} 
                            showPrice={true} 
                        />
                        <StockSection 
                            title="You Might Like" 
                            stocks={likedStocks} 
                            showPrice={false} 
                        />
                    </div>
                </div>

                {/* Disliked and Maybe Stocks */}
                <div className="bg-[#232323] p-3 xs:p-4 sm:p-6 rounded-xl xs:rounded-2xl">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xs:gap-6 xl:gap-8">
                        <StockSection 
                            title="Your Disliked Stocks" 
                            stocks={dislikedStocks} 
                            showPrice={false} 
                        />
                        <StockSection 
                            title="You Might Dislike" 
                            stocks={maybeStocks} 
                            showPrice={false} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableStock;
