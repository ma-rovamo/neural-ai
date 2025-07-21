"use client";
import React, { useState } from "react";
import {
	BarChart3,
	TrendingUp,
	Lightbulb,
	Users,
	MapPin,
	Search,
	Bell,
	Menu,
	ChevronRight,
  Settings,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { SidebarProvider } from "./ui/sidebar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { AppSidebarMain } from "./AppSidebarr";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { AIAnalyticsButton } from "./BottomNavigation";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
const Sidebar = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const [isSheetOpen, setIsSheetOpen] = useState(false);
	const router = useRouter();

	const mainMenuItems = [
		{ path: "/portfolio", icon: BarChart3, label: "Portfolio Analysis" },
		{ path: "/stocks", icon: TrendingUp, label: "Stocks" },
		{ path: "/idea-generation", icon: Lightbulb, label: "Idea Generation" },
		{ path: "/investors", icon: Users, label: "Investors" },
		{ path: "/positioning", icon: MapPin, label: "Positioning" },
	];

	const navigationItems = [
		{ path: "/", icon: BarChart3, label: "Portfolio Analysis" },
		{ path: "/stocks", icon: TrendingUp, label: "Stocks" },
		{ path: "/idea-generation", icon: Lightbulb, label: "Idea Generation" },
		{ path: "/investors", icon: Users, label: "Investors" },
		{ path: "/positioning", icon: MapPin, label: "Positioning" },
	];
	// const marketItems = [
	//   { path: '/news', icon: Eye, label: 'News Overview' },
	//   { path: '/market', icon: Activity, label: 'Market Tracker' },
	// ];

	const allRoutes = [...mainMenuItems];

	// Match label from pathname
	const currentLabel =
		allRoutes.find((item) => pathname?.startsWith(item.path))?.label ||
		"Dashboard";
	const handleNavigation = (path: string) => {
		router.push(path);
		setIsSheetOpen(false);
	};
	return (
	 <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#121212]">
        {/* Sidebar - hidden on small screens */}
        <div className="hidden md:block">
          <AppSidebarMain />
        </div>

        <main className="flex-1 flex flex-col">
          {/* Header */}
          <header className="px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-[#121212]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Mobile menu button */}
                <Button
                  onClick={() => setIsSheetOpen(true)}
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-[#1e1e1e] rounded-full"
                >
                  <Menu className="h-5 w-5 text-gray-300" />
                </Button>

                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-tight">
                  {currentLabel}
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                {/* Search Input */}
                <div className="relative hidden sm:block">
                  <Input
                    placeholder="Search..."
                    className="pl-4 pr-10 w-48 sm:w-56 md:w-72 h-9 sm:h-10 md:h-11 border-none bg-[#1e1e1e] text-gray-200 placeholder:text-gray-400 text-sm rounded-full shadow-none focus:ring-0 focus:outline-none"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform h-4 w-4 text-gray-400" />
                </div>

                {/* Mobile Search Icon */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="sm:hidden hover:bg-[#1e1e1e] rounded-full w-10 h-10"
                >
                  <Search className="h-5 w-5 text-gray-300" />
                </Button>

                {/* AI Assistant */}
                <Link href="/ai-chat">
                <Button className="bg-gradient-to-r cursor-pointer from-blue-500 to-pink-500 text-white text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition-all">
                  ✨ AI Assistant
                </Button>
                </Link>

                {/* Notification Bell */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative hover:bg-[#1e1e1e] rounded-full w-9 h-9"
                >
                  <Bell className="h-5 w-5 text-gray-300" />
                  <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[16px] h-[16px] bg-red-500 text-white text-[10px] font-semibold rounded-full">
                    3
                  </span>
                </Button>

                {/* Settings Icon */}
                <Settings className="h-5 w-5 hidden md:block text-gray-300 hover:text-white cursor-pointer" />

                {/* Avatar */}
                <Avatar className="h-8 w-8 sm:h-9 sm:w-9 border border-gray-700 hover:border-gray-400 transition-all duration-200 cursor-pointer">
                  <AvatarImage src="/avatar.png" alt="User" />
                  <AvatarFallback className="bg-[#1e1e1e] text-gray-300 text-xs sm:text-sm font-medium">
                    JD
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          {/* Mobile Navigation Sheet */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[350px] bg-[#121212] border-r border-gray-800 p-0"
            >
              <SheetHeader className="p-6 pb-4 border-b border-gray-800">
                <SheetTitle className="text-xl font-bold text-white text-left">
                  Navigation
                </SheetTitle>
                <SheetDescription className="text-gray-400 text-left">
                  Neural Markets
                </SheetDescription>
              </SheetHeader>

              {/* Navigation Items */}
              <div className="flex flex-col py-4">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Button
                      key={item.path}
                      variant="ghost"
                      className={`w-full justify-between h-14 px-6 rounded-none text-left font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-[#1e1e1e] text-white border-r-2 border-slate-100'
                          : 'text-gray-300 hover:bg-[#1a1a1a] hover:text-white'
                      }`}
                      onClick={() => handleNavigation(item.path)}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon
                          className={`h-5 w-5 ${
                            isActive ? 'text-white' : 'text-gray-400'
                          }`}
                        />
                        <span className="text-sm">{item.label}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-500" />
                    </Button>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>

          {/* Page Content */}
          <div className="bg-[#171717] text-white">
            {children}
            <AIAnalyticsButton />
          </div>
        </main>
      </div>
    </SidebarProvider>
	);
};

export default Sidebar;
