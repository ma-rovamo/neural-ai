'use client';
import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Lightbulb, 
  Users, 
  MapPin, 
  Search,
  Bell,
  Menu
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { SidebarProvider } from './ui/sidebar';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { AppSidebarMain } from './AppSidebarr';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { AIAnalyticsButton } from './BottomNavigation';

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const mainMenuItems = [
    { path: '/portfolio', icon: BarChart3, label: 'Portfolio Analysis' },
    { path: '/stocks', icon: TrendingUp, label: 'Stocks' },
    { path: '/idea-generation', icon: Lightbulb, label: 'Idea Generation' },
    { path: '/investors', icon: Users, label: 'Investors' },
    { path: '/positioning', icon: MapPin, label: 'Positioning' },
  ];

  // const marketItems = [
  //   { path: '/news', icon: Eye, label: 'News Overview' },
  //   { path: '/market', icon: Activity, label: 'Market Tracker' },
  // ];

  const allRoutes = [...mainMenuItems];

  // Match label from pathname
  const currentLabel = allRoutes.find(item => pathname?.startsWith(item.path))?.label || 'Dashboard';

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#121212]">
        {/* Sidebar - hidden on small screens */}
        <div className="hidden md:block">
          <AppSidebarMain />
        </div>

        <main className="flex-1 flex flex-col">
          {/* Header */}
          <header className=" p-3 sm:p-4 md:p-5 bg-[#121212]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Mobile menu button */}
                <Button variant="ghost" size="icon" className="md:hidden mr-1 hover:bg-[#1e1e1e] rounded-full">
                  <Menu className="h-5 w-5 text-gray-300" />
                </Button>
                <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {currentLabel}
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
                {/* Search Input */}
                <div className="relative hidden sm:block">
                  <Input
                    placeholder="Search..."
                    className="pl-4 pr-10 w-48 sm:w-56 md:w-72 p-6 border-gray-700 bg-[#232323] text-gray-200 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 rounded-lg"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>

                {/* Mobile search icon */}
                <Button variant="ghost" size="icon" className="sm:hidden hover:bg-[#1e1e1e] rounded-full w-10 h-10">
                  <Search className="h-5 w-5 text-gray-300" />
                </Button>

                {/* Notification */}
                <Button variant="ghost" size="icon" className="relative hover:bg-[#1e1e1e] rounded-full w-9 h-9 sm:w-10 sm:h-10">
                  <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300" />
                  <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[16px] h-[16px] sm:min-w-[18px] sm:h-[18px] px-1 bg-red-500 text-white text-[10px] sm:text-xs font-medium rounded-full">3</span>
                </Button>

                {/* Avatar */}
                <Avatar className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 border border-gray-700 cursor-pointer hover:border-gray-500 transition-colors">
                  <AvatarImage src="/avatar.png" alt="User" />
                  <AvatarFallback className="bg-[#1e1e1e] text-gray-300 font-medium text-xs sm:text-sm">JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          <div className="bg-[#171717] text-white">
            {children}
<AIAnalyticsButton/>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Sidebar;
