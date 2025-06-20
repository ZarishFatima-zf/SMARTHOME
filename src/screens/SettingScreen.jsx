// src/screens/CoverScreen.js
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CoverImage from '../assets/Home.png'; // Make sure this exists
import LogoImage from '../assets/Logo.png';  // Your logo image

export default function CoverScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      {/* Arrow Button (Top Right) */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.arrow}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/3114/3114931.png ' }}
          style={styles.arrowImage}
        />
      </TouchableOpacity>

      {/* Logo */}
      <Image source={LogoImage} style={styles.logo} resizeMode="contain" />

      {/* Title */}
      <Text style={styles.title}>AI-Optimized Smart Home{"\n"}Energy Automation</Text>

      {/* Cover Image */}
      <Image source={CoverImage} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2d7aa',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  arrow: {
    position: 'absolute',
    top: 30,
    right: 20,
    zIndex: 10,
  },
  arrowImage: {
    width: 32,
    height: 32,
  },
  logo: {
    width: 200,
    height: 90,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 25,
    color: '#000',
  },
  image: {
    width: '100%',
    height: 520,
  },
});
