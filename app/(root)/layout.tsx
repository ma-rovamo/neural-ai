import React from "react";
import {
  BarChart3,
  TrendingUp,
  Lightbulb,
  Users,
  MapPin,
  Eye,
  Activity,
  Search,
  Bell,
  User,
  Menu,
} from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebarMain } from "@/components/AppSidebarr";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Sidebar from "@/components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
   <>
  <Sidebar children={children}/>
   </>
  );
};

export default Layout;
