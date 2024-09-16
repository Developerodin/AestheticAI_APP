import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const AppointmentsDetails = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Appointments</Text>

      <View style={styles.appointmentCard}>
        <View style={styles.cardHeader}>
          <Icon name="person-circle-outline" size={50} />
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>Dr. Anand Verma</Text>
            <Text style={styles.doctorSpeciality}>Dermatologist</Text>
          </View>
          <View style={styles.dateCircle}>
            <Text style={styles.dateText}>Sat</Text>
            <Text style={styles.dayText}>2</Text>
          </View>
        </View>

        <View style={styles.appointmentDetails}>
          <View style={styles.row}>
            <Icon name="time-outline" size={20} />
            <Text style={styles.detailText}>9:30 - 10:30</Text>
          </View>
          <View style={styles.row}>
            <Icon name="location-outline" size={20} />
            <Text style={styles.detailText}>Online</Text>
          </View>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </Text>

          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.rescheduleButton}>
            <Text style={styles.rescheduleButtonText}>Reschedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: '#f8f8f8' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  appointmentCard: { backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 20 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  doctorInfo: { flex: 1, marginLeft: 10 },
  doctorName: { fontSize: 18, fontWeight: 'bold' },
  doctorSpeciality: { fontSize: 14, color: '#888' },
  dateCircle: { alignItems: 'center' },
  dateText: { fontSize: 16, fontWeight: 'bold' },
  dayText: { fontSize: 24, color: '#000' },
  appointmentDetails: { marginTop: 20 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  detailText: { marginLeft: 10 },
  description: { fontSize: 14, color: '#888', marginTop: 10 },
  detailsButton: { marginTop: 10 },
  detailsButtonText: { color: '#007bff' },
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  rescheduleButton: { padding: 10, backgroundColor: '#000', borderRadius: 10 },
  rescheduleButtonText: { color: '#fff' },
  cancelButton: { padding: 10, backgroundColor: '#ff4d4d', borderRadius: 10 },
  cancelButtonText: { color: '#fff' },
});

export default AppointmentsDetails;

