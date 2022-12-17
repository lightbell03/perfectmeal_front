import React, {useContext} from 'react';
import { View, Text, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { Dimensions } from 'react-native';

import { GetFoodContext } from '../../Utils/Context';
import { NutrientEngNameList, NutriNameList } from '../../Utils/Utils';

const TotalFoodNutriModal = ({open, onClose}) => {

  const Window_width = Dimensions.get('window').width / 120;
  const Window_height = Dimensions.get('window').height / 213.3;;

  const {state} = useContext(GetFoodContext);

  const ShowTotalFoodList = () => {
    if(state.toTotalNutri.energy_Qy == 0)
        return (
            <Text>먹은 음식이 없어요</Text>
        ) 
    else
      return Object.entries(state.toTotalNutri).map((key, index) => {
        if(index == 0)
          return(
            <View key={index}>
              <View
                key={key}
                style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}
              >
                <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 20}}>{NutriNameList[index]}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#ffb119', fontWeight: 'bold', fontSize: 35}}>{state.toTotalNutri[NutrientEngNameList[index]]}</Text>
                  <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 20, marginTop: 15, marginRight: 5}}>kcal</Text>
                </View>
              </View>
              <View style={{borderBottomColor: '#f3f3f3', borderBottomWidth: 1, marginBottom: 20}} />
            </View>
          )
        else
          return (
            <View 
              key={key} 
              style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}
            >
              <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 20}}>{NutriNameList[index]}</Text>
              <Text style={{color: '#b7b7b7', fontWeight: 'bold', fontSize:20, marginRight: 5}}>{state.toTotalNutri[NutrientEngNameList[index]]}</Text>
            </View>
          );
      });
  }

  return (
    <Modal
        isVisible={open}
        propagateSwipe={true}
        backdropOpacity={0.2}
        onBackdropPress = {() => onClose()}
        style={{margin: 0, justifyContent: 'flex-end'}}
    >
      <View style = {{height: Window_height*98, backgroundColor: 'white', padding: 22, alignItems: 'center', borderTopRightRadius: 10, borderTopLeftRadius: 10}}>
        <View>
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#000000'}}>오늘 섭취한 영양소</Text>
        </View>
        <View style = {{width: Window_width*100 , marginTop: 40}}>
          <ScrollView>
             {ShowTotalFoodList()}
          </ScrollView>
        </View>
      </View> 
    </Modal>
   )
}
export default TotalFoodNutriModal;