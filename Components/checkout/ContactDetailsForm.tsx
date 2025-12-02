import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

interface ContactDetailsFormProps {}

const ContactDetailsForm: React.FC<ContactDetailsFormProps> = () => {
  const InputField: React.FC<{ label: string; id: string; value: string; type?: string }> = ({ label, id, value, type = 'text' }) => (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-medium text-gray-700 mb-1">
        {label} <span className="text-red-600">*</span>
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        className="block w-full rounded-md border border-gray-300 py-3 px-3 text-gray-700 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
        readOnly
      />
    </div>
  );

  return (
    <div className={`mx-auto bg-white ${inter.className} py-4`}>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Contact details</h2>
        <p className="mt-1 text-sm text-gray-500">
          We'll use this information to send booking confirmations and updates.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
        <InputField label="First name" id="firstName" value="dfdfdf" />
        <InputField label="Last name" id="lastName" value="fdfd" />
        <div className="sm:col-span-2 flex flex-col">
          <label htmlFor="country" className="text-sm font-medium text-gray-700 mb-1">
            Country / Region <span className="text-red-600">*</span>
          </label>
          <div className="relative">
           <select
            id="country"
            name="country"
            value="US"
            className="block w-full appearance-none rounded-md border border-gray-300 py-3 px-3 text-gray-700 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm pr-10"
            disabled
          >
            <option value="US">Turkey (TK)</option>
          </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <InputField label="Phone" id="phone" value="12345678" type="tel" />
        <InputField label="Email address" id="email" value="dfdfdf@gmail.com" type="email" />
      </div>
    </div>
  );
};

export default ContactDetailsForm;
