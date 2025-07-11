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
				className={`w-3 h-3 ${
					i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
				}`}
			/>
		));
	};

	const StockRow = ({ stock, showPrice = false }: any) => (
		<div className="flex items-center justify-between py-2 px-1 hover:bg-gray-900 rounded">
			<div className="flex items-center space-x-3">
				<span className="text-white font-medium">{stock.name}</span>
				<span className="text-gray-400 text-sm">{stock.ticker}</span>
			</div>
			<div className="flex items-center space-x-4">
				<span className="text-gray-400 text-sm">{stock.days}d</span>
				{showPrice && (
					<>
						<span className="text-white font-medium">${stock.price}</span>
						<span
							className={`text-sm ${
								stock.change > 0 ? "text-green-400" : "text-red-400"
							}`}>
							{stock.change > 0 ? "+" : ""}
							{stock.change}%
						</span>
					</>
				)}
				<div className="flex space-x-0.5">{renderStars(stock.rating)}</div>
			</div>
		</div>
	);

	return (
		<>
			<div className=" bg-[#232323] my-10 p-4 rounded-2xl ">
				{/* Main Content */}
				<div className="flex">
					{/* Center Area */}
					<div className="flex-1 relative">
						{/* Bottom Tables */}
						<div className="px-6 pb-6">
							<div className="grid grid-cols-2 gap-8">
								{/* Your Preferred Stocks */}
								<div>
									<h3 className="text-lg font-semibold mb-4">
										Your Preferred Stocks
									</h3>
									<div className="bg-[#171717] rounded-lg p-4">
										<div className="flex items-center justify-between text-sm text-gray-400 mb-3">
											<span>NAME</span>
											<div className="flex space-x-8">
												<span>TICKER</span>
												<span>DAYS TO TRADE</span>
												<span>VOLUME</span>
											</div>
										</div>
										{preferredStocks.map((stock, index) => (
											<StockRow key={index} stock={stock} showPrice={true} />
										))}
									</div>
									<button className="flex items-center space-x-2 text-gray-400  mt-4">
										<Plus className="w-4 h-4" />
										<span>Add another stock</span>
									</button>
								</div>

								{/* You Might Like */}
								<div>
									<h3 className="text-lg font-semibold mb-4">You Might Like</h3>
									<div className="bg-[#171717] rounded-lg p-4">
										<div className="flex items-center justify-between text-sm text-gray-400 mb-3">
											<span>NAME</span>
											<div className="flex space-x-8">
												<span>TICKER</span>
												<span>DAYS TO TRADE</span>
												<span>RATINGS</span>
											</div>
										</div>
										{likedStocks.map((stock, index) => (
											<StockRow key={index} stock={stock} />
										))}
									</div>
									<button className="flex items-center space-x-2 text-gray-400 mt-4">
										<Plus className="w-4 h-4" />
										<span>Add another stock</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className=" bg-[#232323] my-10 p-4 rounded-2xl ">
				<div className="flex">
					{/* Center Area */}
					<div className="flex-1 relative">
						{/* Bottom Tables */}
						<div className="px-6 pb-6">
							<div className="grid grid-cols-2 gap-8">
								{/* Your Disliked Stocks */}
								<div>
									<h3 className="text-lg font-semibold mb-4">
										Your Disliked Stocks
									</h3>
									<div className="bg-[#171717] rounded-lg p-4">
										<div className="flex items-center justify-between text-sm text-gray-400 mb-3">
											<span>NAME</span>
											<div className="flex space-x-8">
												<span>TICKER</span>
												<span>DAYS TO TRADE</span>
												<span>VOLUME</span>
											</div>
										</div>
										{dislikedStocks.map((stock, index) => (
											<StockRow key={index} stock={stock} />
										))}
									</div>
									<button className="flex items-center space-x-2 text-gray-400  mt-4">
										<Plus className="w-4 h-4" />
										<span>Add another stock</span>
									</button>
								</div>

								{/* You Might Dislike */}
								<div>
									<h3 className="text-lg font-semibold mb-4">
										You Might Dislike
									</h3>
									<div className="bg-[#171717] rounded-lg p-4">
										<div className="flex items-center justify-between text-sm text-gray-400 mb-3">
											<span>NAME</span>
											<div className="flex space-x-8">
												<span>TICKER</span>
												<span>DAYS TO TRADE</span>
												<span>RATINGS</span>
											</div>
										</div>
										{maybeStocks.map((stock, index) => (
											<StockRow key={index} stock={stock} />
										))}
									</div>
									<button className="flex items-center space-x-2 text-gray-400  mt-4">
										<Plus className="w-4 h-4" />
										<span>Add another stock</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TableStock;
