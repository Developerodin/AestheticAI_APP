import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image';
export const WelcomeScreen2 = () => {
    const navigation = useNavigation();
    const handelNext = ()=>{
        navigation.navigate("Tabs")
    }
  return (
   <View style={styles.container}>
    <View style={{padding:30,marginTop:40}}>
    <Text style={{fontSize:32,color:"black",fontWeight:"bold"}}>Scheduling</Text>
    <Text style={{fontSize:36,color:"black",fontWeight:"bold"}}>Appoitments</Text>
    <Text style={{fontSize:34,color:"black",fontWeight:"bold"}}>made easy.</Text>
    </View>


    <View style={{height:400,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
    <FastImage
        style={styles.gifImage}
        source={require('../../assets/images/onboarding2.gif')}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
   
<View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:30,position:"absolute",bottom:10,width:"100%"}}>
 <View>
    <Text style={styles.text} >Book your</Text>
    <Text style={styles.text}>consultations</Text>
    <Text style={styles.text}>with just a few</Text>
    <Text style={styles.text}>Taps.</Text>
 </View>

 <TouchableOpacity
                style={[styles.button, {marginTop: 25}]}
                onPress={handelNext}>
                <Text style={styles.buttonText}>Explore</Text>
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
    image:{
      width:'100%'
    },
    gifImage: {
      width: 400,  // Adjust the width and height according to your need
      height: 400,
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