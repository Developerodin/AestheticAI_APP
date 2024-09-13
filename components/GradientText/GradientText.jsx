import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Text, Defs, LinearGradient, Stop } from 'react-native-svg';

export const GradientText = ({fontSize,text,width}) => {
  return (

    <Svg height="60" width={width}>
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor="#1179C4" stopOpacity="1" />
          <Stop offset="100%" stopColor="#13D7A8" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Text
        fill="url(#grad)"  // This applies the gradient to the text
        fontSize={fontSize}
        
        x="0"
        y="40"
      >
       {text}
      </Text>
    </Svg>

  )
}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
  });
  