import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@/constants/config';

export function useApiData<Type>(endpoint: string, cacheKey: string) {
  const [data, setData] = useState<Type | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // normalize data structure
  const normalizeData = (rawData: any): Type => {
    if (!rawData) return [] as unknown as Type;

    if (Array.isArray(rawData)) {
      return rawData as Type;
    }

    if (typeof rawData === 'object') {
      if (rawData.app_settings && Array.isArray(rawData.app_settings)) return rawData.app_settings as Type;
      if (rawData.artists && Array.isArray(rawData.artists)) return rawData.artists as Type;
      if (rawData.stages && Array.isArray(rawData.stages)) return rawData.stages as Type;
      if (rawData.map && Array.isArray(rawData.map)) return rawData.map as Type;

      const values = Object.values(rawData);
      const foundArray = values.find(val => Array.isArray(val));
      if (foundArray) return foundArray as Type;
    }

    return rawData as Type;
  };

  // fetch api
  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`);

      if (response.ok) {
        const json = await response.json();
        const cleanData = normalizeData(json);

        await AsyncStorage.setItem(cacheKey, JSON.stringify(cleanData));
        setData(cleanData);
      } else {
        console.warn(`ERROR: ${response.status} @ ${endpoint}`);
      }
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  // load cache
  useEffect(() => {
    const init = async () => {
      try {
        const cached = await AsyncStorage.getItem(cacheKey);
        if (cached) setData(normalizeData(JSON.parse(cached)));
      } catch (e) { console.warn(e); }
      finally { setLoading(false); }

      await fetchData();
    };

    init();
  }, [endpoint, cacheKey]);

  // pull to refresh
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  }, [endpoint, cacheKey]);

  return { data, loading, refreshing, onRefresh };
}