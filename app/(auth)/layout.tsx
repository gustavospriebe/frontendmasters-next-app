import { GlassPane } from "@/components/GlassPane";
import "@/styles/globals.css";
import { Inter } from "@/next/font/google";
import { ReactNode } from "react";

// const inter = Inter({
//   variable: "--font-inter",
// });

interface AuthRootLayoutProps {
    children: ReactNode
}

export default function AuthRootLayout({ children } : AuthRootLayoutProps) {
  return (
    <html lang="en" >
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}