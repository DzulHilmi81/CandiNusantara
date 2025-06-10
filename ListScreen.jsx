// src/screens/ListScreen.jsx
import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import CandiCard from '../components/CandiCard';

const ListScreen = ({ candis }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Candi</Text>
      <FlatList
        data={candis}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CandiCard nama={item.nama} lokasi={item.lokasi} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
});

export default ListScreen;
