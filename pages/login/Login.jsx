import React, { useState } from 'react';
import { View,Text, TextInput, Button, StyleSheet, Image,Dimensions,TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { GradientText } from '../../components/GradientText/GradientText';

const { width, height } = Dimensions.get("window");
export const Login = () =>{
    const [step, setStep] = useState(1); // To track the current step in the form (mobile number or OTP)
    const [active,setActive]=useState(true);
  // Animation values
  const topImageOpacity = useSharedValue(1); // Opacity for Image 1 (initially visible)
  const bottomImageOpacity = useSharedValue(0); // Opacity for Image 2 (initially hidden)

  // Animation styles for both images
  const topImageStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(topImageOpacity.value, { duration: 500 }),
    };
  });

  const bottomImageStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(bottomImageOpacity.value, { duration: 500 }),
    };
  });

  // Handle "Next" button click
  const handleNextClick = () => {
    console.log("Btn click ===>")
    if (step === 1) {
      // Hide the top image and show the bottom image
      topImageOpacity.value = 0;  // Hide Image 1
      bottomImageOpacity.value = 1; // Show Image 2
      setActive(false)
      setStep(2); // Move to the OTP step
    }
  };

  const handleContinue = ()=>{
    console.log("Continue Clicked")
  }

  return (
    <View style={{flex:1}}>
      {/* Top Image (Image 1) */}
     {
      active ?  
      
      <View style={styles.container}>
      <Animated.View style={[styles.imageContainer, topImageStyle]}>
        <Image source={require('../../assets/images/signin1.png')} style={styles.image} />
      </Animated.View>

      {/* Bottom Image (Image 2) */}
     

      {/* Login/OTP Form (Centered Input and Button) */}
      <View style={styles.formContainer}>
      
          <View>
            <Text   style={{
    fontSize: 36,
    color: 'black',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.60)',
    textShadowOffset: {width: -1, height: 0.40},
    textShadowRadius: 10,
  }}>Sign in</Text>

            <Text style={{fontSize:20,color:"black",fontWeight:400,marginTop:30}}>Enter your mobile no.</Text>

            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:50}}> 
            <TextInput
            style={styles.input}
            placeholder=""
            keyboardType="numeric"
            value='+91 9876543210'
          />


            </View>
         
          </View>
       

        <View> 
        <TouchableOpacity style={[styles.button,{marginTop:40,}]} onPress={handleNextClick}>
      <Text style={styles.buttonText}>Send OTP</Text>
    </TouchableOpacity>
        </View>
      </View>

      </View>
      :
      <View style={{flex:1}}>
      <View style={styles.formContainer2}>
     
          <View>
            <Text   style={{
    fontSize: 36,
    color: 'black',
    fontWeight: 'bold',
   
  }}>Enter the OTP sent to</Text>
            
            <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
            <Text style={{fontSize:21,color:"black",fontWeight:400}}>+91 987654321 </Text>

            <TouchableOpacity style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:-5,marginLeft:10}}>
         
           <GradientText fontSize={"18"} text={"Edit"} />
            </TouchableOpacity>

               </View>
           

            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:50}}> 
            <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            keyboardType="numeric"
          />


            </View>
         
          </View>
      

        <View > 
        <TouchableOpacity style={[styles.button,{marginTop:25}]} onPress={handleContinue}>
      <Text style={styles.buttonText}>Continue</Text>
    </TouchableOpacity>


     
        </View>

        <View  style={{borderWidth:1,flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%"}}> 
      <Text style={{fontSize:17,color:"black",fontWeight:500,borderWidth:1}}>Didn't receive a code? </Text>

         <TouchableOpacity >
         
           <GradientText fontSize={"18"} text={"Resend"} />
            </TouchableOpacity>
      </View>
       
      </View>
      <Animated.View style={[styles.imageContainer2, bottomImageStyle]}>
        <Image source={require('../../assets/images/signin2.png')} style={styles.image2} />
      </Animated.View> 
      </View>
     }
      
   
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the form on the screen
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'absolute', // Position images absolutely
    top: 0,
    width: '100%',
    paddingBottom:20,
  // Set a fixed height for the image container
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer2: {
    position: 'absolute', // Position images absolutely
    bottom: 0,
    width: '100%',
    paddingBottom:20,
  // Set a fixed height for the image container
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
   marginTop:-110,
    width:width,
    height:420,


  },
  image2: {
     marginBottom:-200,
     width:width,
     height:420,
 
 
   },
  formContainer: {
    padding:20,
    width: '100%', // Center the form on the screen
    marginTop:190,

  },
  formContainer2: {
    padding:20,
    width: '100%', // Center the form on the screen
    marginTop:70,

  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 20,
    width:230,
    fontSize:25,
    letterSpacing:1
  },
  button: {
  
    backgroundColor: 'black',
    width:'100%',
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50, // Half of height to make the button round

  },
  buttonText: {
    color: 'white',
    fontSize: 19,
   
  },
  textBackground: {
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'transparent', // Needed for gradient text
    color: 'transparent', // This makes the text color transparent so the gradient shows through
  },
});