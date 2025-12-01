import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Calendar, Clock, Users } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

const TourBookingSummary: React.FC = () => {
  return (
    <div className={`max-w-md w-full h-full p-6 bg-white rounded-lg shadow-sm ${inter.className} flex flex-col justify-between`}>
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-20 h-20 relative flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src="/images/cappadocia3.jpg"
            alt="Grand Palace, Wat Pho, and Wat Arun Guided Tour"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="flex-1">
          <p className="text-base font-semibold text-gray-900">
            Grand Palace, Wat Pho, and Wat Arun Guided Tour
          </p>
          <p className="text-sm text-gray-600">
            Grand Palace, Wat Pho, and Wat Arun Guided Tour
          </p>
        </div>
      </div>

      <div className="space-y-2 pb-4 border-b border-gray-200">
        <div className="flex items-center text-gray-700 text-sm">
          <Calendar className="w-4 h-4 text-gray-500 mr-2" />
          <span>Dec 21, 2025</span>
        </div>
        <div className="flex items-center text-gray-700 text-sm">
          <Clock className="w-4 h-4 text-gray-500 mr-2" />
          <span>9:00 AM</span>
        </div>
        <div className="flex items-center text-gray-700 text-sm">
          <Users className="w-4 h-4 text-gray-500 mr-2" />
          <span>0 Adult, 0 Children</span>
        </div>
      </div>

      <div className="pt-4 space-y-3 flex-1 flex flex-col justify-end">
        <div className="flex justify-between items-center text-gray-700 text-sm">
          <span>Price</span>
          <span className="font-medium text-gray-900">$0.00</span>
        </div>

        <div>
          <button className="text-sm text-red-600 hover:text-red-700">
            Enter Promo Code
          </button>
        </div>

        <div className="flex justify-between items-center text-gray-700 text-sm border-t border-gray-200 pt-3">
          <span>Subtotal</span>
          <span className="font-medium text-gray-900">$0.00</span>
        </div>

        <div className="flex justify-between items-center text-gray-900 text-base font-bold pt-2">
          <span>Total</span>
          <span>$0.00</span>
        </div>
      </div>
    </div>
  );
};

export default TourBookingSummary;
