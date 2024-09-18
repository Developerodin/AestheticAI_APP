import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const PaymentSlider = ({ disableScroll }) => {
  const [isComplete, setIsComplete] = useState(false);
  const sliderPosition = useRef(new Animated.Value(0)).current;
  const sliderWidth = 300; // Width of the slider track
  const sliderEndValue = sliderWidth - 60; // Subtracting the width of the slider button

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: sliderPosition } }],
    { useNativeDriver: false }
  );

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      if (event.nativeEvent.translationX >= sliderEndValue) {
        // Slide completed, lock the slider at the end
        Animated.timing(sliderPosition, {
          toValue: sliderEndValue,
          duration: 300,
          useNativeDriver: false,
        }).start(() => {
          setIsComplete(true);
          handlePaymentComplete();
          if (disableScroll) disableScroll(false);  // Re-enable scroll after completion
        });
      } else {
        // Reset the slider if not fully dragged
        Animated.spring(sliderPosition, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
        if (disableScroll) disableScroll(true); // Disable scrolling while sliding
      }
    }
  };

  const handlePaymentComplete = () => {
    console.log("Payment successful!");
  };

  return (
    <View style={styles.container}>
      {/* Payment Info */}
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:'center'}}>
      
<View style={{flexDirection:"row",alignItems:'center'}}>
<View style={{borderWidth:1,padding:10,backgroundColor:'black',borderRadius:15,marginRight:20}}>
<Image source={require('../../assets/images/gpay-icon.png')} style={styles.paymentIcon} />
</View>
  
  <View>
  <Text style={styles.paymentText}>Pay using</Text>
  <Text style={styles.paymentMethod}>Google Pay</Text>
  </View>
</View>

  
  <View>
  <Text style={styles.paymentAmount}>₹1130</Text>
  </View>
  
</View>

      {/* Slider */}
      <View style={styles.sliderTrack}>
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStateChange}
          enabled={!isComplete} // Disable sliding after completion
        >
          <Animated.View
            style={[
              styles.sliderButton,
              {
                transform: [
                  {
                    translateX: sliderPosition.interpolate({
                      inputRange: [0, sliderEndValue],
                      outputRange: [0, sliderEndValue],
                      extrapolate: 'clamp', // Prevent sliding beyond the end
                    }),
                  },
                ],
              },
            ]}
          >
            {isComplete ? (
              <Icon name="check" size={30} color="white" />
            ) : (
              <Text style={styles.sliderArrow}>{'>'}</Text>
            )}
          </Animated.View>
        </PanGestureHandler>
        {!isComplete && <Text style={styles.sliderText}>Slide to Pay</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    padding: 20,
    
  },
  paymentInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  paymentIcon: {
    width: 30,
    height: 30,

  },
  paymentText: {
    fontSize: 14,
    color: '#757575',
    marginRight: 5,
  },
  paymentMethod: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 20,
  },
  paymentAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#009688',
    marginLeft: 'auto',
  },
  sliderTrack: {
    width:'100%',
    height:75,
    borderRadius: 100,
    backgroundColor: '#D1F2EB',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    marginTop:30
  },
  sliderButton: {
    width:60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#18BC9C',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderArrow: {
    fontSize: 24,
    color: 'white',
  },
  sliderText: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    color: '#757575',
  },
});

export default PaymentSlider;











{/* <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:'center'}}>
      
<View style={{flexDirection:"row",alignItems:'center'}}>
<View>
<Image source={require('../../assets/images/gpay-icon.png')} style={styles.paymentIcon} />
</View>
  
  <View>
  <Text style={styles.paymentText}>Pay using</Text>
  <Text style={styles.paymentMethod}>Google Pay</Text>
  </View>
</View>

  
  <View>
  <Text style={styles.paymentAmount}>₹1130</Text>
  </View>
  
</View> */}