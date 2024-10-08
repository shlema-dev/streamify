import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import { MobileSidebar } from "@/components/sidebar/MobileSidebar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex items-start antialiased`}>
        <div className="xl:hidden w-full fixed z-10 top-0 py-4 pl-6 pr-10 flex justify-between items-center bg-popover">
          <h1 className="font-bold text-2xl text-primary">Streamify</h1>
          <MobileSidebar />
        </div>
        <div className="hidden xl:flex min-w-[300px] min-h-screen">
          <Sidebar />
        </div>
        <main className="max-w-7xl mx-auto h-full p-4">{children}</main>
      </body>
    </html>
  );
}
