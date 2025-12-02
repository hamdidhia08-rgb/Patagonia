'use client'

import React from 'react';
import { Inter } from "next/font/google";
import { Check } from 'lucide-react';

const inter = Inter({ subsets: ["latin"] });

interface Step {
  id: number;
  name: string;
  status: 'complete' | 'current' | 'upcoming';
}

const steps: Step[] = [
  { id: 1, name: 'Select a Date', status: 'complete' },
  { id: 2, name: 'Choose Package', status: 'complete' },
  { id: 3, name: 'Payment', status: 'current' },
];

const Stepper: React.FC = () => {
  return (
    <div className={`flex items-center justify-between sm:justify-start sm:space-x-4 ${inter.className}`}>
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          {/* Conteneur de l'étape */}
          <div className="flex items-center">
            {/* Cercle */}
            {step.status === 'complete' ? (
              <div className="flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-[#18C37C] shadow-sm">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" aria-hidden="true" />
              </div>
            ) : (
              <div
                className={`flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 rounded-full
                  ${step.status === 'current'
                      ? 'border border-[#18C37C] text-[#18C37C] bg-white'
                      : 'text-gray-400 bg-white'
                  }
                  text-xs sm:text-sm font-medium`}
              >
                {step.id}
              </div>
            )}

            {/* Texte de l'étape */}
            <span
              className={`ml-2 text-xs sm:text-base whitespace-nowrap
                ${step.status === 'complete' ? 'text-gray-600' : step.status === 'current' ? 'text-gray-600' : 'text-gray-400'}
              `}
            >
              {step.name}
            </span>
          </div>

          {/* Ligne séparatrice */}
          {index !== steps.length - 1 && (
            <div className="flex-1 w-full flex justify-center">
              <div className="h-px w-5 sm:w-14 bg-gray-300"></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
