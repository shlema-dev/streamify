import SidebarMenu from "./SidebarMenu";
import SidebarUser from "./SidebarUser";

export default function Sidebar() {
  return (
    <div className="fixed w-[300px] min-h-screen flex flex-col gap-4 p-4">
      <h1 className="text-center font-bold text-xl -mb-4">Streamify</h1>
      <SidebarUser />
      <SidebarMenu />
    </div>
  );
}
