import React from 'react';
import { View, ScrollView, Text, Animated } from 'react-native';
import Header from '../MyComponents/Header';
export default function Main() {
  let scrollOffsetY =React.useRef(new Animated.Value(0)).current; 

  const  Data = Array.from({ length: 30 }, (_, i) =>
  <Text style={{fontSize:30,textAlign: 'center',color:'black'}} key={i}>Item  {i}</Text>   
  )
  return (
    <View style={{flex:1,alignContent:'center',justifyContent:'center',backgroundColor:'white'}}>
      <Header scrollOffsetValue={scrollOffsetY} />
      <ScrollView         
        onScroll={
          Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
          {useNativeDriver: false}
        )}>          
             {
                Data
             }       
      </ScrollView>
    </View>
  );
}

 

