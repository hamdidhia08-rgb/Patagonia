"use client";

import React, { ReactNode, useState } from "react";
import Navbar from "./Nav";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  // State partagé pour collapsed
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar fixed */}
<Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Contenu principal */}
      <div className={`flex-1 flex flex-col transition-all duration-500 ${collapsed ? "mr-[85px]" : "mr-[270px]"}`}>
        <Navbar />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
