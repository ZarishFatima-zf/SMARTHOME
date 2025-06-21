import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const RealTimeMonitoring = ({ navigation }) => {
  const [selectedDevice, setSelectedDevice] = useState('AC');
  const [selectedRoom, setSelectedRoom] = useState('Living Room');

  const devices = ['Fan', 'AC', 'Refrigerator', 'Light', 'Washing Machine', 'Motor', 'Iron'];
  const rooms = ['Living Room', 'Bedroom', 'Kitchen'];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Real-Time Energy Monitoring</Text>
      <Text style={styles.subtext}>Continuous real-time energy usage tracking</Text>
      <Text style={styles.totalText}>Total Energy Today: 12.4 kWh</Text>

      <View style={styles.row}>
        <Text style={styles.optionText}>{`Room: ${selectedRoom}`}</Text>
        <Text style={styles.optionText}>{`Device: ${selectedDevice}`}</Text>
        <Text style={styles.optionText}>Range: Today</Text>
      </View>

      <View style={styles.statsBox}>
        <Text>12.4 kWh Today</Text>
        <Text>250 kWh This Month</Text>
        <Text>{`${selectedDevice} - ${selectedRoom}`}</Text>
      </View>

      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9779/9779945.png' }}
        style={styles.graphImage}
      />

      {devices.map((device, index) => (
        <DeviceSwitch key={index} name={`${device} - ${selectedRoom}`} />
      ))}

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
    </ScrollView>
  );
};

const DeviceSwitch = ({ name }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={styles.deviceRow}>
      <Text>{name}</Text>
      <Switch value={isEnabled} onValueChange={setIsEnabled} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f2d7aa', flex: 1 },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  subtext: { fontSize: 12, marginBottom: 10 },
  totalText: { fontSize: 14, marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  optionText: {
    fontSize: 14,
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 4,
    textAlign: 'center',
  },
  statsBox: { marginVertical: 20 },
  graphImage: { height: 150, resizeMode: 'contain', marginVertical: 20, borderRadius: 10 },
  deviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
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

export default RealTimeMonitoring;