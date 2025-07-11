import RankingCards from "@/components/home/moduel/ui/RankingCard";
import ActionBar from "@/components/stocks/module/ui/ActionBar";
import HistoricalDaysChart from "@/components/stocks/module/ui/HistoricalDays";
import LikelyBuyer from "@/components/stocks/module/ui/LikelyBuyer";
import PerformanceChart from "@/components/stocks/module/ui/PerformanceChart";
import SimilarStocks from "@/components/stocks/module/ui/SimilarStocks";
import React from "react";

const Stocks = () => {
	return (
		<>
			<ActionBar />
			<HistoricalDaysChart />
			<SimilarStocks />
			<LikelyBuyer />
			<PerformanceChart />
			<div className="mb-5 bg-[#232323] rounded-2xl my-5 p-6">
				<RankingCards />
			</div>
		</>
	);
};

export default Stocks;
