import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Back from '../../assets/Svgs/BackIcon.svg';

const AppointmentsDetails = () => {
  const navigation = useNavigation();
  const doctorImage = require('../../assets/doctorImage.png');  
  const timeIcon = require('../../assets/clock.png');        
  const locationIcon = require('../../assets/location.png');

  const handleBack = () => {
    console.log('Back Pressed');
    navigation.goBack();
    
    };

    const handleRescheduleAppointment= () => {
      console.log('Reschedule Appointment');
      navigation.navigate('Reschedule Appointment');
      
      }; 
  return (
    <ScrollView style={styles.container}>
      <View style={styles2.headerContainer}>
        <TouchableOpacity style={styles2.backButton}  onPress={handleBack} activeOpacity={0.8}>
          <Back height={16} width={16}  />
        </TouchableOpacity>

        <Text style={styles2.headerText}>Appointments</Text>
        <TouchableOpacity style={styles2.calendarButton}>
          
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.cardHeader}>
        <Image source={doctorImage} style={styles2.doctorImage} />
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
          <View style={[styles.row,{marginLeft:20}]}>
            <Icon name="time-outline" size={20} color={'black'} />
            <Text style={styles.detailText}>9:30 - 10:30</Text>
          </View>
          <View style={[styles.row,{marginLeft:30}]}>
            <Icon name="location-outline" size={20} color={'black'} />
            <Text style={styles.detailText}>Online</Text>
          </View>

          
        </View>

        <View>
        <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </Text>

          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity onPress={handleRescheduleAppointment} style={styles.rescheduleButton}>
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
  doctorName: { fontSize: 18, fontWeight: 'bold',color:"black" },
  doctorSpeciality: { fontSize: 14, color: 'black' },
  dateCircle: { alignItems: 'center',borderWidth:1,padding:7,width:110,borderRadius:50,backgroundColor:"black" },
  dateCircle: { alignItems: 'center',borderWidth:1,padding:7,width:110,borderRadius:50,backgroundColor:"black" },
  dateText: { fontSize: 24, fontWeight: 'bold',color:"#fff" },
  dayText: { fontSize: 24, color: '#fff', fontWeight: 'bold' },
  appointmentDetails: { marginTop: 20,flexDirection:"row" },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  detailText: { marginLeft: 10,color:"black",fontWeight:'bold' },
  description: { fontSize: 14, color: 'black', marginTop: 10 },
  detailsButton: { marginTop: 10 },
  detailsButtonText: { color: 'black' },
  actions: { flexDirection: 'row',justifyContent:"space-between", marginTop: 20 },
  rescheduleButton: { padding: 30,width:220, backgroundColor: '#fff', borderRadius: 50 ,borderWidth:1,flexDirection:"row",justifyContent:"center",alignItems:"center"},
  rescheduleButtonText: { color: 'black',fontSize:20 },
  cancelButton:{ padding: 30, backgroundColor: '#EE5B5B', borderRadius: 40,width:130,flexDirection:"row",justifyContent:"center",alignItems:"center"},
  cancelButtonText: { color: '#fff',fontSize:20 },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
    marginBottom: 120,
  },
  doctorImage: {
    width: 54,
    height: 54,
    borderRadius: 25,
    marginRight: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: 20,
    position: 'relative',
  },

  backButton: {
    position: 'absolute',

    padding: 12,
    borderRadius: 30,
    borderColor: '#000',
    borderWidth: 1,
  },
  backIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 60,
    color: '#000000',
  },
  calendarButton: {
    position: 'absolute',
    right: 10,
  },
  calendarIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
});

export default AppointmentsDetails;

