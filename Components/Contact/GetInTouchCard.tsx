"use client";

import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const GetInTouchCard: React.FC = () => {
  return (
    <div
      className={`max-w-md w-full h-full p-6 bg-white rounded-lg shadow-sm ${inter.className} flex flex-col`}
    >
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-900 mb-2">
        Get in touch
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
        We love to chat about your travel plans and are happy to talk if you have
        any questions.
      </p>

      {/* Contact info */}
      <div className="space-y-4">
        {/* Phone */}
        <div className="flex items-center gap-4 text-gray-700 text-sm">
          <Image
            src="/images/icon_contact/call-icon.svg"
            alt="Phone"
            width={38}
            height={38}
            className="rounded-full bg-gray-100 p-2"
          />
          <span className="font-medium">+90 538 507 39 47</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 text-gray-700 text-sm">
          <Image
            src="/images/icon_contact/mail-icon.svg"
            alt="Mail"
            width={40}
            height={40}
            className="rounded-full bg-gray-100 p-2"
          />
          <span className="font-medium">
            tourismpatagonia@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchCard;
