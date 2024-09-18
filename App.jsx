
import { StyleSheet, Text, View,Alert,Modal,TouchableOpacity  } from "react-native";
import { useCallback, useEffect, useRef, useState } from "react";
import { NavigationContainer,useFocusEffect,useNavigation  } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import BootSplash from 'react-native-bootsplash';

import { Home } from './pages/home/Home';
import { Login } from "./pages/login/Login";
import { Notifications } from "./pages/home/Notifications";
import { Appointments } from "./pages/Appointments/Appointments";
import { WelcomeScreen } from "./pages/onboarding/WelcomeScreen";
import { WelcomeScreen2 } from "./pages/onboarding/WelcomeScreen2";


import { Shop } from "./pages/Shop/Shop";
import { Cart } from "./pages/Shop/Cart";
import { Marketplace } from "./pages/Shop/Marketplace";
import { Prescriptions } from "./pages/Shop/Prescriptions";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Replace with your preferred icon package
import LinearGradient from 'react-native-linear-gradient'; // For gradient icons
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const GradientIcon = ({ name }) => {
  return (
    <LinearGradient
      colors={['#00d2ff', '#3a7bd5']} // Adjust colors to match the image gradient
      style={styles.gradientIcon}
    >
      <Icon name={name} size={24} color="#fff" />
    </LinearGradient>
  );
};

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
    </View>
  );
}

function CalendarScreen() {
  return (
    <View style={styles.screen}>
      <Text>Calendar Screen</Text>
    </View>
  );
}

function VideoScreen() {
  return (
    <View style={styles.screen}>
      <Text>Comming Soon</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text>Comming Soon</Text>
    </View>
  );
}

function CustomTabBarButton({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.fabContainer}
      onPress={onPress}
      activeOpacity={0.9}
    >
      {/* Linear Gradient wrapper */}
      <LinearGradient
        colors={['#13D7A8', '#1179C4']} // Gradient colors
        style={styles.hexagonInner}
      >
        {/* Shopping bag icon with -45 degrees rotation */}
        <Icon 
          name="shopping-bag" 
          size={24} 
          color="#fff" 
          style={{ transform: [{ rotate: '-45deg' }] }} 
        />
      </LinearGradient>
    </TouchableOpacity>
  );
}




const Tabs = ({navigation}) => {
  return (
 
<Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Calendar') {
              iconName = 'calendar-today';
            } else if (route.name === 'Video') {
              iconName = 'videocam';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }

            return <Icon name={iconName} size={24} color={focused ? '#18BC9C' : '#666'} />;
          },
          tabBarShowLabel: false, // Hide tab labels
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#fff',
            borderRadius: 15,
            height: 70,
            ...styles.shadow,
          },
          headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Calendar" component={Appointments} />
        
        {/* Center FAB with Icon */}
        <Tab.Screen
          name="CenterButton"
          component={Shop}  // You can use any component for this
          options={{
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
        
        <Tab.Screen name="Video" component={VideoScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>

 
    
  );
};


export default function App() {

  const [Auth, setAuth]=useState(null);
  const [isAppFirstLaunched, setIsAppFirstLaunched] =useState(null);
  const [appIsReady, setAppIsReady] = useState(false);


  return (
   
<NavigationContainer onReady={() => BootSplash.hide({ fade: true })} >

         <Stack.Navigator initialRouteName={ Auth ? 'Tabs' : 'Login'}>
    

<Stack.Screen name="Tabs" component={Tabs}
          options={{
            headerShown: false,
          }}
        />

<Stack.Screen name="Login" component={Login}
          options={{
            headerShown: false,
          }}
        />  

<Stack.Screen name="Notifications" component={Notifications}
          options={{
            headerShown: false,
          }}
        />

<Stack.Screen name="Appointments" component={Appointments}
          options={{
            headerShown: false,
          }}
        />        

        
<Stack.Screen name="WelcomeScreen" component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />

<Stack.Screen name="WelcomeScreen2" component={WelcomeScreen2}
          options={{
            headerShown: false,
          }}
        />




<Stack.Screen name="Shop" component={Shop}
          options={{
            headerShown: false,
          }}
        />

<Stack.Screen name="Cart" component={Cart}
          options={{
            headerShown: false,
          }}
        />

<Stack.Screen name="Marketplace" component={Marketplace}
          options={{
            headerShown: false,
          }}
        />     

<Stack.Screen name="Prescriptions" component={Prescriptions}
          options={{
            headerShown: false,
          }}
        />           

      </Stack.Navigator>

    

    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  gradientIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabContainer: {
    top: -35, // Move the FAB icon above the tab bar
    justifyContent: 'center',
    alignItems: 'center',
  },
  hexagon: {
    width: 50,
    height: 60,
    backgroundColor: 'transparent',
  },
  hexagonInner: {
    width: 50,
    height: 50,
    backgroundColor: '#00d2ff', // Use gradient or solid color
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      { rotate: '45deg' }, // Creating the diamond shape like your image
    ],
    borderRadius: 12, // Optional if you want to soften the edges
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  
});


