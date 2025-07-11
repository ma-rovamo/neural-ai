import { DashboardChart } from "@/components/home/moduel/ui/Chart";
import DashboardBreakdown from "@/components/home/moduel/ui/CircleProgress";
import CustomerAnalytics from "@/components/home/moduel/ui/CustomerAnalytics";
import PortfolioStocks from "@/components/home/moduel/ui/PortfolioStocks";
import StockPressureTable from "@/components/home/moduel/ui/TopContry";
import YourStocks from "@/components/home/moduel/ui/YourStocks";
import EuropeanSmallCupsSection, { MetricCard } from "@/components/Metric";
import React from "react";

const Home = () => {
	return (
		<>
			<section className="pb-10 my-3  ">
				<EuropeanSmallCupsSection />

				<DashboardChart />
				<DashboardBreakdown />
				<CustomerAnalytics />
				<StockPressureTable />
				<YourStocks/>
				<PortfolioStocks/>
			</section>
		</>
	);
};

export default Home;
