import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Animated, StatusBar } from 'react-native';

import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App(): JSX.Element {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      // fade-out da Splash
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => setShowSplash(false));
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {showSplash ? (
        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
          <SplashScreen />
        </Animated.View>
      ) : (
        <HomeScreen />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
