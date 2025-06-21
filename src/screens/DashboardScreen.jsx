// src/screens/DashboardScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomBar from '../components/BottomBar';


const features = [
  { title: 'Real-time Energy Monitoring', icon: require('../assets/monitor.png'), screen: 'RealTimeMonitoring' },
  { title: 'Remote Control Access', icon: require('../assets/remote.png') },
  { title: 'Voice Control Integration', icon: require('../assets/mic.png') },
  { title: 'Sleep Mode', icon: require('../assets/sleep.png'), screen: 'SleepMode' },
  { title: 'Automated Alert System', icon: require('../assets/alert.png'), screen: 'AlertSystem' },
  { title: 'Smart AI Energy Recommendations', icon: require('../assets/bulb.png') },
  { title: 'Energy Saving Forecast', icon: require('../assets/save.png') },
  { title: 'AI-Powered Energy Budget Planner', icon: require('../assets/budget.png') },
  { title: 'Access Hub', icon: require('../assets/profile.png') },
];

export default function DashboardScreen() {
  const navigation = useNavigation();

  const handleFeaturePress = (item) => {
    if (item.screen) {
      navigation.navigate(item.screen);
    } else {
      // Alert or future handler
      console.log(`${item.title} tapped`);
    }
  };

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
          <TouchableOpacity style={styles.featureBox} onPress={() => handleFeaturePress(item)}>
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.featureText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Bottom Navigation Bar */}
    
            <BottomBar />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2d7aa', paddingTop: 50, paddingHorizontal: 20 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 20, textAlign: 'center' },
  grid: { paddingBottom: 80 },
  featureBox: {
    backgroundColor: '#d2aa6d',
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

});
