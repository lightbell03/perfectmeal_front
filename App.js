import 'react-native-gesture-handler';
import React, {useEffect, useReducer, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Auth from './Screen/AuthScreens/AuthStack';
import DrawerNavigationRoutes from './Screen/TabScreens/TabNavigatioinRoutes';

import { AuthContext } from './Screen/Utils/Context';
import { PostFetch } from './Screen/Utils/CustomFetch'; 

const Stack = createStackNavigator(); 

const App = ({navigation}) => {

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch(action.type){
        case 'RESTORE_TOKEN':
          return{
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );
  
  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      const accessToken = await AsyncStorage.getItem("accessToken");
      const refreshToken = await AsyncStorage.getItem("refreshToken");

      if(accessToken === null || refreshToken === null) {
        dispatch({type: 'RESTORE_TOKEN', token: userToken});
        return;
      }

      PostFetch({
        uri: '/api/login',
        body: {
          accessToken: accessToken,
          refreshToken: refreshToken
        }
      })
      .then(async () => {
        const accessToken = await AsyncStorage.getItem("accessToken");
        dispatch({type: 'RESTORE_TOKEN', token: accessToken});
      })
      .catch((error) => {
        console.log(error);
        dispatch({type: 'RESOTRE_TOKEN', token: userToken});
      })
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(() => ({
    signIn: async (data) => {
      dispatch({type: "SIGN_IN", token: data});
    },
    signOut: () => dispatch({type: 'SIGN_OUT'}),
    signUp: async (data) => {
      dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
    },
  }), []);

  return (
    <AuthContext.Provider value = {authContext}>
      <NavigationContainer>
        <Stack.Navigator>
        {state?.userToken == null ? (
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{headerShown: false}}
          />
          ) : (
            <Stack.Screen
              name="DrawerNavigationRoutes"
              component={DrawerNavigationRoutes}
              options={{headerShown: false}}
            />
          )
        }
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
};

export default App;