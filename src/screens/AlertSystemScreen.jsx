import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import BottomBar from '../components/BottomBar';

const AlertSystemScreen = () => {
  const [alertEnabled, setAlertEnabled] = useState(false);
  const [repeatAlert, setRepeatAlert] = useState(false);

  const [roomDropdownOpen, setRoomDropdownOpen] = useState(false);
  const [deviceDropdownOpen, setDeviceDropdownOpen] = useState(false);
  const [durationDropdownOpen, setDurationDropdownOpen] = useState(false);
  const [soundTypeDropdownOpen, setSoundTypeDropdownOpen] = useState(false);

  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedDevice, setSelectedDevice] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('10s');
  const [selectedSoundType, setSelectedSoundType] = useState('Beep');

  const [alertVolume, setAlertVolume] = useState(40);

  const rooms = ['Living Room', 'Bedroom', 'Kitchen'];
  const devices = ['Fan', 'AC'];
  const durations = ['5s', '10s', '15s', '30s'];
  const soundTypes = ['Beep', 'Buzz', 'Chime'];

  const handleReset = () => {
    setAlertEnabled(false);
    setRepeatAlert(false);
    setSelectedRoom('');
    setSelectedDevice('');
    setSelectedDuration('10s');
    setSelectedSoundType('Beep');
    setAlertVolume(40);
  };

  const deviceIcons = {
    Fan: 'https://cdn-icons-png.flaticon.com/512/11212/11212492.png',
    AC: 'https://cdn-icons-png.flaticon.com/512/2933/2933196.png',
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Alert System</Text>
        <Text style={styles.subtitle}>
          Put idle devices Notify users with sound
        </Text>

        {/* Sound Alert Mode */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SOUND ALERT MODE</Text>
          <Switch
            value={alertEnabled}
            onValueChange={setAlertEnabled}
            thumbColor="#fff"
            trackColor={{ false: '#ccc', true: '#a67c52' }}
          />
        </View>

        {/* Room & Device Dropdowns */}
        <View style={styles.row}>
          <Dropdown
            label="Room"
            value={selectedRoom || 'Select Room'}
            open={roomDropdownOpen}
            setOpen={setRoomDropdownOpen}
            options={rooms}
            onSelect={setSelectedRoom}
          />
          <Dropdown
            label="Device Name"
            value={selectedDevice || 'Select Device'}
            open={deviceDropdownOpen}
            setOpen={setDeviceDropdownOpen}
            options={devices}
            onSelect={setSelectedDevice}
          />
        </View>

        {/* Device to Monitor */}
        {selectedRoom && selectedDevice && (
          <>
            <Text style={styles.sectionHeader}>Device to Monitor</Text>
            <View style={styles.deviceRow}>
              <Image source={{ uri: deviceIcons[selectedDevice] }} style={styles.deviceIcon} />
              <Text style={styles.deviceText}>
                {selectedDevice} - {selectedRoom}
              </Text>
            </View>
          </>
        )}

        {/* Sound Duration & Type */}
        <View style={styles.row}>
          <Dropdown
            label="Sound Duration"
            value={selectedDuration}
            open={durationDropdownOpen}
            setOpen={setDurationDropdownOpen}
            options={durations}
            onSelect={setSelectedDuration}
          />
          <Dropdown
            label="Sound Type"
            value={selectedSoundType}
            open={soundTypeDropdownOpen}
            setOpen={setSoundTypeDropdownOpen}
            options={soundTypes}
            onSelect={setSelectedSoundType}
          />
        </View>

        {/* Repeat Alert Toggle */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Repeat Alert</Text>
          <Switch
            value={repeatAlert}
            onValueChange={setRepeatAlert}
            thumbColor="#fff"
            trackColor={{ false: '#ccc', true: '#a67c52' }}
          />
        </View>

        {/* Play Sound */}
        <TouchableOpacity style={styles.testButton}>
          <Text style={styles.testButtonText}>🔊 Play Test sound</Text>
        </TouchableOpacity>

        {/* Alert Volume */}
        <Text style={styles.sectionHeader}>Alert Volume</Text>
        <Text>{alertVolume}%</Text>

        {/* Reset & Save Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Text style={styles.resetText}>Reset All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
};

const Dropdown = ({ label, value, open, setOpen, options, onSelect }) => (
  <View style={styles.dropdownWrapper}>
    <Text style={styles.dropdownLabel}>{label}</Text>
    <Pressable style={styles.dropdownToggle} onPress={() => setOpen(!open)}>
      <Text>{value}</Text>
      <Text>⌄</Text>
    </Pressable>
    {open && (
      <View style={styles.dropdownContainer}>
        {options.map((option) => (
          <Pressable
            key={option}
            style={styles.dropdownItem}
            onPress={() => {
              onSelect(option);
              setOpen(false);
            }}
          >
            <Text>{option}</Text>
          </Pressable>
        ))}
      </View>
    )}
  </View>
);

export default AlertSystemScreen;

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
    marginVertical: 10,
  },
  sectionTitle: { fontWeight: 'bold', fontSize: 16 },
  sectionHeader: { fontSize: 16, fontWeight: 'bold', marginVertical: 8 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  dropdownWrapper: { flex: 1 },
  dropdownLabel: { fontSize: 14, fontWeight: '500', marginBottom: 4 },
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
  deviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5e3c2',
    padding: 10,
    borderRadius: 6,
    marginBottom: 6,
  },
  deviceIcon: { width: 24, height: 24, marginRight: 10 },
  deviceText: { fontSize: 16 },
  testButton: {
    backgroundColor: '#f5e3c2',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    borderWidth: 1,
  },
  testButtonText: { fontSize: 16, fontWeight: 'bold' },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 10,
  },
  resetButton: {
    flex: 1,
    backgroundColor: '#fff3dd',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#d2aa6d',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  resetText: { fontWeight: 'bold' },
  saveText: { fontWeight: 'bold' },
});
