import { useState, useEffect, useCallback } from 'react';
import { fetchSkipsByLocation, getMockSkipData } from '../services/api';

export const useSkipData = (postcode = 'NR32', area = 'Lowestoft') => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkip, setSelectedSkip] = useState(null);

  const loadSkips = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      let skipData;
      try {
        // Try to fetch from real API
        skipData = await fetchSkipsByLocation(postcode, area);
        console.log('Successfully loaded data from API');
      } catch (apiError) {
        console.log('API failed, using fallback data:', apiError.message);
        // Use fallback mock data
        skipData = getMockSkipData();
      }

      // Simulate loading delay for better UX
      setTimeout(() => {
        setSkips(skipData);
        setLoading(false);
      }, 1000);

    } catch (err) {
      console.error('Failed to load skips:', err);
      setError(err.message);
      setLoading(false);
    }
  }, [postcode, area]);

  // Load skips when postcode or area changes
  useEffect(() => {
    loadSkips();
  }, [loadSkips]);

  return {
    skips,
    loading,
    error,
    selectedSkip,
    setSelectedSkip,
    reload: loadSkips,  // expose reload function if needed
  };
};
