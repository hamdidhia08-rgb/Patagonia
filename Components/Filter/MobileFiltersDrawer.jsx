"use client";

import { useState } from "react";
import FiltersSidebar from "./FiltersSidebar";
import { Filter, X } from "lucide-react";

export default function MobileFiltersDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ------ Bouton flottant mobile ------ */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed bottom-5 right-0 z-40 
          bg-orange-500 text-white h-12 w-14
          flex items-center justify-center
          rounded-l-2xl
          shadow-xl active:scale-95
          md:hidden
        "
      >
        <Filter className="w-6 h-6" />
      </button>

      {/* ------ Overlay foncé ------ */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        ></div>
      )}

      {/* ------ Drawer gauche ------ */}
      <div
        className={`
          fixed top-0 left-0 h-full w-[85%] max-w-[340px]
          bg-white shadow-2xl z-50 
          transform transition-transform duration-300 
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
      >
        {/* Header du drawer */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <p className="text-lg font-semibold text-gray-800">Filters</p>

          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Contenu → ton FiltersSidebar */}
        <div className="overflow-y-auto h-[calc(100vh-64px)] p-4">
          <FiltersSidebar />
        </div>
      </div>
    </>
  );
}
