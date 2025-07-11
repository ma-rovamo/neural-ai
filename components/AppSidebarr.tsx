"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import {
  BarChart3,
  Briefcase,
  Home,
  TrendingUp,
  User,
  Settings,
  HelpCircle,
  Building
} from "lucide-react";

const navigationItems = [
  { title: "Portfolio Analysis", icon: BarChart3, href: "/" },
  { title: "Stocks", icon: TrendingUp, href: "/stocks" },
  { title: "Idea Generation", icon: Briefcase, href: "/idea-generation" },
  { title: "Investors", icon: Building, href: "/investors" },
  { title: "Positioning", icon: Home, href: "/positioning" }
];

const marketItems = [
  { title: "Flows Overview", icon: BarChart3, href: "/flows-overview" },
  { title: "Market Tracker", icon: TrendingUp, href: "/market-tracker" }
];

export function AppSidebarMain() {
  const pathname = usePathname();

  return (
    <Sidebar className="w-64 h-screen  overflow-hidden ">
      <SidebarContent className="flex flex-col h-full  bg-[#121111] p-4 space-y-4 overflow-hidden">
        
        {/* Logo */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-white">Neural Markets</h1>
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                          isActive
                            ? "text-white font-semibold"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        <item.icon
                          className={`h-5 w-5 ${
                            isActive ? "text-white" : "text-gray-400"
                          }`}
                        />
                        <span className="text-sm">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Market Section */}
        <SidebarGroup>
          <p className="text-xs text-gray-500 px-3 pt-4 pb-2 tracking-wide uppercase">
            Market
          </p>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {marketItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                          isActive
                            ? "text-white font-semibold"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        <item.icon
                          className={`h-5 w-5 ${
                            isActive ? "text-white" : "text-gray-400"
                          }`}
                        />
                        <span className="text-sm">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="flex-grow" />

        {/* Optional Bottom Nav */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {[{ title: "Settings", icon: Settings, href: "/settings" }, { title: "Help Center", icon: HelpCircle, href: "/help" }].map((item) => {
                const isActive = pathname === item.href;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                          isActive
                            ? "text-white font-semibold"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        <item.icon
                          className={`h-5 w-5 ${
                            isActive ? "text-white" : "text-gray-400"
                          }`}
                        />
                        <span className="text-sm">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
