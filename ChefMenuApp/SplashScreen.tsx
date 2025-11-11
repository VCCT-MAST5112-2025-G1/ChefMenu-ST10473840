import React, { useEffect, useRef } from 'react';
import { Animated, View, Text } from 'react-native';
import styles from './styles';

type Props = {
  onFinish: () => void;
};

export default function SplashScreen({ onFinish }: Props): React.ReactElement {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, { toValue: 1, duration: 1200, useNativeDriver: true }).start();
    const t = setTimeout(() => onFinish(), 3000);
    return () => clearTimeout(t);
  }, [fade, onFinish]);

  return (
    <View style={[styles.containerCentered, { backgroundColor: '#ff914d' }]}>
      <Animated.Text style={[styles.splashText, { opacity: fade }]}>Chef's Menu App 🍽️</Animated.Text>
    </View>
  );
}
