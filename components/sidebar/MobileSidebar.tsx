import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import SidebarUser from "./SidebarUser";
import SidebarMenu from "./SidebarMenu";

export function MobileSidebar() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="h-10 w-10 rounded-full bg-card border-neutral-100"
        >
          <div className="h-5 w-5 flex justify-center items-center text-neutral-100">
            <Menu />
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-screen top-0 left-0 right-auto mt-0 w-full rounded-none border-none bg-card">
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
                className="h-10 w-10 rounded-full border-card-foreground self-center bg-transparent"
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
