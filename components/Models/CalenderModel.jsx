import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import { Calendar } from 'react-native-calendars';

const CalendarModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const doctorImage = require('../../assets/doctorImage.png');  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onDateSelect = (day) => {
    setSelectedDate(day.dateString);
    toggleModal(); // Close the modal after selecting a date
  };

  const CustomDay = ({ date, state }) => {
    const dayNames = {
      '0': 'S', // Sunday
      '1': 'M', // Monday
      '2': 'T', // Tuesday
      '3': 'W', // Wednesday
      '4': 'T', // Thursday
      '5': 'F', // Friday
      '6': 'S', // Saturday
    };

    return (
      <View>
        <Text style={{ color: state === 'disabled' ? 'gray' : 'black' }}>
          {dayNames[date.day]} {/* Show the first letter of the day name */}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Modal that will appear from the top with a rounded bottom */}
      <Modal isVisible={isModalVisible} style={styles.modal} onBackdropPress={toggleModal}
      animationIn="slideInDown"  // Slide modal in from the top
        animationOut="slideOutUp"
      >
        <View style={styles.modalContent}>
          <Text style={styles.title}>Calendar View</Text>
          <Calendar
            onDayPress={onDateSelect}
            markedDates={{
              [selectedDate]: { selected: true, selectedColor: '#4355FA' },
            }}
            theme={{
              calendarBackground: 'white',
              textSectionTitleColor: '#000000',
              selectedDayBackgroundColor: '#4355FA',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              arrowColor: 'black',
              monthTextColor: 'black',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '500',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16
            }}
          />

<View style={styles.doctorContainer}>
        <Image
          source={doctorImage}
          style={styles.doctorImage}
        />
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>Dr. Anand Verma</Text>
          <Text style={styles.doctorSpeciality}>Dermatologist</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.selectedDateText}>{selectedDate ? 'Wed 18' : 'Wed 18'}</Text>
        </View>
      </View>

         
        </View>
      </Modal>

      {/* Icon to open the modal */}
      <TouchableOpacity onPress={toggleModal}>
        <Image
          source={require('../../assets/calendar.png')}
          style={styles.calendarIcon}
        />
      </TouchableOpacity>

      {/* Doctor appointment details */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'flex-start', // Modal will start from the top
    margin: 0, // To make it full width and height
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 10,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    alignItems: 'center',
    width: '100%',
    height: '60%',
    justifyContent: 'center',
  },
  calendarIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize:16,
    marginBottom: 10,
    textAlign: 'center',
    color:"black"
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  doctorContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 60,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  doctorInfo: {
    flex: 1,
    paddingLeft: 10,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black'
  },
  doctorSpeciality: {
    fontSize: 14,
    color: '#888',
    color:'black'
  },
  dateContainer: {
    backgroundColor: '#000000',
    borderRadius: 30,
    padding: 15,
    width: 120,
    alignItems: 'center',
  },
  selectedDateText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CalendarModal;
