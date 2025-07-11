import { Card, CardContent } from "@/components/ui/card";

type MetricCard = {
  value: string;
  label: string;
  bgColor: string;
  textColor: string;
  icon?: React.ReactNode; // Added icon support for fintech look
};

const metrics: MetricCard[] = [
  {
    value: "$56k",
    label: "Market Cap",
    bgColor: "bg-[#0052CC]/40",
    textColor: "text-white"
  },
  {
    value: "3532",
    label: "Vol 90 Days",
    bgColor: "bg-[#F8B6C3]/40",
    textColor: "text-white"
  },
  {
    value: "$623",
    label: "Price",
    bgColor: "bg-[#FF991F]/40",
    textColor: "text-white"
  },
  {
    value: "$1.3m",
    label: "Pressure",
    bgColor: "bg-[#5243AA]/40",
    textColor: "text-white"
  },
  {
    value: "32",
    label: "Days to Trade",
    bgColor: "bg-[#DE350B]/40",
    textColor: "text-white"
  },
  {
    value: "3532",
    label: "Ratings",
    bgColor: "bg-[#00875A]/40",
    textColor: "text-white"
  }
];

export default function ActionBar() {
  return (
    <div className="bg-[#232323] rounded-3xl p-4 md:p-6 max-w-7xl mx-auto shadow-lg border border-gray-800">
      <Card className="bg-[#232323] border-none shadow-none">
        <CardContent className="p-0">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left side - Company info */}
            <div className="w-full lg:flex-shrink-0 lg:max-w-xs">
              <div className="flex items-center mb-2">
                <div className="bg-blue-600 h-8 w-8 rounded-md flex items-center justify-center mr-3">
                  <span className="text-white font-bold">A</span>
                </div>
                <h1 className="text-white text-xl font-semibold">Amazon</h1>
                <span className="ml-2 text-gray-400 text-sm">AMZN</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Amazon.com, Inc. offers a range of product and services through its websites
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto">
                Read More
              </button>
            </div>
            
            {/* Right side - Metrics grid */}
           <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mt-4 lg:mt-0">
  {metrics.map((metric, index) => (
    <div
      key={index}
      className={`${metric.bgColor} rounded-lg p-3 md:p-4 flex flex-col justify-center items-center text-center backdrop-blur-sm transition-all hover:scale-105 min-h-[90px] shadow-md`}
    >
      <div className={`${metric.textColor} text-xl md:text-2xl font-bold mb-1 whitespace-nowrap`}>
        {metric.value}
      </div>
      <div className={`${metric.textColor} text-xs opacity-80 whitespace-nowrap`}>
        {metric.label}
      </div>
    </div>
  ))}
</div>

          </div>
        </CardContent>
      </Card>
    </div>
  );
}
