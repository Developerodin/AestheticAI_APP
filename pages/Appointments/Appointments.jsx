import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image ,ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AppointmentCard from '../../components/Cards/AppointmentCard';
import AppointmentCard2  from '../../components/Cards/AppointmentCard2';

export const Appointments = () => {

    const doctorImage = require('../../assets/doctorImage.png');  
  const timeIcon = require('../../assets/clock.png');        
  const locationIcon = require('../../assets/location.png');

    const navigation = useNavigation();

    const handleBack = () => {
        console.log('Back Pressed');
        navigation.goBack();
        
        };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}  onPress={handleBack} activeOpacity={0.8}>
          <Image
            source={require('../../assets/back_icon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.headerText}>Appointments</Text>
        <TouchableOpacity style={styles.calendarButton}>
          <Image
            source={require('../../assets/calendar.png')}
            style={styles.calendarIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={{marginVertical:25,fontSize:18,color:'#000'}}>Upcoming</Text>
      <AppointmentCard
        doctorImage={doctorImage}
        doctorName="Dr. Anand Verma"
        specialization="Dermatologist"
        time="9:30"
        location="Online"
        day="Sat"
        date="2"
        timeIcon={timeIcon}
        locationIcon={locationIcon}
      />
        <AppointmentCard
            doctorImage={doctorImage}
            doctorName="Dr. Anand Verma"
            specialization="Dermatologist"
            time="9:30"
            location="Online"
            day="Sat"
            date="2"
            timeIcon={timeIcon}
            locationIcon={locationIcon}
        />
        <AppointmentCard
            doctorImage={doctorImage}
            doctorName="Dr. Anand Verma"
            specialization="Dermatologist"
            time="9:30"
            location="Online"
            day="Sat"
            date="2"
            timeIcon={timeIcon}
            locationIcon={locationIcon}
        />
        <Text style={{marginVertical:25,fontSize:18,color:'#000'}}>Post Appointments</Text>
        <AppointmentCard2
            doctorImage={doctorImage}
            doctorName="Dr. Anand Verma"
            specialization="Dermatologist"
            day="Sat"
            date="2"
        />
        <AppointmentCard2
            doctorImage={doctorImage}
            doctorName="Dr. Anand Verma"
            specialization="Dermatologist"
            day="Sat"
            date="2"
        />
        <AppointmentCard2
            doctorImage={doctorImage}
            doctorName="Dr. Anand Verma"
            specialization="Dermatologist"
            day="Sat"
            date="2" 
        />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
    marginBottom: 120,
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
    borderRadius: 20,
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

