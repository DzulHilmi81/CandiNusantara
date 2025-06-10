import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  Button,
  Alert,
} from 'react-native';
import CandiCard from './src/components/CandiCard';
import { candiList as initialCandiList } from './src/data/candiData';

const App = () => {
  // 1. State untuk daftar candi
  const [candis, setCandis] = useState(initialCandiList);

  // 2. Fungsi nambah candi baru
  const addCandi = () => {
    const newId = Date.now().toString();
    const newCandi = {
      id: newId,
      nama: 'Candi Baru',
      lokasi: 'Lokasi Baru',
    };
    setCandis(prev => [newCandi, ...prev]);
  };

  // 3. Callback saat card ditekan
  const handlePress = item => {
    Alert.alert('Candi Dipilih', `${item.nama}\nLokasi: ${item.lokasi}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        CandiNusa – Eksplorasi Keindahan Seni Candi Nusantara
      </Text>

      {/* Tombol yang memicu perubahan state */}
      <Button title="Tambah Candi" onPress={addCandi} />

      {/* FlatList menggunakan state candis */}
      <FlatList
        data={candis}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CandiCard
            nama={item.nama}
            lokasi={item.lokasi}
            onPress={() => handlePress(item)}
          />
        )}
        contentContainerStyle={{ paddingVertical: 16 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8e7',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#7c4700',
  },
});

export default App;
