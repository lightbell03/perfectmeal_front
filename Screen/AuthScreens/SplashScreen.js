import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Animated,
  Easing,
} from 'react-native';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from '../Utils/Context'; 

const SplashScreen = ({navigation}) => {
  
  const { signIn } = useContext(AuthContext);

  const [animating, setAnimating] = useState(true);

  var Window_width = Dimensions.get('window').width / 120;
  var Window_height = Dimensions.get('window').height / 213.3;

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem('user_id').then((value) =>{
        if(value==null)
         navigation.replace('LoginScreen');
        else
          signIn();
      }
      );
    }, 5000);
  }, []);

  spinValue = new Animated.Value(0);

// First set up animation 
Animated.timing(
    this.spinValue,
  {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear,
    useNativeDriver: true 
  }
).start()

const spin = this.spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg']
})

  return (
    <View style={styles.container}>
      <View style={{marginTop: Window_height*40, alignItems: 'center'}}>
        <Image
          source={require('../../Image/icon_logo.png')}
          style={{height: Window_height*10, width: Window_width*10, resizeMode: 'contain'}}
        />
          <Text style = {{color:'#373737', fontSize: 50, fontFamily: 'Angels Cookie'}} >PERFECT</Text>
          <Text style = {{color: '#b4dd5d', fontSize: 50, fontFamily: 'Angels Cookie'}}>MEAL</Text>
          <View style = {{width: Window_width*5.3, heigth: 20, marginTop: Window_height*6, backgroundColor: '#cecece'}}/>
          <Text style = {{marginTop: Window_height*4.3, fontSize: 15, letterSpacing: -0.16, color: '#a9a9a9'}}>당신의 완벽한 식단을 위한 퍼펙트밀</Text>
          <View style ={{marginTop: Window_height*36.4}}/>
          <Animated.View style={{transform: [{rotate: spin}] }} >
            <Image 
              source={require('../../Image/icon_loading.png')}
              style={{width: Window_width*14.5, height: Window_height*14.5, resizeMode: 'contain'}}
            />
          </Animated.View>
          <Image 
            source = {require('../../Image/copyright_codecom.png')}
            style={{marginTop: Window_height*27.4, width: Window_width*43.3, height: Window_height*4, resizeMode: 'contain'}}
            />
        </View>
      <View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});