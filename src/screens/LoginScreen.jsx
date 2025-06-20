// src/screens/LoginScreen.js
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
  <Image
    source={{
      uri: 'https://cdn-icons-png.flaticon.com/128/507/507257.png',
    }}
    style={styles.backIconImage}
  />
</TouchableOpacity>
      <Text style={styles.heading}>Log In</Text>

      {/* Login Icon */}
      <Image
        source={require('../assets/Login.png')} // Local asset
        style={styles.loginIcon}
      />

      {/* Email Field */}
      <View style={styles.inputContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3178/3178165.png' }}
          style={styles.iconImage}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#000"
          style={styles.input}
        />
      </View>

      {/* Password Field */}
      <View style={styles.inputContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/9512/9512572.png' }}
          style={styles.iconImage}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#000"
          secureTextEntry
          style={styles.input}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.linkText}>
        Don’t have an account?{' '}
       <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
  <Text style={styles.link}>Sign Up</Text>
</TouchableOpacity>
</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2d7aa', padding: 20 },
  backArrow: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  heading: {
    fontSize: 40,
    fontWeight: '700',
    color: '#333',
    marginTop: 100,
    marginBottom: 10,
    textAlign: 'left',
  },
  loginIcon: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 30,
    resizeMode: 'contain',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2d7aa',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  iconImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: '#000',
  },
  forgot: {
    color: '#555',
    textAlign: 'right',
    marginBottom: 30,
  },
  loginBtn: {
    backgroundColor: '#e0c08e',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  linkText: {
    textAlign: 'center',
    color: '#444',
  },
  link: {
    fontWeight: '700',
    color: '#000',
  },
  backIconImage: {
  width: 24,
  height: 24,
  tintColor: '#000', // Optional: applies a black color overlay
},



});
