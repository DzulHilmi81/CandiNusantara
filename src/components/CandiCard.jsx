// src/components/CandiCard.jsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CandiCard = ({ nama, lokasi, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.nama}>{nama}</Text>
    <Text style={styles.lokasi}>{lokasi}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fce5cd',
    padding: 20,
    marginBottom: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#d4a373',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  nama: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5a2a00',
    marginBottom: 4,
  },
  lokasi: {
    fontSize: 16,
    color: '#7b4b20',
  },
});

export default CandiCard;
