import { GlassPane } from "@/components/GlassPane";
import "@/styles/globals.css";
import clsx from "clsx";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

// const inter = Inter({
//   variable: "--font-inter",
// });

interface DashboardRootLayoutProps {
    children: ReactNode
}

export default function DashboardRootLayout({ children } : DashboardRootLayoutProps) {
    return (
        <html lang="en" className={clsx(
          // inter.variable,
          "dark")}>
          <head />
          <body className="h-screen w-screen candy-mesh p-6">
            <GlassPane className="w-full p-6 flex align-center container h-full mx-auto">
              {/* <Sidebar /> */}
              <main className="w-full pl-6 h-full">{children}</main>
            </GlassPane>
          </body>
        </html>
      );
}