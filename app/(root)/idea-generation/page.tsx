import StockDashboard from "@/components/idea/module/ui/DashboardStack";
import TableStock from "@/components/stocks/module/ui/Table";
import React from "react";
const page = () => {
	return (
		<>
			<StockDashboard />
			<div className="my-4">
				<TableStock />
			</div>
		</>
	);
};

export default page;
