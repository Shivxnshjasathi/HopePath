"use client";

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Video,
  Mic,
  HeartPulse,
  Sparkles,
  BookText,
  Settings,
  LogOut,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logo } from "@/components/icons";
import { Button } from "../ui/button";

type AppShellProps = {
  children: React.ReactNode;
  title?: string;
};

export default function AppShell({ children, title }: AppShellProps) {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/meetings", label: "Virtual Meetings", icon: Video },
    { href: "/support-groups", label: "Support Groups", icon: Mic },
    { href: "/crisis-support", label: "Crisis Support", icon: HeartPulse },
    { href: "/motivation", label: "Motivation", icon: Sparkles },
    { href: "/blog", label: "Community Blog", icon: BookText },
  ];

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Logo className="w-6 h-6 text-primary" />
            <span className="text-lg font-semibold">PathFinder</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  href={item.href}
                  isActive={pathname === item.href}
                  asChild
                >
                  <a href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://placehold.co/40x40.png" alt="User avatar" data-ai-hint="person" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
                <p className="font-semibold text-sm truncate">User Name</p>
                <p className="text-xs text-muted-foreground truncate">user@email.com</p>
            </div>
            <Button variant="ghost" size="icon"><LogOut /></Button>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-semibold">{title}</h1>
          <SidebarTrigger className="md:hidden" />
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
