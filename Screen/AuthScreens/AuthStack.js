import 'react-native-gesture-handler';

import React from 'react';

import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import SerialNumberScreen from './SerialNumberScreen';
import SplashScreen from './SplashScreen';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Auth = ({navigation}) => {
    // Stack Navigator for Login and Sign up Screen
    return (
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            // Hiding header for Splash Screen
            options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: '회원가입', //Set Header Title
            headerStyle: {
              backgroundColor: '#ffffff', //Set Header color
            },
            headerTintColor: '#000000', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
            name = "SerialNumberScreen"
            component = {SerialNumberScreen}
            options={{headerShown: true}}
        />
      </Stack.Navigator>
    );
  };

  export default Auth;