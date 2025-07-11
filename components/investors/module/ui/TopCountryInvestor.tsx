import { Card } from "@/components/ui/card";

interface DataItem {
  name: string;
  value: number;
}

interface BarChartProps {
  title: string;
  subtitle: string;
  data: DataItem[];
  color: 'blue' | 'purple';
}

const BarChart = ({ title, subtitle, data, color }: BarChartProps) => {
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <Card className="p-6  bg-card border-border">
      <div className="mb-6">
        <h2 className="text-lg font-medium text-foreground mb-1">{title}</h2>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center flex-1">
              <span className="text-foreground font-medium text-sm w-24 flex-shrink-0">
                {item.name}
              </span>
              <div className="flex-1 mx-4 relative">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full animate-in slide-in-from-left-full fade-in-0 duration-700 ease-out ${
                      color === 'blue' 
                        ? 'bg-blue-500 hover:bg-blue-600' 
                        : 'bg-purple-500 hover:bg-purple-600'
                    }`}
                    style={{
                      width: `${(item.value / maxValue) * 100}%`,
                      animationDelay: `${index * 150}ms`
                    }}
                  />
                </div>
              </div>
            </div>
            <span className="text-foreground font-medium text-sm w-10 text-right animate-in fade-in-0 duration-500"
              style={{ animationDelay: `${index * 150 + 300}ms` }}>
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

const TopCountryInvestor = () => {
  const countriesData: DataItem[] = [
    { name: "Great Britain", value: 78 },
    { name: "China", value: 45 },
    { name: "US", value: 67 },
    { name: "Japan", value: 34 },
    { name: "Germany", value: 72 },
    { name: "Hong Kong", value: 96 },
    { name: "France", value: 52 },
    { name: "Canada", value: 48 }
  ];

  const sectorsData: DataItem[] = [
    { name: "Technology", value: 67 },
    { name: "Financials", value: 83 },
    { name: "Healthcare", value: 21 },
    { name: "Industrial", value: 45 },
    { name: "Energy", value: 89 },
    { name: "Real Estate", value: 56 },
    { name: "Utility", value: 95 },
    { name: "Materials", value: 24 }
  ];

  return (
    <div className=" bg-[#232323] rounded-2xl my-4 p-6">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="animate-in slide-in-from-left-4 fade-in-0 duration-700">
            <BarChart
              title="Top 8 Countries"
              subtitle="2023 - 2024"
              data={countriesData}
              color="blue"
            />
          </div>
          <div className="animate-in slide-in-from-right-4 fade-in-0 duration-700" 
               style={{ animationDelay: '200ms' }}>
            <BarChart
              title="Top 8 Sectors"
              subtitle="2023 - 2024"
              data={sectorsData}
              color="purple"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCountryInvestor;
