import { TrendingUp, BarChart3, Target, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

interface RankingCardProps {
  rank: string;
  label: string;
  icon: React.ReactNode;
  iconColor: string;
  labelColor: string;
}

function RankingCard({ rank, label, icon, iconColor, labelColor }: RankingCardProps) {
  return (
    <Card className="bg-[#171717] border-[#2a2a2a] p-6 rounded-xl hover:bg-[#1f1f1f] transition-colors">
      <div className="text-center space-y-4">
        <div className={`mx-auto w-12 h-12 rounded-full ${iconColor} flex items-center justify-center`}>
          {icon}
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-white">{rank}</h3>
          <p className={`text-sm font-medium ${labelColor}`}>{label}</p>
        </div>
      </div>
    </Card>
  );
}

export default function RankingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#232323]">
      <RankingCard
        rank="6th"
        label="Average Value"
        icon={<TrendingUp className="h-5 w-5 text-green-400" />}
        iconColor="bg-green-500/20"
        labelColor="text-green-400"
      />
      <RankingCard
        rank="1st"
        label="Top Momentum"
        icon={<BarChart3 className="h-5 w-5 text-blue-400" />}
        iconColor="bg-blue-500/20"
        labelColor="text-blue-400"
      />
      <RankingCard
        rank="9th"
        label="Top Size"
        icon={<Target className="h-5 w-5 text-orange-400" />}
        iconColor="bg-orange-500/20"
        labelColor="text-orange-400"
      />
      <RankingCard
        rank="5th"
        label="Average Quality"
        icon={<Award className="h-5 w-5 text-purple-400" />}
        iconColor="bg-purple-500/20"
        labelColor="text-purple-400"
      />
    </div>
  );
}