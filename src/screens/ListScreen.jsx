import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { deleteCandi } from '../data/api';

const ListScreen = ({ candis, setCandis }) => {
  if (!candis || candis.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Tidak ada data candi.</Text>
      </View>
    );
  }

  const handleDelete = (id) => {
    Alert.alert(
      'Konfirmasi',
      'Yakin ingin menghapus data candi ini?',
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteCandi(id);
              setCandis((prev) => prev.filter((candi) => candi.id !== id));
            } catch (error) {
              Alert.alert('Error', 'Gagal menghapus data');
              console.error(error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={candis}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.nama}>{item.nama}</Text>
              <Text style={styles.lokasi}>{item.lokasi}</Text>
            </View>
            <TouchableOpacity
              style={styles.deleteBtn}
              onPress={() => handleDelete(item.id)}
            >
              <Text style={styles.deleteText}>Hapus</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  card: {
    flexDirection: 'row',
    backgroundColor: '#eaeaea',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  nama: { fontWeight: 'bold', fontSize: 18 },
  lokasi: { color: '#555' },
  deleteBtn: {
    backgroundColor: '#ff4444',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ListScreen;
