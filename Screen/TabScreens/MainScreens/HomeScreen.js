import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import TodayFoodScreen from './TodayFoodScreen';
import SettingsScreen from '../SettingScreens/SettingsScreen';
import SendDataScreen from '../SendDataScreen';

var date = new Date;
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if(day < 10) day = '0' + day;
if(month < 10) month = '0' + month;
var today = (year + '-' + month + '-' + day);

const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {

	return(
		<>
        <Stack.Navigator>
			<Stack.Screen
				name = "TodayFoodScreen"
				component = {TodayFoodScreen}
				options = {{
					headerShown: false
				}}
			/>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
				name="sendDataScreen"
				component={SendDataScreen}
			/>
			<Stack.Screen
        		name="SettingsScreen"
        		component={SettingsScreen}
        		options={{
        		  title: "Setting",
        		  headerStyle: {
        		    backgroundColor: '#307ecc'
        		  },
        		  headerTintColor: '#fff', //Set Header text color
        		  headerTitleStyle: {
        		    fontWeight: 'bold', //Set Header text style
        		  },
        		}}
      		/>
        </Stack.Navigator>
		</>
	)
}

export default HomeScreen;