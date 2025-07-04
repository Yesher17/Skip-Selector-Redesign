import React, { useState, useEffect } from 'react';
import { Truck, Clock, Shield, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import ProgressBar from './components/ProgressBar';
import SkipCard from './components/SkipCard';
import LoadingSpinner from './components/LoadingSpinner';
import { useSkipData } from './hooks/useSkipData';
import './App.css';

function App() {
  const { skips, loading, error } = useSkipData('NR32', 'Lowestoft');
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleSkipSelect = (skipId) => {
    setSelectedSkip(skipId);
  };

  const handleContinue = () => {
    if (selectedSkip) {
      alert(`Proceeding with ${skips.find(s => s.id === selectedSkip)?.size} yard skip!`);
      // Here you would typically navigate to the next step
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <ProgressBar />
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Perfect Skip Size</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Loading available options...</p>
          </div>
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Skips</h1>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <ProgressBar />
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Choose Your Perfect Skip Size
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select the skip size that best fits your project needs. All prices include VAT and come with our 
            <span className="font-semibold text-blue-600"> 14-day hire period</span> guarantee.
          </p>
        </div>

        {/* Skip Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {skips.map((skip) => (
            <SkipCard 
              key={skip.id} 
              skip={skip} 
              isSelected={selectedSkip === skip.id}
              isHovered={hoveredCard === skip.id}
              onSelect={() => handleSkipSelect(skip.id)}
              onHover={setHoveredCard}
            />
          ))}
        </div>

        {/* Continue Button */}
        {selectedSkip && (
          <div className="text-center">
            <button 
              onClick={handleContinue}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-12 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              Continue to Next Step
              <ArrowRight className="inline ml-2" size={24} />
            </button>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Why Choose Our Skip Hire Service?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Fast Delivery</h4>
              <p className="text-gray-600 text-sm">Same day or next day delivery available across all locations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Fully Licensed</h4>
              <p className="text-gray-600 text-sm">All necessary permits and insurance coverage included</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Best Price Promise</h4>
              <p className="text-gray-600 text-sm">Competitive pricing with no hidden fees or surprises</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;