// src/components/ButtonPrimary.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ButtonPrimary({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#E2C89F', // Match Figma color
    borderColor:'black',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
});
