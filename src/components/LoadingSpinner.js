import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
      {/* Image placeholder */}
      <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
      </div>
      
      {/* Content placeholders */}
      <div className="space-y-4">
        {/* Title */}
        <div className="h-6 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
        </div>
        
        {/* Subtitle */}
        <div className="h-4 bg-gradient-to-br from-gray-200 to-gray-300 rounded w-2/3 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
        </div>
        
        {/* Description */}
        <div className="h-3 bg-gradient-to-br from-gray-200 to-gray-300 rounded w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="h-4 bg-gradient-to-br from-gray-200 to-gray-300 rounded relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
          </div>
          <div className="h-4 bg-gradient-to-br from-gray-200 to-gray-300 rounded relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
          </div>
        </div>
        
        {/* Price section */}
        <div className="flex justify-between items-center mt-6">
          <div className="h-8 w-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
          </div>
          <div className="h-6 w-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
          </div>
        </div>
        
        {/* Button */}
        <div className="h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mt-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;