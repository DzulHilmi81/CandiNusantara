import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CandiCard = ({ nama, lokasi }) => (
  <View style={styles.card}>
    <Text style={styles.nama}>{nama}</Text>
    <Text style={styles.lokasi}>{lokasi}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffe8cc',
    padding: 15,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  nama: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8b4513',
  },
  lokasi: {
    fontSize: 16,
    color: '#5e4b32',
  },
});

export default CandiCard;
