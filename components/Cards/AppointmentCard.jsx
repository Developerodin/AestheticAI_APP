import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AppointmentCard = ({ doctorImage, doctorName, specialization, time, location, day, date, timeIcon, locationIcon,onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.leftSection}>
        <Image source={doctorImage} style={styles.doctorImage} />
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>{doctorName}</Text>
          <Text style={styles.specialization}>{specialization}</Text>
          <View style={styles.details}>
            <Image source={timeIcon} style={styles.icon} />
            <Text style={styles.time}>{time}</Text>
            <Image source={locationIcon} style={styles.icon2} />
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.day}>{day}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 36,
    padding: 10,
    marginBottom: 15,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
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
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
    gap: 10,
  },
  icon: {
    width: 13,
    height: 13,
    

  },
  icon2: {
    width: 10,
    height: 13,
    
    },
  time: {
    marginRight: 10,
    fontSize: 14,
    color: '#000',
  },
  location: {
    fontSize: 14,
    color: '#000',
  },
  rightSection: {
    alignItems: 'center',
    backgroundColor: '#e6f9f3',
    borderRadius: 21,
    
    paddingHorizontal: 30,
    paddingVertical: 8,
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
});

export default AppointmentCard;
