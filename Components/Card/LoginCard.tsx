"use client";

import * as React from "react";
import { Eye, EyeOff, Facebook, Twitter } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Checkbox } from "@/Components/ui/checkbox";
import Link from "next/link";

export default function LoginCard() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className=" bg-gray-100 flex  justify-center pt-10 px-4 pb-16">
         <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Login</h1>
          <p className="text-sm text-gray-500 mt-1">
            Login into your pages account
          </p>
        </div>

        {/* Email */}
        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            className="h-11"
          />

          {/* Password */}
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              className="h-11 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <Checkbox />
              Keep me logged in
            </label>
            <Link
              href="#"
              className="text-blue-500 hover:underline"
            >
              Forgot Password
            </Link>
          </div>

          {/* Login button */}
          <Button className="w-full h-11 bg-black text-white hover:bg-black/90">
            Log in
          </Button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-sm text-gray-400">Or Login With</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social buttons */}
        <div className="grid grid-cols-3 gap-3">
          <Button
            variant="secondary"
            className="bg-red-500 text-white hover:bg-red-600"
          >
            G+
          </Button>
          <Button
            variant="secondary"
            className="bg-sky-500 text-white hover:bg-sky-600"
          >
            <Twitter className="mr-2 h-4 w-4" /> Twitter
          </Button>
          <Button
            variant="secondary"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            <Facebook className="mr-2 h-4 w-4" /> Facebook
          </Button>
        </div>

        {/* Register */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="#" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
