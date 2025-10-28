"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  ChevronLeft,
  ChevronDown,
  LayoutDashboard,
  Users,
  ClipboardList,
  CreditCard,
  FileText,
  Calendar,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

// Police arabe : Cairo
import { Cairo } from "next/font/google";
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
});

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const toggleSidebar = () => {
    setActiveDropdown(null);
    setCollapsed((prev) => !prev);
  };

  // Masquer automatiquement la sidebar sur petits écrans
  useEffect(() => {
    if (window.innerWidth <= 1024) setCollapsed(true);
  }, [setCollapsed]);

  // Navigation principale
  const primaryNav = [
    { label: "لوحة التحكم", icon: LayoutDashboard },
    {
      label: "المهام",
      icon: ClipboardList,
      dropdown: ["المهام الحالية", "مهام الأسبوع", "تاريخ الانتهاء"],
    },
    { label: "الإشعارات", icon: Bell, badge: 3 },
    { label: "المدفوعات", icon: CreditCard },
    { label: "الفواتير", icon: FileText },
    {
      label: "الموظفون",
      icon: Users,
      dropdown: ["قائمة الموظفين", "إضافة موظف جديد"],
    },
    { label: "التقويم", icon: Calendar },
    { label: "الإعدادات", icon: Settings },
  ];

  const secondaryNav = [
    { label: "الدعم", icon: HelpCircle },
    { label: "تسجيل الخروج", icon: LogOut },
  ];

  return (
    <>
      {/* Bouton mobile */}
      <button
        className="fixed top-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-[#151A2D] text-white lg:hidden"
        onClick={toggleSidebar}
        aria-label="تبديل القائمة"
        title="تبديل القائمة"
      >
        <Menu />
      </button>

      <aside
        dir="rtl"
        className={`fixed top-0 right-0 z-40 h-screen bg-[#151A2D] text-white transition-all duration-500 ${cairo.className} ${
          collapsed ? "w-[85px]" : "w-[270px]"
        }`}
      >
        {/* Header */}
        <header className="relative flex items-center justify-between px-5 py-6">
          <Link href="#" className="flex-shrink-0">
            <Image
              src="/images/my_logo.jpg"
              alt="الشعار"
              width={46}
              height={46}
              className="rounded-full object-contain"
            />
          </Link>

          <button
            onClick={toggleSidebar}
            className="absolute left-5 flex h-9 w-9 items-center justify-center rounded-md bg-[#EEF2FF] text-[#151A2D] transition hover:bg-[#d9e1fd]"
            aria-label={collapsed ? "فتح القائمة" : "إغلاق القائمة"}
            title={collapsed ? "فتح القائمة" : "إغلاق القائمة"}
          >
            <ChevronLeft
              className={`h-6 w-6 transition-transform ${
                collapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </header>

        {/* Navigation */}
        <nav className="relative h-[calc(100vh-120px)] flex flex-col justify-between overflow-y-auto pb-10">
          <ul className="flex flex-col gap-1 px-3">
            {primaryNav.map((item) => (
              <li key={item.label} className="relative">
                <button
                  onClick={() =>
                    item.dropdown ? toggleDropdown(item.label) : null
                  }
                  className={`flex w-full items-center gap-3 rounded-md px-4 py-2 text-sm transition ${
                    activeDropdown === item.label
                      ? "bg-[#EEF2FF] text-[#151A2D]"
                      : "hover:bg-[#EEF2FF] hover:text-[#151A2D]"
                  }`}
                >
                  <div className="relative">
                    <item.icon className="h-5 w-5" />
                    {item.badge && (
                      <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white font-bold">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {!collapsed && (
                    <>
                      <span>{item.label}</span>
                      {item.dropdown && (
                        <ChevronDown
                          className={`ml-auto h-4 w-4 transition-transform ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </>
                  )}
                </button>

                {item.dropdown && (
                  <ul
                    className={`overflow-hidden transition-all duration-500 ${
                      activeDropdown === item.label ? "max-h-40" : "max-h-0"
                    } ${
                      collapsed
                        ? "absolute right-full top-0 bg-[#151A2D] rounded-lg shadow-lg"
                        : ""
                    }`}
                  >
                    {!collapsed && (
                      <li className="px-4 py-1 text-xs text-gray-400">
                        {item.label}
                      </li>
                    )}
                    {item.dropdown?.map((link) => (
                      <li key={link}>
                        <Link
                          href="#"
                          className="block rounded-md px-5 py-2 text-sm text-gray-300 hover:bg-[#EEF2FF]/10"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Navigation secondaire */}
          <ul className="flex flex-col gap-1 px-3">
            {secondaryNav.map((item) => (
              <li key={item.label}>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-md px-4 py-2 text-sm transition hover:bg-[#EEF2FF] hover:text-[#151A2D]"
                >
                  <item.icon className="h-5 w-5" />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
