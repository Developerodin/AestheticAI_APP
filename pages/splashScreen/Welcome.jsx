import React from 'react'
import { FlatList, SafeAreaView, StyleSheet,ScrollView,  View,Dimensions,TouchableOpacity, Image,Animated, TextInput } from 'react-native'

const {width, height} = Dimensions.get('window');

export const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
   
  
   
    
      
    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",flex:1}}>
      <Image
        source={require('../../../assets/samsara-logo.png')}
        style={{resizeMode: 'contain'}}
      />
      </View>
    


</View>
  )
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      width:width,
      height:height
    },
    Text_Container:{
      flex: 0.9,
      justifyContent:"center",
      alignItems:"left",
      padding:30
    },
    Image: {
      ...StyleSheet.absoluteFillObject,
      height:height,
      width : width
  },
  
    });