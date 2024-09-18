import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';  
import { useNavigation } from "@react-navigation/native";
import Back from '../../assets/Svgs/BackIcon.svg';
import ShoppingBag from '../../assets/Svgs/shoppingBag.svg';


const prescriptions = [
  { id: '1',dateColor:'#ff7777', date: '12.10.2024', number: '#1', meds: ['Med 1', 'Med 2', 'Med 3'], bgColor: '#ffe9e9' },
  { id: '2',dateColor:'#18bc9c', date: '12.10.2024', number: '#2', meds: ['Med 1', 'Med 2', 'Med 3'], bgColor: '#baebe2' },
  { id: '3',dateColor:'#ff7777', date: '12.10.2024', number: '#3', meds: ['Med 1', 'Med 2', 'Med 3'], bgColor: '#ffe9e9' },
  { id: '4',dateColor:'#18bc9c', date: '12.10.2024', number: '#4', meds: ['Med 1', 'Med 2', 'Med 3'], bgColor: '#baebe2' },
  { id: '5',dateColor:'#18bc9c', date: '12.10.2024', number: '#5', meds: ['Med 1', 'Med 2', 'Med 3'], bgColor: '#baebe2' },
];

export const Prescriptions = () => {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    };

  const renderPrescriptionCard = ({ item }) => (
    <View style={[styles.card, { backgroundColor: item.bgColor }]}>
      <View style={styles.header}>
        <View style={[styles.dateBadge,{backgroundColor:item.dateColor}]}>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
        <TouchableOpacity>
          <Icon name="keyboard-arrow-right" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <Text style={styles.prescriptionNumber}>Prescription {item.number}</Text>

      <View style={styles.medsListContainer}>
        <View style={styles.medsList}>
          {item.meds.map((med, index) => (
            <Text key={index} style={styles.medItem}>• {med}</Text>
          ))}
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <ShoppingBag height={24} width={24} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleBack}style={{backgroundColor:'#fff',borderRadius: 30,borderWidth:1,padding:10}}>
            <Back width={22} height={22} />  
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
    backgroundColor: '#fff',
    
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#000',
  },
  flatlistContainer: {
    padding: 16,
    marginBottom: 100,
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
    
    borderRadius: 71,
    paddingVertical: 6,
    paddingHorizontal: 16,
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
  medsListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 10
  },
  medsList: {
    flex: 1,
  },
  medItem: {
    fontSize: 14,
    color: '#000',
  },
  iconButton: {
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 8,
    marginLeft: 10,
    alignSelf: 'flex-end',
  },
});

