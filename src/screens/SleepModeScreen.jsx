import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import BottomBar from '../components/BottomBar';

const SleepModeScreen = () => {
  const [autoSleep, setAutoSleep] = useState(false);

  const [roomDropdownOpen, setRoomDropdownOpen] = useState(false);
  const [deviceDropdownOpen, setDeviceDropdownOpen] = useState(false);
  const [timerDropdownOpen, setTimerDropdownOpen] = useState(false);

  const [selectedRoom, setSelectedRoom] = useState('Living Room');
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [selectedTimer, setSelectedTimer] = useState('15 Minutes');

  const rooms = ['Living Room', 'Bedroom', 'Kitchen'];
  const timers = ['5 Minutes', '10 Minutes', '15 Minutes', '30 Minutes'];

  const devices = [
    {
      name: 'Fan',
      icon: 'https://cdn-icons-png.flaticon.com/512/11212/11212492.png',
    },
    {
      name: 'Light',
      icon: 'https://cdn-icons-png.flaticon.com/512/161/161239.png',
    },
    {
      name: 'AC',
      icon: 'https://cdn-icons-png.flaticon.com/512/2933/2933196.png',
    },
  ];

  const toggleDevice = (device) => {
    if (selectedDevices.includes(device)) {
      setSelectedDevices(selectedDevices.filter((d) => d !== device));
    } else {
      setSelectedDevices([...selectedDevices, device]);
    }
  };

  const handleWakeDevices = () => {
    setSelectedDevices([]); // Clear affected devices
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Sleep Mode</Text>
        <Text style={styles.subtitle}>
          Put idle devices into low-power mode after inactivity.
        </Text>

        {/* Auto-Sleep */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>AUTO-SLEEP MODE</Text>
          <Switch
            value={autoSleep}
            onValueChange={setAutoSleep}
            thumbColor="#fff"
            trackColor={{ false: '#ccc', true: '#a67c52' }}
          />
        </View>

        {/* Room Dropdown */}
        <Text style={styles.sectionHeader}>Select Room</Text>
        <Pressable
          style={styles.dropdownToggle}
          onPress={() => setRoomDropdownOpen(!roomDropdownOpen)}
        >
          <Text>{selectedRoom}</Text>
          <Text>⌄</Text>
        </Pressable>
        {roomDropdownOpen && (
          <View style={styles.dropdownContainer}>
            {rooms.map((room) => (
              <Pressable
                key={room}
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedRoom(room);
                  setRoomDropdownOpen(false);
                }}
              >
                <Text>{room}</Text>
              </Pressable>
            ))}
          </View>
        )}

        {/* Device Dropdown */}
        <Text style={styles.sectionHeader}>Select Devices</Text>
        <Pressable
          style={styles.dropdownToggle}
          onPress={() => setDeviceDropdownOpen(!deviceDropdownOpen)}
        >
          <Text>{selectedDevices.length > 0 ? `${selectedDevices.length} selected` : 'Choose Devices'}</Text>
          <Text>⌄</Text>
        </Pressable>
        {deviceDropdownOpen && (
          <View style={styles.dropdownContainer}>
            {devices.map((device) => (
              <Pressable
                key={device.name}
                style={[
                  styles.dropdownItem,
                  selectedDevices.includes(device.name) && styles.selectedItem,
                ]}
                onPress={() => toggleDevice(device.name)}
              >
                <Text>{device.name}</Text>
              </Pressable>
            ))}
          </View>
        )}
        
        {/* Affected Devices */}
        <Text style={styles.sectionHeader}>Device Affected</Text>
        {selectedDevices.length === 0 ? (
          <Text style={{ color: '#666' }}></Text>
        ) : (
          selectedDevices.map((name) => {
            const d = devices.find((dev) => dev.name === name);
            return (
              <View style={styles.deviceRow} key={name}>
                <Image source={{ uri: d?.icon }} style={styles.deviceIcon} />
                <Text style={styles.deviceText}>
                  {name} - {selectedRoom}
                </Text>
              </View>
            );
          })
        )}

        {/* Timer Dropdown */}
        <Text style={styles.sectionHeader}>Inactivity Timer</Text>
        <Pressable
          style={styles.dropdownToggle}
          onPress={() => setTimerDropdownOpen(!timerDropdownOpen)}
        >
          <Text>{selectedTimer}</Text>
          <Text>⌄</Text>
        </Pressable>
        {timerDropdownOpen && (
          <View style={styles.dropdownContainer}>
            {timers.map((time) => (
              <Pressable
                key={time}
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedTimer(time);
                  setTimerDropdownOpen(false);
                }}
              >
                <Text>{time}</Text>
              </Pressable>
            ))}
          </View>
        )}


        {/* Wake Button */}
        <TouchableOpacity style={styles.wakeButton} onPress={handleWakeDevices}>
          <Text style={styles.wakeText}>Wake All Devices</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomBar />
    </View>
  );
};

export default SleepModeScreen;

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#f2d7aa' },
  container: { padding: 20, paddingBottom: 100 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 6 },
  subtitle: { fontSize: 14, color: '#333', marginBottom: 12 },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#d2aa6d',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionTitle: { fontWeight: 'bold', fontSize: 16 },
  sectionHeader: { fontSize: 16, fontWeight: 'bold', marginVertical: 8 },
  dropdownToggle: {
    backgroundColor: '#f5e3c2',
    padding: 10,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownContainer: { marginBottom: 10 },
  dropdownItem: {
    backgroundColor: '#fff3dd',
    padding: 10,
    marginTop: 4,
    borderRadius: 6,
  },
  selectedItem: {
    backgroundColor: '#d2aa6d',
  },
  deviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f5e3c2',
    borderRadius: 8,
    marginBottom: 6,
  },
  deviceIcon: { width: 24, height: 24, marginRight: 10 },
  deviceText: { fontSize: 16 },
  wakeButton: {
    backgroundColor: '#f5e3c2',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
  },
  wakeText: { fontWeight: 'bold', fontSize: 16 },
});
