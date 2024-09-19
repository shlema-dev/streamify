import { getInitials } from "@/lib/utils";

export default function SidebarUser() {
  const initials = getInitials("Shlema Goldsmith");

  return (
    <div className="flex flex-col justify-center items-center gap-2 border-b border-popover-foreground/20 py-4">
      <div className="min-h-12 min-w-12 rounded-full bg-primary flex justify-center items-center font-bold text-lg">
        {initials}
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-popover-foreground">Shlema Goldsmith</p>
        <p className="text-popover-foreground/60">shlema.dev@gmail.com</p>
      </div>
    </div>
  );
}
