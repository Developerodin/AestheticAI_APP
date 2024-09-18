import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image ,ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AppointmentCard from '../../components/Cards/AppointmentCard';
import AppointmentCard2  from '../../components/Cards/AppointmentCard2';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CalendarModal from '../../components/Models/CalenderModel';
export const Appointments = () => {

    const doctorImage = require('../../assets/doctorImage.png');  
  const timeIcon = require('../../assets/clock.png');        
  const locationIcon = require('../../assets/location.png');

    const navigation = useNavigation();

    const handleBack = () => {
        console.log('Back Pressed');
        navigation.goBack();
        
        };

    const handleClick = ()=>{
      navigation.navigate('Appointments Details')
      }

      const handleBookAppointmentsClick = ()=>{
        navigation.navigate('Book Appointment')
        }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
        <TouchableOpacity style={styles.backButton}  onPress={handleBack} activeOpacity={0.8}>
          <Image
            source={require('../../assets/back_icon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.headerText}>Appointments</Text>
        </View>
      
        <View>
        <CalendarModal/>
        </View>
       
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
        onPress={handleClick}
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
            onPress={handleClick}
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
            onPress={handleClick}
        />
        <Text style={{marginVertical:25,fontSize:18,color:'#000'}}>Post Appointments</Text>
        <AppointmentCard2
            doctorImage={doctorImage}
            doctorName="Dr. Anand Verma"
            specialization="Dermatologist"
            day="Sat"
            date="2"
            onPress={handleClick}
        />
        <AppointmentCard2
            doctorImage={doctorImage}
            doctorName="Dr. Anand Verma"
            specialization="Dermatologist"
            day="Sat"
            date="2"
            onPress={handleClick}
        />
        <AppointmentCard2
            doctorImage={doctorImage}
            doctorName="Dr. Anand Verma"
            specialization="Dermatologist"
            day="Sat"
            date="2" 
            onPress={handleClick}
        />


<View style={[styles2.container,{marginBottom:120}]}>
  <View>
  <Text style={styles2.text}>Book a new</Text>
  <Text style={styles2.text}>Appointment</Text>
  </View>
      
      <TouchableOpacity onPress={handleBookAppointmentsClick} style={styles2.button}>
        <Icon name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
   
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between",
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

const styles2 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00b59c', // Similar green background color
    padding: 25,
    borderRadius: 100, // Rounded corners
    justifyContent: 'space-between',
    width: '100%', // Adjust width as needed
    margin: 10,
    height:100
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 50, // Circular button
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
