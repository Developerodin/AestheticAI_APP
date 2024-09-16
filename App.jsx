
import { StyleSheet, Text, View,Alert,Modal,TouchableOpacity  } from "react-native";
import { useCallback, useEffect, useRef, useState } from "react";
import { NavigationContainer,useFocusEffect,useNavigation  } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import BootSplash from 'react-native-bootsplash';

import { Home } from './pages/home/Home';
import { Login } from "./pages/login/Login";
import { WelcomeScreen } from "./pages/onboarding/WelcomeScreen";
import { WelcomeScreen2 } from "./pages/onboarding/WelcomeScreen2";
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
      <Text>Video Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text>Profile Screen</Text>
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
          size={28} 
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

            return <Icon name={iconName} size={28} color={focused ? '#18BC9C' : '#666'} />;
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
            height: 90,
            ...styles.shadow,
          },
          headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        
        {/* Center FAB with Icon */}
        <Tab.Screen
          name="CenterButton"
          component={Home}  // You can use any component for this
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
  gradientIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabContainer: {
    top: -40, // Move the FAB icon above the tab bar
    justifyContent: 'center',
    alignItems: 'center',
  },
  hexagon: {
    width: 60,
    height: 70,
    backgroundColor: 'transparent',
  },
  hexagonInner: {
    width: 60,
    height: 60,
    backgroundColor: '#00d2ff', // Use gradient or solid color
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      { rotate: '45deg' }, // Creating the diamond shape like your image
    ],
    borderRadius: 15, // Optional if you want to soften the edges
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


