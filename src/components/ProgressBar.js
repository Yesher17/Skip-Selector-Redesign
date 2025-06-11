import React from 'react';

import { CheckCircle } from 'lucide-react';

const ProgressBar = () => {
  const steps = ['Postcode', 'Waste Type', 'Select Skip', 'Permit Check', 'Choose Date', 'Payment'];
  const currentStep = 2; // 0-based index, so step 3 (Select Skip) is active

  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-4 left-0 w-full h-1 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
        
        {/* Step Indicators */}
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isPending = index > currentStep;

          return (
            <div key={step} className="relative flex flex-col items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold z-10 transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                    : isCurrent 
                    ? 'bg-white border-4 border-blue-500 text-blue-600' 
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle size={16} />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span 
                className={`mt-2 text-xs font-medium transition-colors duration-300 ${
                  isCompleted || isCurrent ? 'text-blue-600' : 'text-gray-500'
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;