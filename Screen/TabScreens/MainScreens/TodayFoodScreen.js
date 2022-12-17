import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Dimensions } from 'react-native';

import FormerFoodMenuModal from './FormerFoodMenuModal';
import TotalFoodNutriModal from './TotalFoodNutriModal';
import UnderNutriModal from './UnderNutriModal';

import { GetFoodContext } from '../../Utils/Context';
import { NutrientEngNameList } from '../../Utils/Utils';

const TodayFoodScreen = ({navigation}) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [totalModalVisible, setTotalModalVisible] = useState(false);
	const [underNutriModalVisible, setUnderNutriModalVisible] = useState(false);
	const {state} = useContext(GetFoodContext);
	const [division, setDivision] = useState('');

	const Window_width = Dimensions.get('window').width / 120;
	const Window_height = Dimensions.get('window').height / 213.3;

	const getFoodList = (foodList) => {
		if(foodList === undefined)
			return (
				<Text>먹은 음식이 없어요</Text>
			)
		else
		return Object.entries(foodList).map(([key, value], index) => {
			if(value === "")
				return;
			else
				return (
					<Text key={key}>{value}, </Text>
				);
			});
	}


	const ArgFoodList = (foodList) => {
		let sendData = [];
		Object.keys(foodList).forEach((key, index) => {
			if(foodList[key] === "")
				return;
			sendData.push({id: String(index), food: foodList[key]});
		})
		return sendData;
	}

	const ShowFoodList = (division) => {
		switch(division){
			case 'breakfast':
				return getFoodList(state.toBreakfast);
			case 'lunch':
				return getFoodList(state.toLunch);
			case 'dinner':
				return getFoodList(state.toDinner);
			case 'etc':
				return getFoodList(state.toEtc);
		}
	}
		return(
			<View style = {{backgroundColor: 'white', alignItems: 'center'}}>
			<ScrollView scrollToOverflowEnabled
					contentContainerStyle={{
						flexGrow: 1,
					}}>
				<View style={{flex: 1, marginTop: Window_height*5.8, flexDirection: 'row', justifyContent: 'center', marginTop: Window_height*5.3}}>
					<Image
						source={require('../../../Image/icon_logo.png')}
						style={{width: Window_width*6.4, height: Window_height*6.4, resizeMode: 'contain'}}
					/>
					<Text style={{color:'#373737', fontSize: 25, fontFamily: 'Angels Cookie', letterSpacing: 1}}>PERFECT</Text>
					<Text style={{color:'#b4dd5d', fontSize: 25, fontFamily: 'Angels Cookie', letterSpacing: 1}}>MEAL</Text>
				</View>
				<View style={{flex: 5, marginTop: Window_height*6.7}}>
					<TotalFoodNutriModal
						open ={totalModalVisible} 
						onClose ={() => {
							setTotalModalVisible(!totalModalVisible)
						}}
					/>
					<UnderNutriModal
						open ={underNutriModalVisible} 
						onClose ={() => {
							setUnderNutriModalVisible(!underNutriModalVisible)
						}}
					/>
					<TouchableOpacity
						style={{backgroundColor: '#f5f5f5', alignItems: 'center', width: Window_width*106.7, height: Window_height*48.3, borderRadius: 15, borderColor: '#eaeaea', borderStyle: 'solid', borderWidth: 1}}
						//아직 아무것도 먹지 않았을 경우 0인 값을 totalNutrianScreen에서 구하지 않았음
						//onPress = {() => navigation.navigate('nutrianScreen')}
						onPress={() => setTotalModalVisible(true)}
					>
						<Text style={{marginTop: Window_height*7.7}}>오늘 섭취한 영양소</Text>
						{state.toTotalNutri[NutrientEngNameList[0]] == 0?
							<Text style={{color: '#ffb119', fontWeight: '900', fontSize: 25, fontFamily: 'Avenir Heavy', marginTop: 20}}>먹은 음식이 없어요...</Text> : 
								<View style={{flexDirection: 'row'}}>
							<Text style={{color: '#ffb119', fontWeight: '900', fontSize: 50, fontFamily: 'Avenir Heavy', marginTop: 20}}>{state.toTotalNutri[NutrientEngNameList[0]]}</Text>
							<Text style={{color: '#000000', marginTop: Window_height*9.7, fontSize: 25, fontWeight: '800', marginTop: 44}}> kcal</Text>
							</View>
							}
					</TouchableOpacity>
					<TouchableOpacity
						style={{backgroundColor: '#b4dd5d', width: Window_width*106.7, height: Window_height*16.3, borderRadius: 15, marginTop: Window_height*4}}
						//onPress = {() => navigation.navigate('underNutrianScreen')}
						onPress={() => setUnderNutriModalVisible(true)}
					>
						<View style={{marginTop: Window_height*5.3, flexDirection: 'row', justifyContent: 'space-between'}}>
							<Text style={{marginLeft: 20, alignSelf: 'center', color: '#ffffff', fontSize: 16, fontFamily: 'Angels Cookie'}}>부족한 영양소</Text>
							{state.underNutri[NutrientEngNameList[0]] == 0 ?
								<Text style={{marginRight: 20, alignSelf: 'center', color: '#ffffff', fontSize: 16, fontFamily: 'Angels Cookie'}}>먹은 음식이 없어요</Text> :
								<Text style={{marginRight: 20, alignSelf: 'center', color: '#ffffff', fontSize: 16, fontFamily: 'Angels Cookie'}}>{state.underNutri[NutrientEngNameList[0]]} kcal</Text>
							}
						</View>
					</TouchableOpacity>
				</View>
				<View style={{flex: 6, flexDirection: 'column', alignItems: 'center'}}>
					<FormerFoodMenuModal
						open ={modalVisible} 
						onClose ={() => {
							setModalVisible(!modalVisible)
							setDivision('');
						}}
						division = {division}
					/>
					<View
						style={{marginTop: Window_height*9.3, width: 100*Window_width, height: 22.7*Window_height, borderBottomColor: '#f3f3f3', borderBottomWidth: 1}}
						touchSoundDisabled='true'
						
					>
						<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
							<View style={{flexDirection: 'row'}}>
								<Image
									source={require('../../../Image/icon_meal.png')}
									style={{width: Window_width*8, height: Window_height*9, resizeMode:'contain'}}
								/>
								<Text style={{marginTop: 5, fontSize: 20, fontWeight: 'bold', textAlign: 'left'}}>아침 식사</Text> 
							</View>
							<View style={{flexDirection: 'row'}}>
								<TouchableOpacity
									style={{marginHorizontal: 3, width: Window_width*18.3, height: Window_height*9, justifyContent: 'center', backgroundColor: '#fcfcfc', borderWidth: 1, borderRadius: 26}}
									onPress={() => {
										let sendData = [];
										if(state.toBreakfast != undefined)
											sendData = ArgFoodList(state.toBreakfast);
										navigation.navigate('sendDataScreen', {food: sendData, edit: 'modify', division: 'breakfast'});
									}}
								>
									<Text style={{color: '#606060', textAlign: 'center', fontWeight: 'bold'}}>수정</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{marginHorizontal: 3, width: Window_width*18.3, height: Window_height*9, justifyContent: 'center', backgroundColor: '#fcfcfc', borderWidth: 1, borderRadius: 26}}
									onPress={() => {
										setDivision('breakfast');
										setModalVisible(true);
									}}
								>
									<Text style={{color: '#606060', textAlign: 'center', fontWeight: 'bold'}}>정보</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View>
							<Text style={{marginTop: 10, fontSize: 15, color: '#acacac'}}>{ShowFoodList('breakfast')}</Text>
						</View>
					</View>
					<View
						style={{marginTop: Window_height*9.3, width: 100*Window_width, height: 22.7*Window_height, borderBottomColor: '#f3f3f3', borderBottomWidth: 1}}
					>
						<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
							<View style={{flexDirection: 'row'}}>
								<Image
									source={require('../../../Image/icon_meal.png')}
									style={{width: Window_width*8, height: Window_height*9, resizeMode:'contain'}}
								/>
								<Text style={{marginTop: 5, fontSize: 20, fontWeight: 'bold', textAlign: 'left'}}>점심 식사</Text> 
							</View>
							<View style={{flexDirection: 'row'}}>
								<TouchableOpacity
									style={{marginHorizontal: 3, width: Window_width*18.3, height: Window_height*9, justifyContent: 'center', backgroundColor: '#fcfcfc', borderWidth: 1, borderRadius: 26}}
									onPress={() => {
										let sendData = [];
										if(state.toLunch != undefined)
											sendData = ArgFoodList(state.toLunch);
										navigation.navigate('sendDataScreen', {food: sendData, edit: 'modify', division: 'lunch'});
									}}
								>
									<Text style={{color: '#606060', textAlign: 'center', fontWeight: 'bold'}}>수정</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{marginHorizontal: 3, width: Window_width*18.3, height: Window_height*9, justifyContent: 'center', backgroundColor: '#fcfcfc', borderWidth: 1, borderRadius: 26}}
									onPress={() => {
										setDivision('lunch');
										setModalVisible(true);
									}}
								>
									<Text style={{color: '#606060', textAlign: 'center', fontWeight: 'bold'}}>정보</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View>
							<Text style={{marginTop: 10, fontSize: 15, color: '#acacac'}}>{ShowFoodList('lunch')}</Text>
						</View>
					</View>
					<View
						style={{marginTop: Window_height*9.3, width: 100*Window_width, height: 22.7*Window_height, borderBottomColor: '#f3f3f3', borderBottomWidth: 1}}
					>
						<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
							<View style={{flexDirection: 'row'}}>
								<Image
									source={require('../../../Image/icon_meal.png')}
									style={{width: Window_width*8, height: Window_height*9, resizeMode:'contain'}}
								/>
								<Text style={{marginTop: 5, fontSize: 20, fontWeight: 'bold', textAlign: 'left'}}>저녁 식사</Text> 
							</View>
							<View style={{flexDirection: 'row'}}>
								<TouchableOpacity
									style={{marginHorizontal: 3, width: Window_width*18.3, height: Window_height*9, justifyContent: 'center', backgroundColor: '#fcfcfc', borderWidth: 1, borderRadius: 26}}
									onPress = {() => {
										let sendData = [];
										if(state.toDinner != undefined)
											sendData = ArgFoodList(state.toDinner);
										navigation.navigate('sendDataScreen', {food: sendData, edit: 'modify', division: 'dinner'});
									}}
								>
									<Text style={{color: '#606060', textAlign: 'center', fontWeight: 'bold'}}>수정</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{marginHorizontal: 3, width: Window_width*18.3, height: Window_height*9, justifyContent: 'center', backgroundColor: '#fcfcfc', borderWidth: 1, borderRadius: 26}}
									onPress={() => {
										setDivision('dinner');
										setModalVisible(true);
									}}
								>
									<Text style={{color: '#606060', textAlign: 'center', fontWeight: 'bold'}}>정보</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View>
							<Text style={{marginTop: 10, fontSize: 15, color: '#acacac'}}>{ShowFoodList('dinner')}</Text>
						</View>
					</View>
				</View>
				</ScrollView>
			</View>	
		)
}

