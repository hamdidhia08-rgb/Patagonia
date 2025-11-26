"use client";

import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white">
      {/* PARTIE HAUT : LOGO */}
      <div className="w-full py-3  flex justify-center items-center">
        <img
          src="/images/best_logo.png" // remplace par ton logo
          alt="Logo"
          className="h-10 object-contain"
        />
      </div>

      {/* NAV BAR */}
      <div className="flex flex-col">
        {/* Ligne grise qui commence au premier item et finit à la fin du search */}
        <div className="px-10 lg:px-[200px] flex items-center justify-between  border-b border-gray-300"></div>

        <nav className="bg-white h-[70px] px-10 lg:px-[200px] flex items-center justify-between shadow-sm">
          {/* NAV ITEMS */}
          <ul
            className={`nav-items flex flex-1 lg:flex lg:static lg:flex-row lg:bg-transparent
              lg:h-auto lg:w-auto lg:translate-x-0 lg:opacity-100
              fixed top-[70px] left-0 w-full h-full text-center bg-white 
              transition-all duration-300
            `}
          >
            {["Home", "Tours", "Hotels", "Transports", "Restaurants", "News", "Contact"].map(
              (item, index) => (
                <li key={item} className="list-none mx-[18px] my-8 lg:my-0">
                  <a
                    className={`text-[15.5px] transition 
                    ${
                      index === 0
                        ? "text-gray-800 font-normal"
                        : "text-gray-700 hover:text-black"
                    }
                  `}
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* SEARCH INPUT */}
          <div className="relative w-[230px]">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search..."
              className="
                w-full h-[40px] bg-gray-200 rounded-full  
                pl-10 pr-3
                border border-gray-400  
                text-gray-700 text-[16px]
                outline-none
                placeholder-gray-500
                focus:border-gray-500
              "
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
