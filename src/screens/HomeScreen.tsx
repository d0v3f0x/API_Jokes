import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { fetchRandomJoke, Joke } from '../Services/api';
import JokeCard from '../Components/JokesCards';

const HomeScreen: React.FC = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchRandomJoke();
      setJoke(data);
    } catch (err: any) {
      setError(err.message || 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJoke();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Piadas aleatórias</Text>

      {loading && <ActivityIndicator size="large" />}

      {error && <Text style={styles.error}>{error}</Text>}

      {!loading && joke && <JokeCard joke={joke} />}

      <TouchableOpacity style={styles.button} onPress={loadJoke}>
        <Text style={styles.buttonText}>Buscar nova piada</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 12,
  },
  error: {
    color: 'red',
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#2f95dc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
