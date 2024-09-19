import { getInitials } from "@/lib/utils";

export default function SidebarUser() {
  const initials = getInitials("Shlema Goldsmith");

  return (
    <div className="flex flex-col justify-center items-center gap-2 border-b border-neutral-700 py-4">
      <div className="min-h-12 min-w-12 rounded-full bg-primary flex justify-center items-center font-bold text-lg">
        {initials}
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold">Shlema Goldsmith</p>
        <p className="text-neutral-400">shlema.dev@gmail.com</p>
      </div>
    </div>
  );
}
