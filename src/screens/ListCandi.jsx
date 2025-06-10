import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { getCandiList } from '../api/api';

const ListScreen = () => {
  const [candis, setCandis] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCandis();
  }, []);

  const fetchCandis = async () => {
    try {
      const data = await getCandiList();
      setCandis(data);
    } catch (error) {
      console.error('Gagal mengambil data dari API', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#888" />
      </View>
    );
  }

  if (candis.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Tidak ada data candi.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={candis}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nama}>{item.nama}</Text>
            <Text style={styles.lokasi}>{item.lokasi}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  card: {
    backgroundColor: '#eaeaea',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  nama: { fontWeight: 'bold', fontSize: 18 },
  lokasi: { color: '#555' },
});

export default ListScreen;
