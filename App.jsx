import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from './src/screens/HomeScreen';
import AddCandiScreen from './src/screens/AddCandiScreen';
import ListScreen from './src/screens/ListScreen';

const Stack = createNativeStackNavigator();
const STORAGE_KEY = 'candiData';

const App = () => {
  const [candis, setCandis] = useState([]);

  useEffect(() => {
    loadCandis();
  }, []);

  useEffect(() => {
    saveCandis();
  }, [candis]);

  const loadCandis = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) setCandis(JSON.parse(stored));
    } catch (e) {
      console.error('Gagal memuat data:', e);
    }
  };

  const saveCandis = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(candis));
    } catch (e) {
      console.error('Gagal menyimpan data:', e);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Beranda">
          {props => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Tambah Candi">
          {props => (
            <AddCandiScreen
              {...props}
              candis={candis}
              setCandis={setCandis}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="List Candi">
          {props => (
            <ListScreen
              {...props}
              candis={candis}
              setCandis={setCandis}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
