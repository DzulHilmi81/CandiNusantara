import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { postCandi } from '../data/api';

const AddCandiScreen = ({ navigation, setCandis }) => {
  const [nama, setNama] = useState('');
  const [lokasi, setLokasi] = useState('');

  const handleAdd = async () => {
    if (!nama || !lokasi) {
      Alert.alert('Error', 'Harap isi semua field');
      return;
    }

    try {
      const newCandi = { nama, lokasi };
      const savedCandi = await postCandi(newCandi);
      setCandis(prev => [savedCandi, ...prev]);
      navigation.navigate('List Candi');
    } catch (error) {
      Alert.alert('Gagal', 'Tidak dapat menyimpan data');
      console.error('POST ERROR:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nama Candi</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan nama candi"
        value={nama}
        onChangeText={setNama}
      />
      <Text style={styles.label}>Lokasi Candi</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan lokasi candi"
        value={lokasi}
        onChangeText={setLokasi}
      />
      <Button title="Tambah Candi" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  label: { fontSize: 16, marginTop: 10, marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
});

export default AddCandiScreen;
