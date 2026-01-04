import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@/constants/config';

export function useRefreshedData<Type>(endpoint: string, cacheKey: string) {
  const [data, setData] = useState<Type | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // JSON data extractor and normalizer
  const normalizeData = (rawData: any): Type => {
    if (!rawData) return [] as unknown as Type;

    if (Array.isArray(rawData)) {
        return rawData as Type;
    }

    if (typeof rawData === 'object') {
        if (rawData.artists && Array.isArray(rawData.artists)) return rawData.artists as Type;
        if (rawData.stages && Array.isArray(rawData.stages)) return rawData.stages as Type;
        
        const values = Object.values(rawData);
        const foundArray = values.find(val => Array.isArray(val));
        if (foundArray) return foundArray as Type;
    }

    return rawData as Type;
  };

  // load from cache on mount
  const loadFromCache = async () => {
    try {
      const cached = await AsyncStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        setData(normalizeData(parsed));
      }
    } catch (e) {
      console.warn(`ERROR ${cacheKey}: `, e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFromCache();
  }, [cacheKey]);

  // pull-to-refresh
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      console.log(`[⟳] Refreshing ${endpoint}...`);
      
      const response = await fetch(`${API_URL}${endpoint}`);

      if (response.ok) {
        const json = await response.json();
        
        const cleanData = normalizeData(json);
        
        await AsyncStorage.setItem(cacheKey, JSON.stringify(cleanData));
        
        setData(cleanData);
        console.log("[✓] Data updated!");
      } else {
          console.warn(`ERROR: ${response.status} @ ${endpoint}`);
      }
    } catch (error) {
      console.error("ERROR: ", error);
    } finally {
      setRefreshing(false);
    }
  }, [endpoint, cacheKey]);

  return { data, loading, refreshing, onRefresh };
}