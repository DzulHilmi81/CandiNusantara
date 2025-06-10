// src/screens/HomeScreen.jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Judul aplikasi dengan animasi pulse mewah */}
      <Animatable.Text
        animation="pulse"
        easing="ease-in-out"
        iterationCount="infinite"
        style={styles.title}
      >
        CandiNusa
      </Animatable.Text>

      {/* Subjudul diam tapi dengan efek redup nyala (opacity) */}
      <Animatable.Text
        animation="fadeIn"
        easing="ease-in-out"
        iterationCount="infinite"
        direction="alternate"
        style={styles.subtitle}
      >
        Eksplorasi Keindahan Seni Candi Nusantara
      </Animatable.Text>

      {/* Tombol elegan dengan efek membesar-kecil */}
      <Animatable.View animation="pulse" iterationCount="infinite" style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tambah Candi')}
        >
          <Text style={styles.buttonText}>Tambah Candi</Text>
        </TouchableOpacity>
      </Animatable.View>

      <Animatable.View animation="pulse" iterationCount="infinite" style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#2E86C1' }]}
          onPress={() => navigation.navigate('List Candi')}
        >
          <Text style={styles.buttonText}>Lihat Semua Candi</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6C3483',
    marginBottom: 10,
    fontFamily: 'serif',
  },
  subtitle: {
    fontSize: 16,
    color: '#7B7D7D',
    marginBottom: 30,
    textAlign: 'center',
    opacity: 0.7,
  },
  buttonWrapper: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#28B463',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
