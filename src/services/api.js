const API_BASE_URL = 'https://app.wewantwaste.co.uk/api';

// Fetch skips by location
export const fetchSkipsByLocation = async (postcode, area = '') => {
  try {
    const url = `${API_BASE_URL}/skips/by-location?postcode=${encodeURIComponent(postcode)}${area ? `&area=${encodeURIComponent(area)}` : ''}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers here
      },
      // Add timeout
      signal: AbortSignal.timeout(10000) // 10 second timeout
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Validate the response data
    if (!Array.isArray(data)) {
      throw new Error('Invalid response format: expected array');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    
    // Re-throw with more context
    if (error.name === 'AbortError') {
      throw new Error('Request timed out - please try again');
    } else if (error.name === 'TypeError') {
      throw new Error('Network error - please check your connection');
    } else {
      throw error;
    }
  }
};

// Additional API functions can be added here
export const fetchSkipById = async (skipId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/skips/${skipId}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Mock function for testing
export const getMockSkipData = () => {
  return [
    {
      "id": 17933,
      "size": 4,
      "hire_period_days": 14,
      "price_before_vat": 278,
      "vat": 20,
      "allowed_on_road": true,
      "allows_heavy_waste": true
    },
    {
      "id": 17934,
      "size": 6,
      "hire_period_days": 14,
      "price_before_vat": 305,
      "vat": 20,
      "allowed_on_road": true,
      "allows_heavy_waste": true
    },
    {
      "id": 17935,
      "size": 8,
      "hire_period_days": 14,
      "price_before_vat": 375,
      "vat": 20,
      "allowed_on_road": true,
      "allows_heavy_waste": true
    }
  ];
};