import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity ,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';  // Importing MaterialIcons

// Sample prescription data
const prescriptions = [
  { id: '1', date: '12.10.2024', number: '#1', meds: ['Med 1', 'Med 2', 'Med 3'], bgColor: '#FFE4E1' },
  { id: '2', date: '12.10.2024', number: '#2', meds: ['Med 1', 'Med 2', 'Med 3'], bgColor: '#C3EAE4' },
  { id: '3', date: '12.10.2024', number: '#3', meds: ['Med 1', 'Med 2', 'Med 3'], bgColor: '#FFE4E1' },
  { id: '4', date: '12.10.2024', number: '#4', meds: ['Med 1', 'Med 2', 'Med 3'], bgColor: '#C3EAE4' },
  { id: '5', date: '12.10.2024', number: '#5', meds: ['Med 1', 'Med 2', 'Med 3'], bgColor: '#C3EAE4' },
];

export const Prescriptions = () => {
  const renderPrescriptionCard = ({ item }) => (
    <View style={[styles.card, { backgroundColor: item.bgColor }]}>
      <View style={styles.header}>
        <View style={styles.dateBadge}>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
        <TouchableOpacity>
          {/* Icon wrapped inside a View */}
          <Icon name="keyboard-arrow-right" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <Text style={styles.prescriptionNumber}>Prescription {item.number}</Text>

      <View style={styles.medsList}>
        {item.meds.map((med, index) => (
          <Text key={index} style={styles.medItem}>• {med}</Text>
        ))}
      </View>

      <TouchableOpacity style={styles.iconButton}>
        {/* Icon remains within TouchableOpacity */}
        <Icon name="shopping-cart" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    <View style={styles.headerContainer}>
    <TouchableOpacity>
      <Icon name="arrow-back" size={24} color="#333" />  
    </TouchableOpacity>
    <Text style={styles.headerTitle}>My Prescriptions</Text>
  </View>
    
    <FlatList
      data={prescriptions}
      renderItem={renderPrescriptionCard}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.flatlistContainer}
      showsVerticalScrollIndicator={false}
    />
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f8f8',
      },
      headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
      },
      headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 12,
        color: '#333',
      },
      flatlistContainer: {
        paddingBottom: 16,
       
        margin: 10,
      },
  card: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  dateBadge: {
    backgroundColor: '#FF6F61',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  dateText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  prescriptionNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  medsList: {
    marginVertical: 8,
  },
  medItem: {
    fontSize: 14,
    color: '#333',
  },
  iconButton: {
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 8,
    alignSelf: 'flex-end',
  },
});


