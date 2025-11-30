"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Phone, User, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function MobileDrawer({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* DRAWER */}
          <motion.div
            className="fixed top-0 left-0 h-full w-[78%] sm:w-[60%] 
            bg-white shadow-2xl z-[1000] p-6 flex flex-col border-r border-gray-200"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 140, damping: 20 }}
          >

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center 
              bg-gray-100 border border-gray-300 rounded-full text-gray-700"
            >
              <X size={22} />
            </button>

            {/* LOGO */}
            <div className="mb-10">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logoi.png"
                  alt="Patagonia Logo"
                  width={140}
                  height={60}
                  priority
                />
              </Link>
            </div>

            {/* NAVIGATION LINKS */}
            <nav className="flex flex-col gap-6 text-lg font-semibold text-gray-800">
              <Link href="/" onClick={onClose} className="hover:text-orange-500 transition">Home</Link>
              <Link href="/Service" onClick={onClose} className="hover:text-orange-500 transition">Services</Link>
              <Link href="/tours" onClick={onClose} className="hover:text-orange-500 transition">Tours</Link>
              <Link href="/blog" onClick={onClose} className="hover:text-orange-500 transition">Blogs</Link>
              <Link href="/about" onClick={onClose} className="hover:text-orange-500 transition">About</Link>
              <Link href="/contact" onClick={onClose} className="hover:text-orange-500 transition">Contact</Link>
            </nav>

            {/* LINE */}
            <div className="w-full h-[1px] bg-gray-200 my-8"></div>

            {/* PHONE */}
            <div className="flex items-center gap-3 text-gray-800 mb-4">
              <div className="w-10 h-10 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center">
                <Phone size={20} className="text-gray-700" />
              </div>
              <span className="font-medium text-lg">+90 538 507 39 47</span>
            </div>

            {/* LANGUAGE */}
            <div className="flex items-center gap-2 text-gray-800 mb-6">
              <span className="text-gray-600">Language:</span>
              <select
                defaultValue="en"
                className="bg-white border border-gray-300 px-3 py-2 rounded-lg text-gray-700"
              >
                <option value="en" className="text-black">English</option>
                <option value="ar" className="text-black">العربية</option>
                <option value="fr" className="text-black">Français</option>
              </select>
            </div>

            {/* CART & LOGIN */}
            <div className="flex items-center gap-4 mt-auto">
              {/* CART */}
              <Link
                href="/cart"
                onClick={onClose}
                className="relative w-12 h-12 rounded-full bg-gray-100 border border-gray-300 
                flex items-center justify-center"
              >
                <ShoppingCart size={22} className="text-gray-700" />

                {/* Badge */}
                <span
                  className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px]
                  w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-lg"
                >
                  2
                </span>
              </Link>

              {/* LOGIN */}
              <button
                className="px-5 py-2 rounded-full bg-gray-100 border border-gray-300 text-gray-700
                font-semibold hover:bg-gray-200 transition"
              >
                <User size={18} className="inline mr-2" /> Login
              </button>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
