// src/utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'candi_data';

export const storeCandiData = async (data) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Gagal menyimpan data lokal', e);
  }
};

export const loadCandiData = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    return value ? JSON.parse(value) : [];
  } catch (e) {
    console.error('Gagal memuat data lokal', e);
    return [];
  }
};
