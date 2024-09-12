
import { StyleSheet, Text, View,Alert,Modal  } from "react-native";
import { useCallback, useEffect, useRef, useState } from "react";
import { NavigationContainer,useFocusEffect,useNavigation  } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import BootSplash from 'react-native-bootsplash';

import { Home } from './pages/home/Home';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const Tabs = ({navigation}) => {
//   return (
 
// <Tab.Navigator
//     screenOptions={{
//       tabBarActiveTintColor: 'black',
//       tabBarInactiveTintColor :'grey',
//       tabBarLabelStyle:{color:"black"},
//       tabBarStyle: {borderWidth:1, backgroundColor: '#F1F1F1',color:"#fff",position:'absolute',bottom:0,paddingTop:2,paddingBottom:3},
//     }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: ({ color, size }) => (

          
//             <Ionicons name="home" color={color} size={size}  />
//           ),
//           headerShown: false,
//         }}
       
     
//       />

//     </Tab.Navigator>

 
    
//   );
// };


export default function App() {

  const [Auth, setAuth]=useState(null);
  const [isAppFirstLaunched, setIsAppFirstLaunched] =useState(null);
  const [appIsReady, setAppIsReady] = useState(false);


  return (
   
<NavigationContainer onReady={() => BootSplash.hide({ fade: true })} >

         <Stack.Navigator initialRouteName={ Auth ? 'Home' : 'Home'}>
    
 <Stack.Screen name="Home" component={Home}
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
});
