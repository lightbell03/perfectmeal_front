import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { RadioButton } from 'react-native-paper';

import { AllFoodList } from '../Utils/Utils';
import Loader from '../Components/Loader';

const ChooseFoodScreen = ({route, navigation}) => {

    const {edit} = route.params;
    const {food} = route.params;
    const {division} = route.params;
    const {editDivision} = route.params;
    const {index} = route.params;
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState('');

    const CheckButton = () => {
        if(division === 'modify'){
            food[index].food = checked;
            navigation.goBack({food: food, edit: edit, division: editDivision});
        }
        else if(division === 'add'){
            let idx = String(index);
            food.push({food: checked, id: idx});
            navigation.goBack({food: food, edit: edit, division: editDivision})
        }
    }

    const FoodListText = () => {
        return AllFoodList.map((food, index) => {
            return (
                <View key={index} style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50, borderBottomColor: 'gray', borderBottomWidth: 1}}>
                    <Text style={{marginLeft: 5, fontSize: 15, fontWeight: 'normal'}}>{food}</Text>
                    <RadioButton 
                        value = {food}
                        status = { checked === food ? 'checked' : 'unchecked'}
                        onPress = {() => setChecked(food)}
                        color = 'blue'
                    />
                </View>
            )
        })
    }

    return(
        <View style={{flex: 1, alignItems: 'center', backgroundColor: "#ffffff"}}>
            <Loader loading = {loading} />
            <View style={{flex: 1, width: "90%", marginTop: 30, height: 70, flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                    style={{alignSelf : 'center'}}
                    onPress = { () => navigation.goBack({food: food, edit: edit, division: editDivision})}
                >
                    <Text style = {{fontSize: 17, color: '#000000'}}>뒤로</Text>
                </TouchableOpacity>
                <Text style = {{fontSize: 25, fontWeight: 'bold', color: '#373737'}}>음식 선택</Text>
                <TouchableOpacity
                    style = {{alignSelf: 'center'}}
                    onPress = {() => CheckButton(division)}
                >
                    <Text style = {{fontSize: 17, fontWeight: 'bold', color: '#000000'}}>확인</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 10, width: "90%", alignItems: 'center'}}>
                <ScrollView style={{width: "100%"}}>
                    {FoodListText()}
                </ScrollView>
            </View>
        </View>
    )  
}

export default ChooseFoodScreen;

const styles = StyleSheet.create({
    //container: {
	//	paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
	//},
})