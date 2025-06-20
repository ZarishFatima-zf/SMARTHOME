// src/screens/DashboardScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const features = [
  { title: 'Real-time Energy Monitoring', icon: require('../assets/monitor.png') },
  { title: 'Remote Control Access', icon: require('../assets/remote.png') },
  { title: 'Voice Control Integration', icon: require('../assets/mic.png') },
  { title: 'Sleep Mode', icon: require('../assets/sleep.png') },
  { title: 'Automated Alert System', icon: require('../assets/alert.png') },
  { title: 'Smart AI Energy Recommendations', icon: require('../assets/bulb.png') },
  { title: 'Energy Saving Forecast', icon: require('../assets/save.png') },
  { title: 'AI-Powered Energy Budget Planner', icon: require('../assets/budget.png') },
  { title: 'Access Hub', icon: require('../assets/profile.png') },
];

export default function DashboardScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>VOLTX</Text>

      <FlatList
        data={features}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.featureBox}>
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.featureText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomItem} onPress={() => navigation.navigate('Home')}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1946/1946488.png' }} style={styles.bottomIcon} />
          <Text style={styles.bottomText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomItem} onPress={() => navigation.navigate('AIStats')}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/478/478544.png' }} style={styles.bottomIcon} />
          <Text style={styles.bottomText}>AI Stats</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomItem} onPress={() => navigation.navigate('Notifications')}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2645/2645897.png' }} style={styles.bottomIcon} />
          <Text style={styles.bottomText}>Notification</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomItem} onPress={() => navigation.navigate('Settings')}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2040/2040504.png' }} style={styles.bottomIcon} />
          <Text style={styles.bottomText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2d7aa', paddingTop: 50, paddingHorizontal: 20 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 20, textAlign: 'center' },
  grid: { paddingBottom: 80 }, // Ensure space above bottom bar
  featureBox: {
    backgroundColor: '#E2C89F',
    padding: 15,
    borderRadius: 12,
    width: '48%',
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  featureText: { fontSize: 13, fontWeight: '600', textAlign: 'center', marginTop: 10 },
  icon: { width: 30, height: 30, resizeMode: 'contain' },

  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f2d7aa',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  bottomItem: { alignItems: 'center' },
  bottomText: { fontSize: 11, marginTop: 4 },
  bottomIcon: { width: 24, height: 24 },
});
