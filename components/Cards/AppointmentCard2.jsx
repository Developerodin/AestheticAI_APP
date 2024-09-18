import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AppointmentCard2 = ({ doctorImage, doctorName, specialization, day, date,onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.leftSection}>
        <Image source={doctorImage} style={styles.doctorImage} />
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>{doctorName}</Text>
          <Text style={styles.specialization}>{specialization}</Text>
        </View>
      

      <View style={styles.rightSection}>
        <Text style={styles.day}>{day}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Bottom Section with "View Reports" and "Download" */}
      <View style={styles.bottomSection}>
        <TouchableOpacity>
          <Text style={styles.linkText}>View Reports</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Download</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 36,
    padding: 10,
    marginBottom: 15,
    paddingVertical: 20,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  doctorImage: {
    width: 54,
    height: 54,
    borderRadius: 25,
    marginRight: 10,
  },
  doctorInfo: {
    justifyContent: 'center',
    marginLeft: 8,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  specialization: {
    fontSize: 14,
    color: '#000',
  },
  rightSection: {
    alignItems: 'center',
    backgroundColor: '#e6f9f3',
    borderRadius: 21,
    paddingHorizontal: 30,
    paddingVertical: 8,
    position: 'absolute',
    right: 2,
  },
  day: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  divider: {
    height: 1,
    backgroundColor: '#3D3D3D',
    marginVertical: 20,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  linkText: {
    fontSize: 16,
    color: '#000',
    textDecorationLine: 'underline',
  },
});

export default AppointmentCard2;
