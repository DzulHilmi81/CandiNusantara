import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { postCandi } from '../data/api'; // pastikan path sesuai dengan struktur proyekmu

const AddCandiScreen = ({ navigation, setCandis }) => {
  const [nama, setNama] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [gambar, setGambar] = useState(null);

  const pilihGambar = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.7 }, (response) => {
      if (response.didCancel) {
        console.log('Batal memilih gambar');
      } else if (response.errorMessage) {
        Alert.alert('Error', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setGambar(response.assets[0].uri);
      }
    });
  };

  const handleAdd = async () => {
    if (!nama.trim() || !lokasi.trim()) {
      Alert.alert('Error', 'Nama dan lokasi harus diisi');
      return;
    }

    try {
      const newCandi = {
        nama,
        lokasi,
        gambar,
      };

      // Simpan ke MockAPI
      const savedCandi = await postCandi(newCandi);

      // Simpan juga ke lokal state
      setCandis((prev) => [savedCandi, ...prev]);

      setNama('');
      setLokasi('');
      setGambar(null);
      navigation.navigate('List Candi');
    } catch (error) {
      Alert.alert('Gagal', 'Tidak dapat menyimpan data');
      console.error(error);
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

      <Button title="Pilih Gambar" onPress={pilihGambar} />

      {gambar && (
        <Image
          source={{ uri: gambar }}
          style={styles.image}
        />
      )}

      <Button title="Tambah Candi" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  label: { fontSize: 16, marginTop: 10, marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default AddCandiScreen;
