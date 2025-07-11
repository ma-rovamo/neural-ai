import RankingCards from "@/components/home/moduel/ui/RankingCard";
import InvestorLink from "@/components/investors/module/ui/Investor";
import InvestorAvoid from "@/components/investors/module/ui/InvestorAvoid";
import InvestorTable from "@/components/investors/module/ui/InvestorTable";
import PerformanceBreakdown from "@/components/investors/module/ui/Performance";
import PortfolioAsToday from "@/components/investors/module/ui/PortfolioAsToday";
import SimilarInvestor from "@/components/investors/module/ui/SimilarInvestor";
import TopCountryInvestor from "@/components/investors/module/ui/TopCountryInvestor";
import VolumeBreakdownChart from "@/components/investors/module/ui/VolumeBreakDown";
import React from "react";

const Investor = () => {
	return (
		<>
			<InvestorLink />
			<SimilarInvestor />
			<PerformanceBreakdown />
			<div className="mb-5 bg-[#232323] rounded-2xl my-5 p-6">
				<RankingCards />
			</div>
			<VolumeBreakdownChart />
			<InvestorTable />
			<InvestorAvoid />
			<TopCountryInvestor />
			<PortfolioAsToday />
		</>
	);
};

export default Investor;
