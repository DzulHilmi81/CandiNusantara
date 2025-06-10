import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text } from 'react-native';
import CandiCard from './src/components/CandiCard';
import { candiList } from './src/data/candiData';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CandiNusa – Eksplorasi Keindahan Seni Candi Nusantara</Text>
      <FlatList
        data={candiList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CandiCard nama={item.nama} lokasi={item.lokasi} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default App;
