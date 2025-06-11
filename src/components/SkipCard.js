import React from 'react';
import { Truck, Clock, Shield, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const SkipCard = ({ skip, isSelected, isHovered, onSelect, onHover }) => {
  const calculatePrice = (priceBeforeVat, vat) => {
    return Math.round(priceBeforeVat * (1 + vat / 100));
  };

  const getSkipRecommendation = (size) => {
    const recommendations = {
      4: { title: "Perfect for Small Projects", desc: "Ideal for bathroom renovations, small clear-outs" },
      6: { title: "Most Popular Choice", desc: "Great for kitchen renovations, medium clear-outs" },
      8: { title: "Heavy Duty Option", desc: "Perfect for garden projects, larger renovations" },
      10: { title: "Commercial Grade", desc: "Suitable for construction projects" },
      12: { title: "Large Scale Projects", desc: "Major renovations and commercial use" },
      14: { title: "Maximum Capacity", desc: "Large construction and commercial projects" }
    };
    return recommendations[size] || { title: "Custom Solution", desc: "Specialized waste management" };
  };

  const finalPrice = calculatePrice(skip.price_before_vat, skip.vat);
  const recommendation = getSkipRecommendation(skip.size);

  return (
    <div 
      className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden
        ${isSelected ? 'ring-4 ring-blue-500 shadow-2xl -translate-y-2' : ''}`}
      onMouseEnter={() => onHover(skip.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onSelect(skip.id)}
    >
      {/* Popular Badge */}
      {skip.size === 6 && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Zap size={12} />
            Most Popular
          </div>
        </div>
      )}

      {/* Skip Visual */}
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center overflow-hidden">
        <div className={`relative transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
          {/* Skip Container Illustration */}
          <div className="relative">
            <div className="w-32 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-xl">
              <div className="absolute inset-2 border-2 border-white border-dashed rounded opacity-50"></div>
              <div className="absolute -top-2 -right-2 w-8 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded transform -rotate-12"></div>
              <div className="absolute -top-1 left-2 text-white text-xs font-bold">{skip.size}Y</div>
            </div>
            {/* Shadow */}
            <div className="absolute -bottom-2 left-2 w-32 h-4 bg-gray-300 rounded-full opacity-30 blur-sm"></div>
          </div>
        </div>
        
        {/* Size Badge */}
        <div className="absolute bottom-4 left-4 bg-white rounded-full px-4 py-2 shadow-lg">
          <span className="text-2xl font-bold text-gray-800">{skip.size}</span>
          <span className="text-sm text-gray-600 ml-1">Yards</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{skip.size} Yard Skip</h3>
            <p className="text-sm font-semibold text-blue-600">{recommendation.title}</p>
            <p className="text-xs text-gray-600 mt-1">{recommendation.desc}</p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock size={16} className="text-blue-500" />
            <span>{skip.hire_period_days} days</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Truck size={16} className={skip.allowed_on_road ? "text-green-500" : "text-orange-500"} />
            <span>{skip.allowed_on_road ? "Road legal" : "Private only"}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 col-span-2">
            <Shield size={16} className={skip.allows_heavy_waste ? "text-green-500" : "text-gray-400"} />
            <span>{skip.allows_heavy_waste ? "Heavy waste allowed" : "Light waste only"}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-3xl font-bold text-gray-800">£{finalPrice}</div>
            <div className="text-sm text-gray-500">Inc. VAT ({skip.vat}%)</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 line-through">£{skip.price_before_vat}</div>
            <div className="text-xs text-green-600 font-semibold">VAT included</div>
          </div>
        </div>

        {/* Action Button */}
        <button 
          className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2
            ${isSelected 
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
              : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white hover:shadow-lg'}`}
        >
          {isSelected ? (
            <>
              <CheckCircle size={20} />
              Selected
            </>
          ) : (
            <>
              Select This Skip
              <ArrowRight size={20} className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;