import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {GradientText} from '../../components/GradientText/GradientText';
import {OTPInput} from '../../components/Otp/OtpInputs';

const {width, height} = Dimensions.get('window');
export const Login = () => {
  const [step, setStep] = useState(1); // To track the current step in the form (mobile number or OTP)
  const [active, setActive] = useState(true);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  // Animation values
  const topImageOpacity = useSharedValue(0); // Opacity for Image 1 (initially visible)
  const bottomImageOpacity = useSharedValue(0); // Opacity for Image 2 (initially hidden)

  // Animation styles for both images
  const topImageStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(topImageOpacity.value, {duration: 500}),
    };
  });

  const bottomImageStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(bottomImageOpacity.value, {duration: 500}),
    };
  });

  // Handle "Next" button click
  const handleNextClick = () => {
    console.log('Btn click ===>');
    if (step === 1) {
      // Hide the top image and show the bottom image
      topImageOpacity.value = 0; // Hide Image 1
      bottomImageOpacity.value = 1; // Show Image 2
      setActive(false);
      setStep(2); // Move to the OTP step
    }
  };

  const handleContinue = () => {
    console.log('Continue Clicked');
  };

  const handleOtpFill = () => {
    console.log('OTP Filled');
  };

  const handelEditPress = ()=>{
    setStep(1);
    setActive(true)
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardOpen(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false);
      },
    );

    // Clean up the event listeners when the component unmounts
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const textTranslationY = useSharedValue(-200); // Start outside of the view (from the top)
  const buttonTranslationY = useSharedValue(200); // Start outside of the view (from the bottom)
  const imageTranslationY = useSharedValue(0);
  useEffect(() => {
    // When active is true, animate text and button to their normal positions
    if (active) {
      textTranslationY.value = withTiming(0, {duration: 500}); // Animate text coming down
      buttonTranslationY.value = withTiming(0, {duration: 500}); // Animate button coming up
      imageTranslationY.value = withTiming(-110, { duration: 500 });
    } else {
      textTranslationY.value = withTiming(10, {duration: 500}); // Animate text going up
      buttonTranslationY.value = withTiming(30, {duration: 500}); // Animate button going down
      imageTranslationY.value = withTiming(-300, { duration: 500 });
    }
  }, [active]);

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: textTranslationY.value}],
    };
  });

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: buttonTranslationY.value}],
    };
  });

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: imageTranslationY.value }],
    };
  });
  return (
    <View style={{flex: 1}}>
      {/* Top Image (Image 1) */}
      {active ? (
        <View style={styles.container}>
          {!isKeyboardOpen && (
            <Animated.View style={[styles.imageContainer,animatedImageStyle]}>
              <Image
                source={require('../../assets/images/signin1.png')}
                style={styles.image}
              />
            </Animated.View>
          )}

          {/* Bottom Image (Image 2) */}

          {/* Login/OTP Form (Centered Input and Button) */}
          <View style={styles.formContainer}>
            <View>
              <Text
                style={{
                  fontSize: 36,
                  color: 'black',
                  fontWeight: 'bold',
                  textShadowColor: 'rgba(0, 0, 0, 0.60)',
                  textShadowOffset: {width: -1, height: 0.4},
                  textShadowRadius: 10,
                }}>
                Sign in
              </Text>

              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 400,
                  marginTop: 30,
                }}>
                Enter your mobile no.
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 50,
                }}>
                <TextInput
                  style={styles.input}
                  placeholder=""
                  keyboardType="numeric"
                  value="+91 9876543210"
                />
              </View>
            </View>

            <View>
              <TouchableOpacity
                style={[styles.button, {marginTop: 40}]}
                onPress={handleNextClick}>
                <Text style={styles.buttonText}>Send OTP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <View style={styles.formContainer2}>
          <Animated.View style={[animatedTextStyle]}>
          <Text style={{ fontSize: 36, color: 'black', fontWeight: 'bold' }}>
            Enter the OTP sent to
          </Text>
          
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            <Text style={{ fontSize: 21, color: "black", fontWeight: '400' }}>+91 987654321 </Text>
            <TouchableOpacity onPress={handelEditPress} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: -5, marginLeft: 5 }}>
              <GradientText fontSize={"18"} text={"Edit"} width={"80"} />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
            <OTPInput length={4} onComplete={handleOtpFill} />
          </View>
        </Animated.View>

            <Animated.View
              style={[animatedButtonStyle, {marginTop: 20}]}>
              <TouchableOpacity
                style={[styles.button, {marginTop: 25}]}
                onPress={handleContinue}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>

              
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text style={{fontSize: 16, color: 'black', fontWeight: 400}}>
                Didn't receive a code?
              </Text>

              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: -5,
                  marginLeft: 5,
                }}>
                <GradientText fontSize={'16'} text={'Resend'} width={'80'} />
              </TouchableOpacity>
            </View>
            </Animated.View>

          </View>
          {!isKeyboardOpen && (
            <Animated.View style={[styles.imageContainer2, bottomImageStyle]}>
              <Image
                source={require('../../assets/images/signin2.png')}
                style={styles.image2}
              />
            </Animated.View>
          )}
        </View>
      )}
    </View>
  );
};

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
    paddingBottom: 20,
    // Set a fixed height for the image container
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer2: {
    position: 'absolute', // Position images absolutely
    bottom: 0,
    width: '100%',
    paddingBottom: 20,
    // Set a fixed height for the image container
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop:0,
    width: width,
    height: 420,
  },
  image2: {
    marginBottom: -200,
    width: width,
    height: 420,
  },
  formContainer: {
    padding: 20,
    width: '100%', // Center the form on the screen
    marginTop: 190,
  },
  formContainer2: {
    padding: 20,
    width: '100%', // Center the form on the screen
    marginTop: 70,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 20,
    width: 230,
    fontSize: 25,
    letterSpacing: 1,
  },
  button: {
    backgroundColor: 'black',
    width: '100%',
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
