import { ChartPie, House, Paintbrush, TrendingUp } from "lucide-react";

import { Command, CommandItem, CommandList } from "@/components/ui/command";

type MenuItem = {
  title: string;
  href: string;
  icon?: JSX.Element;
};

export default function SidebarMenu() {
  const menuList: MenuItem[] = [
    { title: "Home", href: "/", icon: <House /> },
    { title: "Metrics", href: "/", icon: <TrendingUp /> },
    { title: "Trends", href: "/", icon: <ChartPie /> },
    { title: "Custom", href: "/", icon: <Paintbrush /> },
  ];

  return (
    <Command className="bg-background text-foreground hover:bg rounded-lg shadow-md grow overflow-visible">
      <CommandList className="overflow-visible">
        {menuList.map((menu: any, key: number) => (
          <CommandItem key={key} className={`my-2 flex gap-2`} >
            {menu.icon}
            {menu.title}
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  );
}
