"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Landmark, CreditCard, CheckCheck } from "lucide-react";
import { Inter } from "next/font/google";
import { Card, CardContent } from "@/Components/ui/card";

const inter = Inter({ subsets: ["latin"] });

interface PaymentMethod {
  id: string;
  label: string;
  icon: React.ReactNode;
  image?: string;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: "later",
    label: "Book Now Pay Later",
    icon: <CreditCard className="w-7 h-7 text-gray-500 mr-5" />, 
  },
  {
    id: "paypal",
    label: "Paypal Standard",
    icon: (
      <Image
        src="/images/pay/paypal-icon.svg"
        alt="Paypal"
        width={70}
        height={70}
      />
    ),
  },
   {
    id: "mastercard",
    label: "mastercard Standard",
    icon: (
      <Image
        src="/images/pay/mastar-card-icon.svg"
        alt="Paypal"
        width={70}
        height={70}
      />
    ),
  },
  {
    id: "Visa",
    label: "Visa card Standard",
    icon: (
      <Image
        src="/images/pay/visa-icon.svg"
        alt="Paypal"
        width={65}
        height={65}
      />
    ),
  },
  {
    id: "bank",
    label: "Bank Transfer",
    icon: <Landmark className="w-7 h-7 text-gray-500 mr-5" />, 
  }
];

const PaymentSection: React.FC = () => {
  const [selected, setSelected] = useState<string>("paypal");
  const [agree, setAgree] = useState(false);

  return (
    <div className={`${inter.className} w-full  mx-auto p-6 bg-white rounded-2xl shadow-sm`}>      
      <h2 className="text-2xl font-semibold mb-6">Payment</h2>

      <Card className="border border-green-200 mb-4 bg-green-50 py-2">
      <CardContent className="flex items-center gap-2 p-2 text-green-500">
      <ShieldCheck className="w-6 h-6" />
      <p className="font-normal text-green-600/80 text-sm">This is a secure and SSL encrypted payment. Your credit card details are safe!</p>
      </CardContent>
      </Card>

      <div className="border rounded-xl divide-y">        
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition"
          >            
            <div className="flex items-center gap-3">              
              <input
                type="radio"
                name="payment"
                checked={selected === method.id}
                onChange={() => setSelected(method.id)}
                className="w-4 h-4 text-orange-500 focus:ring-orange-500"
              />
              <span className="text-gray-700 font-medium">{method.label}</span>
            </div>
            <div>{method.icon}</div>
          </label>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-6">        
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="w-4 h-4 border-gray-300 rounded"
        />
        <p className="text-gray-600 text-sm">          
          Check the box to confirm you've read and agree to our 
          <a className="text-orange-500 underline ml-1">Terms and Conditions</a> and 
          <a className="text-orange-500 underline ml-1">Privacy Policy</a>.
        </p>
      </div>

      <button
        disabled={!agree}
        className={`w-full mt-6 py-3 rounded-full text-white font-semibold shadow-md transition text-sm
        ${agree ? "bg-orange-500 hover:scale-[1.02] active:scale-[0.98]" : "bg-orange-300 cursor-not-allowed"}`}
      >
        Pay & Confirm Booking
      </button>
    </div>
  );
};

export default PaymentSection;
