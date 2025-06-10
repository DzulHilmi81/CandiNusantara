// src/screens/HomeScreen.jsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CandiNusa</Text>
      <Text style={styles.subtitle}>Eksplorasi Keindahan Seni Candi Nusantara</Text>
      <Button title="Tambah Candi" onPress={() => navigation.navigate('Tambah Candi')} />
      <View style={{ marginTop: 12 }}>
        <Button title="Lihat Semua Candi" onPress={() => navigation.navigate('List Candi')} color="green" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 14, marginBottom: 20 },
});

export default HomeScreen;
