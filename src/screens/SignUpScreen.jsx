// src/screens/LoginScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

export default function SignupScreen() {
  const navigation = useNavigation();
  const [userType, setUserType] = useState('user');

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/507/507257.png' }}
          style={styles.backIconImage}
        />
      </TouchableOpacity>

      <Text style={styles.heading}>SignUp</Text>

      {/* Login Icon */}
      <Image
        source={require('../assets/Signup.png')}
        style={styles.signupIcon}
      />

      {/* Username Field */}
      <View style={styles.inputContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1144/1144760.png' }}
          style={styles.iconImage}
        />
        <TextInput
          placeholder="Username"
          placeholderTextColor="#000"
          style={styles.input}
        />
      </View>

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

      {/* User Type Dropdown */}
      <View style={styles.inputContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/149/149340.png' }}
          style={styles.iconImage}
        />
        <Picker
          selectedValue={userType}
          onValueChange={(itemValue) => setUserType(itemValue)}
          style={styles.picker}
          dropdownIconColor="#000"
        >
          <Picker.Item label="User" value="user" />
          <Picker.Item label="Admin" value="admin" />
        </Picker>
      </View>

      {/* Terms & Conditions */}
      <View style={styles.checkboxRow}>
        <View style={styles.checkbox} />
        <Text style={styles.checkboxText}>
          I accept <Text style={{ fontWeight: 'bold' }}>Terms & Conditions</Text> and{' '}
          <Text style={{ fontWeight: 'bold' }}>Privacy Policy</Text>.
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={styles.signupBtn}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text style={styles.signupText}>Signup</Text>
      </TouchableOpacity>

      {/* Already have an account? */}
      <Text style={styles.linkText}>
        Already have an account?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2d7aa',
    padding: 20,
  },
  backArrow: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  backIconImage: {
    width: 24,
    height: 24,
    tintColor: '#000',
  },
  heading: {
    fontSize: 40,
    fontWeight: '700',
    color: '#333',
    marginTop: 100,
    marginBottom: 10,
    textAlign: 'left',
  },
  signupIcon: {
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
  picker: {
    flex: 1,
    height: 50,
    color: '#000',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#555',
    marginRight: 8,
  },
  checkboxText: {
    fontSize: 13,
  },
  signupBtn: {
    backgroundColor: '#e2c89f',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  signupText: {
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
});
