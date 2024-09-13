import React,{ useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import Svg, {  Defs, LinearGradient, Stop,Rect } from 'react-native-svg';
import { GradientText } from '../../components/GradientText/GradientText';

export const Home = () => {

  const scrollViewRef = useRef();

  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  const selfCareData = [
    {
      id: '1',
      title: 'Maintain Healthy Skin in Winter.',
      image: require('../../assets/skin-care.png'), 
      bgColor: '#FF8D8D',
    },
    {
      id: '2',
      title: 'Top 5 Foods for Healthy Teeth.',
      image: require('../../assets/healthy-teeth.png'),
      bgColor: '#A3D273',
    },
    {
      id: '3',
      title: 'The Importance of Flossing Daily.',
      image: require('../../assets/flossing.png'),
      bgColor: '#3787FF',
    },
    {
      id: '4',
      title: 'Maintain Healthy Skin in Winter.',
      image: require('../../assets/skin-care.png'),
      bgColor: '#FF8D8D',
    },
    {
      id: '5',
      title: 'Top 5 Foods for Healthy Teeth.',
      image: require('../../assets/healthy-teeth.png'),
      bgColor: '#A3D273',
    },
    {
      id: '6',
      title: 'The Importance of Flossing Daily.',
      image: require('../../assets/flossing.png'),
      bgColor: '#3787FF',
    },
  ];

  const reorderData = [
    {
      id: '1',
      title: 'Niny Face Serum',
      subtitle: '100 ml',
      image: require('../../assets/serum.png'),
      discount: '15%',
    },
    {
      id: '2',
      title: 'Niny Face Serum',
      subtitle: '100 ml',
      image: require('../../assets/serum.png'),
      discount: '15%',
    },
  ];
  return (
    <>
      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: '#fff',marginBottom:50}}>
          <View style={styles.container1}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../../assets/company-logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.titleText}>Aesthetics AI</Text>
            </View>

            <View style={styles.chatIconContainer}>
              <Image
                source={require('../../assets/chat-icon.png')}
                style={styles.chatIcon}
                resizeMode="contain"
              />

              <View style={styles.notificationBadge}>
                <Text style={styles.notificationText}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.backgroundCard}></View>

            <View style={styles.card}>
              <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Upcoming Appointments</Text>
                <TouchableOpacity style={styles.arrowButton} activeOpacity={0.8}>
                  <Image
                    source={require('../../assets/arrow.png')}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.contentContainer}>
                <View style={styles.dateContainer}>
                  <Text style={styles.dayText}>Wed</Text>
                  <Text style={styles.dateText}>10</Text>
                </View>

                <Image
                  source={require('../../assets/doctor.png')}
                  style={styles.doctorImage}
                />

                <View style={styles.infoContainer}>
                  <View style={styles.row}>
                    <Image
                      source={require('../../assets/clock.png')}
                      style={styles.icon}
                    />
                    <Text style={styles.infoText}>9:30</Text>
                  </View>
                  <View style={styles.row}>
                    <Image
                      source={require('../../assets/location.png')}
                      style={styles.icon}
                    />
                    <Text style={styles.infoText}>Online</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
            <Text style={{color: '#000', fontSize: 14,textAlign:'center'}}>Click the card to view all</Text>

          <View style={{backgroundColor: '#fff', marginTop: 5}}>
            <View style={styles.card1}>
              <Text style={styles.headerText1}>Quick Access</Text>
              <View style={styles.iconContainer1}>
                <View style={styles.iconBlock1}>
                  <TouchableOpacity style={styles.arrowButton1} activeOpacity={0.8}>
                    <Image
                      source={require('../../assets/schedule.png')}
                      style={styles.icon1}
                    />
                  </TouchableOpacity>
                  <Text style={styles.iconText1}>Schedule an appointment</Text>
                </View>
                <View style={styles.iconBlock1}>
                  <TouchableOpacity style={styles.arrowButton1} activeOpacity={0.8}>
                    <Image
                      source={require('../../assets/orders.png')}
                      style={styles.icon1}
                    />
                  </TouchableOpacity>
                  <Text style={styles.iconText1}>My Orders</Text>
                </View>
                <View style={styles.iconBlock1}>
                  <TouchableOpacity style={styles.arrowButton1} activeOpacity={0.8}>
                    <Image
                      source={require('../../assets/medicine.png')}
                      style={styles.icon1}
                    />
                  </TouchableOpacity>
                  <Text style={styles.iconText1}>Shop Medicines</Text>
                </View>
                <View style={styles.iconBlock1}>
                  <TouchableOpacity style={styles.arrowButton1} activeOpacity={0.8}>
                    <Image
                      source={require('../../assets/subscriptions.png')}
                      style={styles.icon1}
                    />
                  </TouchableOpacity>
                  <Text style={styles.iconText1}>My Subscriptions</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.container2}>
          <Svg height="100%" width="100%" style={styles.backgroundSvg}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="30%" stopColor="#18BC9C" stopOpacity="1" />
            
            <Stop offset="40%" stopColor="#9bded1" stopOpacity="1" />
            <Stop offset="60%" stopColor="#ffffff" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Essential Self Care</Text>
              <Text style={styles.sectionSubtitle}>✨ Just for you</Text>
              <FlatList
                data={selfCareData}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <View style={[styles.card2, {backgroundColor: item.bgColor}]}>
                    <Image source={item.image} style={styles.cardImage} />
                    <Text style={styles.cardTitle}>{item.title}</Text>
                  </View>
                )}
              />
            </View>

            <View style={styles.card3}>
              <Text style={styles.sectionTitle1}>Reorder</Text>
              <Text style={styles.sectionSubtitle1}>
                ✨ Based on your last orders
              </Text>
              <FlatList
                data={reorderData}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <View style={styles.productCard}>
                    <Image source={item.image} style={styles.productImage} />
                    <View style={styles.productInfo}>
                      <View></View>
                      <Text style={styles.productTitle}>{item.title}</Text>
                      <Text style={styles.productTitle}>{item.subtitle}</Text>

                      <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
                        <Text style={styles.addButtonText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
          <View style={styles.container3}>
      
      <View style={styles.textContainer}>
      <Svg height="25" width="200">
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="5%" stopColor="#12c9ab" stopOpacity="1" />
            <Stop offset="100%" stopColor="#12bab0" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Text
          x="0"
          y="40"
          fontSize="24"
          fontWeight="bold"
          fill="url(#grad)"
          style={styles.textLine1}
        >
          We care for you &
        </Text>
      </Svg>
        <Text style={styles.textLine2}>We've got you covered!</Text>
        
      </View>

     
      <TouchableOpacity style={styles.buttonContainer} onPress={scrollToTop} activeOpacity={0.8}>
        <View style={styles.svgContainer}>
      <Svg height="80" width="106">
  <Defs>
    <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <Stop offset="25%" stopColor="#12c1ae" stopOpacity="1" />
      <Stop offset="35%" stopColor="#12aab4" stopOpacity="1" />
      <Stop offset="100%" stopColor="#1184c0" stopOpacity="1" />
    </LinearGradient>
  </Defs>
  <Rect
    x="0"
    y="0"
    width="106"
    height="80"
    fill="url(#grad)"
    rx="39"
    ry="39"
    style={{ borderRadius: 39, }}
  />
</Svg>
      <Image source={require('../../assets/up-arrow-icon.png')} style={styles.icon3} />
      <Text style={styles.buttonText}>Go to Top</Text>
      </View>
    </TouchableOpacity>
    </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: '#fff',
  },
  backgroundCard: {
    position: 'absolute',
    top: 75,
    left: 0,
    right: 0,

    height: 140,
    backgroundColor: '#61CFBA',
    borderRadius: 16.55,
    marginHorizontal: 30,
  },
  card: {
    backgroundColor: '#18BC9C',
    borderRadius: 18,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 0,
    height: 174,
    elevation: 5,
    textAlign: 'center',
    zIndex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 18,
  },
  arrowButton: {
    backgroundColor: '#ECFFFB',
    borderRadius: 20,
    padding: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  dateContainer: {
    backgroundColor: '#0F826C',
    margin: 0,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 76,
    width: 100,
  },
  dayText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  dateText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  doctorImage: {
    width: 89,
    height: 76,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    justifyContent: 'space-between',
    marginLeft: 50,
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 18,
    color: '#000',
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  card1: {
    backgroundColor: '#ECFFFB',
    borderRadius: 18,
    padding: 15,

    marginHorizontal: 20,
    marginVertical: 15,
    textAlign: 'center',
  },
  headerText1: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBlock1: {
    alignItems: 'center',
    flex: 1,
  },
  icon1: {
    width: 16,
    height: 16,
  },
  iconText1: {
    fontSize: 12,
    textAlign: 'center',
    color: '#000',
  },
  arrowButton1: {
    backgroundColor: '#18BC9C',
    borderRadius: 20,
    padding: 10,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#fff',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40, 
    height: 40, 
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#000',
  },
  chatIconContainer: {
    position: 'relative',
  },
  chatIcon: {
    width: 30,
    height: 30,
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#FF0000',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  container2: {
    flex: 1,
    backgroundColor: '#18BC9C', 
  },
  sectionContainer: {
    padding: 16,
    marginBottom: 20,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#fff',
    marginLeft: 16,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 16,
    marginLeft: 16,
    fontWeight: '600',
  },
  card2: {
    marginTop: 14,
    width: 200,
    borderRadius: 32,
    marginRight: 16,

    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 26,
    paddingTop: 5,
    justifyContent: 'space-between',
    height: 220,
  },
  cardImage: {
    width: '100%',
    height: 135,
    borderRadius: 32,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
    marginLeft: 15,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6f9f3',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    margin: 30,
   
  },
  productImage: {
    width: 80,
    height: 139,
    borderRadius: 8,
  },
  productInfo: {
    marginLeft: 12,
    marginBottom: 20,
    
  },
  discountBadge: {
    backgroundColor: '#4CAF50',
    borderRadius: 6,
    padding: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  discountText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    
    color: '#000',
  },
  addButton: {
    width: 35,
    height: 35,
    borderRadius: 14,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card3: {
    padding: 16,
    marginBottom: 20,
    borderRadius: 24,
    backgroundColor: '#e6f9f3',
    margin: 16,
  },
  sectionTitle1: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#000',
    marginLeft: 16,
  },
  sectionSubtitle1: {
    fontSize: 14,
    color: '#1195bb',
    marginBottom: 16,
    fontWeight: '600',
    marginLeft: 16,
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#f7f7f7',
    marginTop: 20,

    
  },
  textContainer: {
    
    
    marginBottom: 20,
  },
  textLine1: {
    fontSize: 20,
    
    fontWeight: '700',
    color: '#12c9ab',
  },
  textLine2: {
    fontSize: 20,
    color: '#118abe',
    fontWeight: '700',
  },
  buttonContainer: {
    marginLeft: 40,
   
  },
  gradientButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 39.0,
  },
  icon3: {
    width: 20,
    height: 20,
    marginBottom: 8,
    position: 'absolute',
    top: 16,                
    left: 40,
    
    
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    position: 'absolute',
    top: 40,                
    left: 20,   
  },
  backgroundSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  svgContainer: {
    position: 'relative',  
    
  },
});

export default Home;
