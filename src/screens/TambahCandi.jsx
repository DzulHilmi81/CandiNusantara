import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { postCandi } from '../data/api'; // import fungsi post dari api.js

const TambahCandi = ({ navigation }) => {
  const [nama, setNama] = useState('');
  const [lokasi, setLokasi] = useState('');

  const simpanCandi = async () => {
    if (!nama || !lokasi) {
      Alert.alert('Peringatan', 'Nama dan Lokasi harus diisi');
      return;
    }

    try {
      await postCandi({ nama, lokasi });
      Alert.alert('Berhasil', `Candi "${nama}" berhasil disimpan!`);
      setNama('');
      setLokasi('');
      navigation.navigate('List Candi');
    } catch (error) {
      Alert.alert('Error', 'Gagal menyimpan data candi');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nama Candi:</Text>
      <TextInput
        style={styles.input}
        value={nama}
        onChangeText={setNama}
        placeholder="Masukkan nama candi"
      />

      <Text style={styles.label}>Lokasi Candi:</Text>
      <TextInput
        style={styles.input}
        value={lokasi}
        onChangeText={setLokasi}
        placeholder="Masukkan lokasi candi"
      />

      <Button title="Simpan Candi" onPress={simpanCandi} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
});

export default TambahCandi;
