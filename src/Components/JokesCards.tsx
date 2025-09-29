import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Joke } from '../Services/api';

interface Props {
  joke: Joke;
}

const JokeCard: React.FC<Props> = ({ joke }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.setup}>{joke.setup}</Text>
      <Text style={styles.punchline}>{joke.punchline}</Text>
    </View>
  );
};

export default JokeCard;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    marginTop: 12,
    alignItems: 'center'
  },
  setup: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center'
  },
  punchline: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center'
  }
});
