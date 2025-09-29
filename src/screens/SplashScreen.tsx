import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/splash-icon.png')} style={styles.image} />
      <Text style={styles.title}>Jokes App</Text>
      <Text style={styles.subtitle}>Buscando a melhor piada...</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});
