import * as React from 'react';
import { Text, Animated } from 'react-native';

export default function Header({scrollOffsetValue}) {
 const maxHeader = 150;
  const minHeader = 50;
  //console.log(scrollOffsetValue);
  const bgColor = scrollOffsetValue.interpolate({
    inputRange: [0, maxHeader - minHeader],
    outputRange: ['blue', 'red'],
    extrapolate: 'clamp'
  })

  const animHeight =  scrollOffsetValue.interpolate({
    inputRange: [0, maxHeader - minHeader],
    outputRange: [maxHeader , minHeader],
    extrapolate: 'clamp'
  })

  return (
    <Animated.View 
        style={{alignItems:'center',justifyContent:'center', height: animHeight, backgroundColor: bgColor  }} >
        <Text style={{textAlign: 'center',color:'white',fontSize:30}}>A List of Books  </Text>  
    </Animated.View>
  );
}


