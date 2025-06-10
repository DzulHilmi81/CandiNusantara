// App.jsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  Button,
  Alert,
  View,
} from 'react-native';
import CandiCard from './src/components/CandiCard';
import { candiList as initialCandiList } from './src/data/candiData';

const App = () => {
  const [candis, setCandis] = useState(initialCandiList);

  const addCandi = () => {
    const newId = Date.now().toString();
    const newCandi = {
      id: newId,
      nama: 'Candi Baru',
      lokasi: 'Lokasi Baru',
    };
    setCandis(prev => [newCandi, ...prev]);
  };

  const handlePress = item => {
    Alert.alert('Candi Dipilih', `${item.nama}\nLokasi: ${item.lokasi}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        CandiNusa – Eksplorasi Keindahan Seni Candi Nusantara
      </Text>

      <View style={styles.buttonContainer}>
        <Button title="Tambah Candi" onPress={addCandi} color="#8b0000" />
      </View>

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
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#6b3e26',
  },
  buttonContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  listContainer: {
    paddingBottom: 24,
  },
});

export default App;
