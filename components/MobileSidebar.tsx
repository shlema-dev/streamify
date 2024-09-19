"use client";

import * as React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import SidebarUser from "./SidebarUser";
import SidebarMenu from "./SidebarMenu";

export function MobileSidebar() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline" className="h-10 w-10 rounded-full">
          <div className="h-5 w-5 flex justify-center items-center">
            <Menu />
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-screen top-0 left-0 right-auto mt-0 w-full rounded-none border-none bg-background/100">
        <div className="mx-auto w-full h-full max-w-sm flex flex-col justify-between">
          <DrawerHeader>
            <SidebarUser />
          </DrawerHeader>
          <div className="p-4 pb-0">
            <SidebarMenu />
          </div>
          <DrawerFooter className="pb-12">
            <DrawerClose asChild>
              <Button
                variant="outline"
                className="h-10 w-10 rounded-full self-center"
              >
                <div className="h-5 w-5 flex justify-center items-center">
                  <X />
                </div>
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
