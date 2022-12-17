import React, { useReducer, useState, useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from "react-native-image-picker"

import ChooseFoodScreen from './ChooseFoodScreen';
import SettingsScreen from './SettingScreens/SettingsScreen';
import HomeScreen from './MainScreens/HomeScreen';
import FormerFoodScreen from './CalendarScreens/FormerFoodScreen';
import SendDataScreen from './SendDataScreen';

import Loader from '../Components/Loader';
import { GetFoodContext } from '../Utils/Context';
import { GetFetch, PostFetch } from '../Utils/CustomFetch';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function foodReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_BREAKFAST':
      return {
        ...state,
        toBreakfast: action.breakfast,
      }
    case 'CHANGE_LUNCH':
      return {
        ...state,
        toLunch: action.lunch,
      }
    case 'CHANGE_DINNER':
      return {
        ...state,
        toDinner: action.dinner,
      }
    case 'CHANGE_ETC':
      return {
        ...state,
        toEtc: action.etc,
      }
    case 'CHANGE_BREAKFAST_NUTRI':
      return {
        ...state,
        toBreakfastNutri: action.breakfastNutri,
      }
    case 'CHANGE_LUNCH_NUTRI':
      return {
        ...state,
        toLunchNutri: action.lunchNutri,
      }
    case 'CHANGE_DINNER_NUTRI':
      return {
        ...state,
        toDinnerNutri: action.dinnerNutri,
      }
    case 'CHANGE_ETC_NUTRI':
      return {
        ...state,
        toEtcNutri: action.etcNutri,
      }
    case 'CHANGE_TOTAL_NUTRI':
      return {
        ...state,
        toTotalNutri: action.totalNutri,
      }
    case 'CHANGE_UNDER_NUTRI':
      return {
        ...state,
        underNutri: action.underNutri,
      }
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

var date = new Date;
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (day < 10) day = '0' + day;
if (month < 10) month = '0' + month;
var today = (year + '-' + month + '-' + day);

export default DrawerNavigationRoutes = ({ navigation }) => {

  const [loading, setLoading] = useState(false);

  const [state, dispatch] = useReducer(foodReducer, {
    toBreakfast: {},
    toLunch: {},
    toDinner: {},
    toEtc: {},
    toTotalNutri: [],
    underNutri: [],
    toBreakfastNutri: {},
    toLunchNutri: {},
    toDinnerNutri: {},
    toEtcNutri: {},
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setLoading(true);

      GetFetch({
        uri: `/api/foods?date=${today}`,
      })
        .then((response) => {
          setLoading(false);
          dispatch({ type: "CHANGE_BREAKFAST", breakfast: response.breakfast === null ? [] : response.breakfast });
          dispatch({ type: "CHANGE_LUNCH", lunch: response.lunch === null ? [] : response.lunch });
          dispatch({ type: "CHANGE_DINNER", dinner: response.dinner === null ? [] : response.dinner });
          // dispatch({type: "CHANGE_ETC", etc: responseJson.etc});
          dispatch({ type: "CHANGE_BREAKFAST_NUTRI", breakfastNutri: response.breakfastNutrient === null ? "" : response.breakfastNutrient });
          dispatch({ type: "CHANGE_LUNCH_NUTRI", lunchNutri: response.lunchNutrient === null ? "" : response.lunchNutrient });
          dispatch({ type: "CHANGE_DINNER_NUTRI", dinnerNutri: response.dinnerNutrient === null ? "" : response.dinnerNutrient });
          // dispatch({type: "CHANGE_ETC_NUTRI", etcNutri: responseJson.etcNutri});
          dispatch({ type: "CHANGE_TOTAL_NUTRI", totalNutri: response.totalNutrient });
          dispatch({ type: "CHANGE_UNDER_NUTRI", underNutri: response.underNutrient });
        })
        .catch((error) => {
          setLoading(false);
          alert("get food error");
          navigation.navigate('Auth');
        })
      });
    unsubscribe;

  }, [navigation]);

  return (
    <GetFoodContext.Provider value={{ state, dispatch }}>
      <Loader loading={loading} />
      <Stack.Navigator initialRouteName='tab'>
        <Stack.Screen
          name='tab'
          component={mainTab}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='SendDataScreen'
          component={SendDataScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='ChooseFoodScreen'
          component={ChooseFoodScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </GetFoodContext.Provider>
  )
};

const mainTab = ({ navigation }) => {

  const [tabLoading, setTabLoading] = useState(false);

  const options = {
    mediaType: 'photo',
    includeBase64: true,
    maxWidth: 640,
    maxHeight: 640,
    quality: 1,
  }

  const showCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      ImagePicker.launchCamera(options, async (response) => {
        if (response.didCancel == true) {
          navigation.navigate("tab");
        }
        else {
          setTabLoading(true);///receive_image

          PostFetch({
            uri: '/api/photo',
            body: {
              imgsource: response.assets[0].base64
            }
          })
          .then((response) => response.json())
            .then((response) => {
              console.log(response);
              let analyzedFoodList = [];
              for (let i = 0; i < response.length; i++) {
                analyzedFoodList.push({ id: i, food: response[i] });
              }
              setTabLoading(false);

              navigation.navigate('SendDataScreen', { food: analyzedFoodList, edit: 'new' });
            })
            .catch((error) => {
              console.log(error);
              setTabLoading(false);
              navigation.navigate("tab");
              alert("전송에러");
            })
        }
      });
    }
    else if (granted === PermissionsAndroid.RESULTS.DENIED) {
      return;
    }
    else {
      alert("error");
    }
  }

  const none = () => null;

  return (
    <>
      <Loader loading={tabLoading} />
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="HomeScreen"
        activeColor="#b4dd5d"
        inactiveColor="#c7c7c7"
        barStyle={{ backgroundColor: 'white' }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="TakePicture"
          component={none}
          options={({ route }) => ({
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="camera" color={color} size={26} />
            ),
          })}

          listeners={({ navigation }) => ({
            tabPress: async (e) => {
              e.preventDefault();
              showCamera();
            }
          })}
        />
        <Tab.Screen
          name="FormerFood"
          component={FormerFoodScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calendar" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name='SettingsScreen'
          component={SettingsScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'setting',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  )
}