import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

interface AdditionalInformationFormProps {}

const AdditionalInformationForm: React.FC<AdditionalInformationFormProps> = () => {
  return (
    <div className={`mx-auto bg-white ${inter.className}  h-full flex flex-col`}>
      
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Additional information</h2>
        <p className="mt-1 text-sm text-gray-500">
          If you have any special needs, please enter them here.
        </p>
      </div>

      <div className="flex-1">
        <label htmlFor="order-notes" className="text-sm font-medium text-gray-700 mb-1 block">
          Order notes (optional)
        </label>
        <textarea
          id="order-notes"
          name="order-notes"
          rows={6}
          placeholder="Notes about your order, e.g. special notes for delivery."
          className="block w-full rounded-md border border-gray-300 py-3 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-red-500 focus:ring-red-500 sm:text-sm resize-none"
        ></textarea>
      </div>

    </div>
  );
};

export default AdditionalInformationForm;
