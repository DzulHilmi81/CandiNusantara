// src/screens/AddCandiScreen.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'candiData';

const AddCandiScreen = ({ navigation, setCandis }) => {
  const [nama, setNama] = useState('');
  const [lokasi, setLokasi] = useState('');

  const handleAdd = async () => {
    if (!nama || !lokasi) {
      Alert.alert('Error', 'Isi semua field!');
      return;
    }

    const newCandi = { id: Date.now().toString(), nama, lokasi };
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    const data = stored ? JSON.parse(stored) : [];
    const updated = [newCandi, ...data];

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setCandis(updated);
    navigation.navigate('List Candi');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nama Candi</Text>
      <TextInput style={styles.input} value={nama} onChangeText={setNama} />

      <Text style={styles.label}>Lokasi Candi</Text>
      <TextInput style={styles.input} value={lokasi} onChangeText={setLokasi} />

      <Button title="Simpan" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16 },
  input: { borderWidth: 1, marginBottom: 15, padding: 10, borderRadius: 6 },
});

export default AddCandiScreen;
