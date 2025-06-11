import React, { useState, useEffect } from 'react';
import { Truck, Clock, Shield, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import ProgressBar from './ProgressBar';
import SkipCard from './SkipCard';
import LoadingSpinner from './LoadingSpinner';
import { fetchSkipsByLocation } from '../services/api';

const SkipSelectorRedesign = () => {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const loadSkips = async () => {
      try {
        setLoading(true);
        // Try to fetch from real API, fallback to mock data
        let skipData;
        try {
          skipData = await fetchSkipsByLocation('NR32', 'Lowestoft');
        } catch (apiError) {
          console.log('Using fallback data due to API error:', apiError);
          // Fallback mock data
          skipData = [
            {"id":17933,"size":4,"hire_period_days":14,"price_before_vat":278,"vat":20,"allowed_on_road":true,"allows_heavy_waste":true},
            {"id":17934,"size":6,"hire_period_days":14,"price_before_vat":305,"vat":20,"allowed_on_road":true,"allows_heavy_waste":true},
            {"id":17935,"size":8,"hire_period_days":14,"price_before_vat":375,"vat":20,"allowed_on_road":true,"allows_heavy_waste":true},
            {"id":17936,"size":10,"hire_period_days":14,"price_before_vat":400,"vat":20,"allowed_on_road":false,"allows_heavy_waste":false},
            {"id":17937,"size":12,"hire_period_days":14,"price_before_vat":439,"vat":20,"allowed_on_road":false,"allows_heavy_waste":false},
            {"id":17938,"size":14,"hire_period_days":14,"price_before_vat":470,"vat":20,"allowed_on_road":false,"allows_heavy_waste":false}
          ];
        }
        
        // Simulate loading delay for better UX
        setTimeout(() => {
          setSkips(skipData);
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error('Failed to load skips:', error);
        setLoading(false);
      }
    };

    loadSkips();
  }, []);

  const handleSkipSelect = (skipId) => {
    setSelectedSkip(skipId);
  };

  const handleContinue = () => {
    if (selectedSkip) {
      alert(`Selected skip ID: ${selectedSkip}. Proceeding to next step...`);
      // Here you would navigate to the next step
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <LoadingSpinner key={i} />
            ))}
          </div>
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
              onSelect={handleSkipSelect}
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
};

export default SkipSelectorRedesign;