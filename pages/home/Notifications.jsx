import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Back from '../../assets/Svgs/BackIcon.svg';



const dataMessages = [
  {
    id: '1',
    name: 'Darlene Robertson',
    message: "Hey, How's your health?",
    image: require('../../assets/profile1.png'),
  },
  {
    id: '2',
    name: 'Brooklyn Simmons',
    message: "Hey, How's your health?",
    image: require('../../assets/profile2.png'),
  },
  {
    id: '3',
    name: 'Floyd Miles',
    message: "Hey, How's your health?",
    image: require('../../assets/profile3.png'),
  },
  {
    id: '4',
    name: 'Cameron Williamson',
    message: "Hey, How's your health?",
    image: require('../../assets/profile4.png'),
  },
  {
    id: '5',
    name: 'Ronald Richards',
    message: "Hey, How's your health?",
    image: require('../../assets/profile2.png'),
  },
  {
    id: '6',
    name: 'Darlene Robertson',
    message: "Hey, How's your health?",
    image: require('../../assets/profile1.png'),
  },
  {
    id: '7',
    name: 'Brooklyn Simmons',
    message: "Hey, How's your health?",
    image: require('../../assets/profile2.png'),
  },
  {
    id: '8',
    name: 'Floyd Miles',
    message: "Hey, How's your health?",
    image: require('../../assets/profile3.png'),
  },
  {
    id: '9',
    name: 'Cameron Williamson',
    message: "Hey, How's your health?",
    image: require('../../assets/profile4.png'),
  },
 
];

const dataNotifications = [
  {
    id: '1',
    name: 'Dr. Smith',
    message: 'updated the prescription.',
    image: require('../../assets/profile1.png'),
  },
  {
    id: '2',
    name: 'Brooklyn',
    message: 'updated the prescription.',
    image: require('../../assets/profile2.png'),
  },
  {
    id: '3',
    name: 'Floyd Miles',
    message: 'updated the prescription.',
    image: require('../../assets/profile3.png'),
  },
  {
    id: '4',
    name: 'Cameron Williamson',
    message: 'updated the prescription.',
    image: require('../../assets/profile4.png'),
  },
  {
    id: '5',
    name: 'Ronald Richards',
    message: 'updated the prescription.',
    image: require('../../assets/profile2.png'),
  },
];

export const Notifications = () => {
    const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Notifications');

  const handleBack = () => {
    console.log('Back Pressed');
    navigation.goBack();
    
    };

  const renderCard = ({item}) => (
    <View style={styles.cardContainer}>
      <Image source={item.image} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.messageText}>{item.message}</Text>
      </View>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>1</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack} activeOpacity={0.8}>
          <Back height={16} width={16} style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.headerText}>Notifications & Messages</Text>
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'Notifications' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('Notifications')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Notifications'
                ? styles.activeTabText
                : styles.inactiveTabText,
            ]}>
            Notifications
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'Messages' && styles.activeTab]}
          onPress={() => setActiveTab('Messages')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Messages'
                ? styles.activeTabText
                : styles.inactiveTabText,
            ]}>
            Messages
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={activeTab === 'Messages' ? dataMessages : dataNotifications}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
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
    textAlign: 'center',
    marginVertical: 20,
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
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 92,
    marginHorizontal: 10,
    backgroundColor: '#E9E9E9',
  },
  activeTab: {
    backgroundColor: '#000',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
  },
  activeTabText: {
    color: '#fff',
  },
  inactiveTabText: {
    color: '#000',
  },
  listContainer: {
    paddingBottom: 20,
    borderRadius: 42,

    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 30,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  profileImage: {
    width: 54,
    height: 54,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  messageText: {
    fontSize: 14,
    color: '#6e6e6e',
  },
  badge: {
    backgroundColor: '#18BC9C',
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 15,
  },
  badgeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
