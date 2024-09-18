import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Back from '../../assets/Svgs/BackIcon.svg';

export const BookAppointment = () => {
  const navigation = useNavigation(); // Use useNavigation for navigating
  const doctorImage = require('../../assets/doctorImage.png'); 
  const [department, setDepartment] = useState('Dentist');
  const [appointmentType, setAppointmentType] = useState('Consultation');
  const [doctor, setDoctor] = useState('Dr. Dre');
  const [date, setDate] = useState('10 Aug 2024'); // Static date for now
  const handleBack = () => {
    console.log('Back Pressed');
    navigation.goBack();
    
    };
  const departments = ['Dentist', 'Cardiology', 'Pediatrics', 'General Medicine'];
  const appointmentTypes = ['Consultation', 'Check-up', 'Follow-up'];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}  onPress={handleBack} activeOpacity={0.8}>
          <Back height={16} width={16}  />
        </TouchableOpacity>

        <Text style={styles.headerText}>Book an Appointment</Text>
        
      </View>

    


      <View style={{marginTop:10}}>

        <View style={{marginTop:20}}>
        <Text style={styles.label}>Select Department</Text>
      <SelectDropdown
        data={departments}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          setDepartment(selectedItem); // Set the selected department
        }}
        renderButton={(selectedItem, isOpened) => (
          <View style={styles2.dropdownButtonStyle}>
            <Text style={styles2.dropdownButtonTxtStyle}>
              {(selectedItem && selectedItem) || 'Select Department'}
            </Text>
            <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles2.dropdownButtonArrowStyle} />
          </View>
        )}
        renderItem={(item, index, isSelected) => (
          <View style={{ ...styles2.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
            <Text style={styles2.dropdownItemTxtStyle}>{item}</Text>
          </View>
        )}
        dropdownStyle={styles2.dropdownMenuStyle}
      />
        </View>
     

      {/* Appointment Type */}

      <View style={{marginTop:20}}>
      <Text style={styles.label}>Type of Appointment</Text>
      <SelectDropdown
        data={appointmentTypes}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          setAppointmentType(selectedItem); // Set the selected appointment type
        }}
        renderButton={(selectedItem, isOpened) => (
          <View style={styles2.dropdownButtonStyle}>
            <Text style={styles2.dropdownButtonTxtStyle}>
              {(selectedItem && selectedItem) || 'Select Appointment Type'}
            </Text>
            <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles2.dropdownButtonArrowStyle} />
          </View>
        )}
        renderItem={(item, index, isSelected) => (
          <View style={{ ...styles2.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
            <Text style={styles2.dropdownItemTxtStyle}>{item}</Text>
          </View>
        )}
        dropdownStyle={styles2.dropdownMenuStyle}
      />
      </View>
    

      {/* Doctor */}
      <View style={{marginTop:20}}>
      <Text style={styles.label}>Search for a Doctor</Text>
      <View style={styles.doctorContainer}>
        <Text style={[styles.doctorText,{marginLeft:18}]}>{doctor} (Dentist)</Text>
        <Image
          style={styles.doctorImage}
          source={doctorImage} // Replace with actual image URL
        />
      </View>
      </View>
    

      {/* Static Date */}
      <View style={{marginTop:20}}>
      <Text style={styles.label}>Choose Date and Time (Doctor's availability)</Text>
      <TouchableOpacity style={styles.inputContainer}>
        <Text style={{color:"black",marginLeft:10}}>{date}</Text>
        <Icon name="calendar" style={styles.icon} />
      </TouchableOpacity>
      </View>
     
      </View>
      
      {/* Reminder */}

      <View style={{marginTop:20}}>
      <Text style={styles.label}>Set Reminder</Text>
      <LinearGradient colors={['#13D7A8', '#1179C4']} style={[styles.reminderButton,{marginTop:10}]}>
        <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
          <Text style={styles.reminderText}>Remind me 1 hour before</Text>

          <Icon name="alarm" style={{fontSize:24,color:"#fff"}} />
        </TouchableOpacity>
      </LinearGradient>
      </View>
      

      {/* Save & Cancel Buttons */}
      <View style={styles.actions}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles2 = StyleSheet.create({
  // Dropdown Button Styling
  dropdownButtonStyle: {
   
    padding: 14,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  dropdownButtonTxtStyle: {
    fontSize: 14,
    color: '#333',
  },
  dropdownButtonArrowStyle: {
    fontSize: 22,
    color: '#333',
  },
  dropdownItemStyle: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownItemTxtStyle: {
    fontSize: 14,
    color: '#333',
  },
  dropdownMenuStyle: {
    borderRadius: 10,
   
    backgroundColor: '#fff',

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 15,
    marginBottom: 8,
    color: 'black',
    fontWeight:'400'
  },
  doctorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginBottom: 16,
   // Adds shadow on Android
  },
  doctorText: {
    fontSize: 14,
    color: '#333',
  },
  doctorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  inputContainer: {

    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  icon: {
    fontSize: 24,
    color: '#333',
  },
  reminderButton: {
    padding: 15,
    borderRadius: 30,
    marginBottom: 20,
    elevation: 3,
  },
  reminderText: {
    color: '#fff',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
 
  actions: { flexDirection: 'row',justifyContent:"space-between", marginTop: 20 },
  saveButton: { padding:30,width:220, backgroundColor: '#fff', borderRadius: 50 ,borderWidth:1,flexDirection:"row",justifyContent:"center",alignItems:"center"},
 saveButtonText: { color: 'black',fontSize:20 },
  cancelButton:{ padding:30, backgroundColor: '#EE5B5B', borderRadius: 40,width:130,flexDirection:"row",justifyContent:"center",alignItems:"center"},
  cancelButtonText: { color: '#fff',fontSize:20 },
});
