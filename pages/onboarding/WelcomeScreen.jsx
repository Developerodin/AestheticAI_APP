import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export const WelcomeScreen = () => {
    const navigation = useNavigation();
    const handelNext = ()=>{
        navigation.navigate("WelcomeScreen2")
    }

    const translateY = useSharedValue(200); // Initially positioned below the screen

    // Animation style
    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: translateY.value }],
      };
    });
  
    // Trigger the animation on mount
    useEffect(() => {
      // Animate from bottom to the original position (0)
      translateY.value = withTiming(0, {
        duration: 500, // Adjust duration to your needs
      });
    }, []);
  return (
   <View style={styles.container}>
    <View style={{padding:30,marginTop:40}}>
    <Text style={{fontSize:32,color:"black",fontWeight:"bold"}}>Welcome to</Text>
    <Text style={{fontSize:36,color:"black",fontWeight:"bold"}}>Aesthetics AI</Text>
    </View>


    <View style={{ height: 400, marginTop: 30 }}>
      <Animated.Image
        source={require('../../assets/images/onboarding1.png')}
        style={[styles.image, animatedStyle]} // Apply animated style
      />
    </View>
   
<View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:30,position:"absolute",bottom:10,width:"100%"}}>
 <View>
    <Text style={styles.text} >Your</Text>
    <Text style={styles.text}>personalized</Text>
    <Text style={styles.text}>healthcare</Text>
    <Text style={styles.text}>companion.</Text>
 </View>

 <TouchableOpacity
                style={[styles.button, {marginTop: 25}]}
                onPress={handelNext}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
</View>
   </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
      },
    text:{
        fontSize:24,
        color:"black",
        fontWeight:'bold',
        marginTop:-10
    },
    button: {
        backgroundColor: 'black',
        width:120,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50, // Half of height to make the button round
      },
      buttonText: {
        color: 'white',
        fontSize: 19,
      },
 })