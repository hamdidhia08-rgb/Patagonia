"use client";

import { useState } from "react";
import { Sun, Moon, Bell, Grid, Search } from "lucide-react";

// Police arabe Cairo
import { Cairo } from "next/font/google";
const cairo = Cairo({ subsets: ["arabic"], weight: ["400", "500", "700"] });

export default function Navbar() {
  const [notifications, setNotifications] = useState(3); // badge dynamique

  return (
    <div
      dir="rtl"
      className={`${cairo.className} flex items-center justify-between bg-white px-6 py-3 shadow-md rounded-lg z-30`}
    >
      {/* Recherche */}
      <div className="flex items-center gap-3 w-full max-w-md">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="ابحث [CTRL + K]"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Icônes */}
      <div className="flex items-center gap-5">
        {/* Langue */}
        <button className="p-2 rounded-md hover:bg-gray-100" aria-label="تغيير اللغة">
          🌐
        </button>

        {/* Mode */}
        <button className="p-2 rounded-md hover:bg-gray-100" aria-label="تبديل الوضع">
          <Moon className="h-5 w-5 text-gray-700" />
        </button>

        {/* Applications / Menu */}
        <button className="p-2 rounded-md hover:bg-gray-100" aria-label="فتح قائمة التطبيقات">
          <Grid className="h-5 w-5 text-gray-700" />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button className="p-2 rounded-md hover:bg-gray-100" aria-label="الإشعارات">
            <Bell className="h-5 w-5 text-gray-700" />
          </button>
          {notifications > 0 && (
            <span className="absolute -top-1 -left-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white font-bold">
              {notifications}
            </span>
          )}
        </div>

        {/* Avatar */}
        <div className="relative">
          <img
            src="/images/user33.png"
            alt="صورة المستخدم"
            className="h-9 w-9 rounded-full object-cover border-2 border-white"
          />
          <span className="absolute bottom-0 left-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white" />
        </div>
      </div>
    </div>
  );
}