/*
<Text style={{marginTop: 20, alignSelf: 'center', fontSize: 30}}>오늘 섭취한 영양소</Text>
						{state.toTotalNutri.length > 0 ?
						<View>
							<View>
								<TouchableOpacity
									style={styles.nutrianButton}
									onPress = {() => navigation.navigate('nutrianScreen')}
								>
									<Text>오늘 섭취한 칼로리 </Text>
									<Text>{state.toTotalNutri[0]}kcal</Text>
								</TouchableOpacity>
							</View>
							<View>
								<TouchableOpacity
									style={styles.nutrianButton}
									onPress = {() => navigation.navigate('underNutrianScreen')}
									>
									<Text>부족한 칼로리</Text>
									<Text>{state.underNutri[0]}kcal</Text>
								</TouchableOpacity>
							</View>
						</View>
						:
						<View>
							<Text style = {styles.text}>오늘 먹은 음식이 없어요.....</Text>
						</View>
						}
					<View>
						<FormerFoodMenuModal
							open ={modalVisible} 
							onClose ={() => {
								setModalVisible(!modalVisible)
								setDivision('');
							}}
							division = {division}
						/>
						<View style={{flexDirection: 'column', justifyContent: 'space-between', marginTop: 5}}>
							<View>
								<TouchableOpacity style={styles.foodlistbutton}
									touchSoundDisabled='true'
									onPress={() => {
										setDivision('breakfast');
										setModalVisible(true);
									}}>
									<Text>아침</Text>
									{ShowFoodList('breakfast')}
								</TouchableOpacity>
							</View>
							<View>
								<TouchableOpacity style={styles.foodlistbutton}
									touchSoundDisabled='true'
									onPress={() => {
										setDivision('lunch');
										setModalVisible(true);
									}}>
									<Text>점심</Text>
									{ShowFoodList('lunch')}
								</TouchableOpacity>
							</View>
							<View>
								<TouchableOpacity style={styles.foodlistbutton}
									touchSoundDisabled='true'
									onPress={() => {
										setDivision('dinner');
										setModalVisible(true);
									}}>
									<Text>저녁</Text>
									{ShowFoodList('dinner')}
								</TouchableOpacity>
							</View>
							<View>
								<TouchableOpacity style={styles.foodlistbutton}
									touchSoundDisabled='true'
									onPress={() => {
										setDivision('etc');
										setModalVisible(true)
									}}>
									<Text>간식</Text>
									{ShowFoodList('etc')}
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>*/ 
export default TodayFoodScreen;

const styles = StyleSheet.create({
	//container: {
	//	paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
	//},
	nutriView : {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginHorizontal: 20
	},
	text: {
		fontSize: 15,
		alignSelf: 'center'
	},
	fooddivisiontext: {
		fontSize: 20,
		alignSelf: 'center',
	},
	foodlisttext: {
		fontSize: 15,
		alignSelf: 'center',
	},
	foodlistbutton: {
		flex: 1, 
		alignSelf: 'center', 
		width: '95%',
		height: 100, 
		borderColor: 'gray',
		borderRadius: 10, 
		borderWidth: 1,
		backfaceVisibility: 'visible', 
		backgroundColor: 'white',
		marginVertical: 5,
	},
	nutrianButton: {
		flex: 1, 
		alignSelf: 'center', 
		width: '95%',
		height: 50, 
		borderColor: 'gray',
		borderRadius: 10, 
		borderWidth: 1,
		backfaceVisibility: 'visible', 
		backgroundColor: 'white',
		marginVertical: 5,
	}
})

