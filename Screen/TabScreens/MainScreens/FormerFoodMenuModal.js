import React, {useContext} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { Dimensions } from 'react-native';

import { GetFoodContext } from '../../Utils/Context';
import { NutriNameList } from '../../Utils/Utils';

const FormerFoodMenuModal = ({open, onClose, division}) => {

  const Window_width = Dimensions.get('window').width / 120;
  const Window_height = Dimensions.get('window').height / 213.3;;

  const {state} = useContext(GetFoodContext);

  const FoodNutri = (toNutri) => {
    if(toNutri === undefined)
      return(
        <Text>먹은 음식이 없어요.....</Text>
      );
    else
      return Object.entries(toNutri).map(([key, value], index) => {
        if(NutriNameList[index] === '에너지')
          return(
            <View key={index}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}
              >
                <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 20}}>{NutriNameList[index-2]}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#ffb119', fontWeight: 'bold', fontSize: 35}}>{value}</Text>
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
              <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 20}}>{NutriNameList[index-2]}</Text>
              <Text style={{color: '#b7b7b7', fontWeight: 'bold', fontSize:20, marginRight: 5}}>{value}</Text>
            </View>
          );
      });
  }

  const ShowFoodInfo = (division) => {
    switch(division){
      case 'breakfast':{
        return FoodNutri(state.toBreakfastNutri);
      }
      case 'lunch':{
        return FoodNutri(state.toLunchNutri);
      }
      case 'dinner':{
        return FoodNutri(state.toDinnerNutri);
      }
      case 'etc':{
        return FoodNutri(state.toEtcNutri);
      }
    }
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
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#000000'}}>{division}</Text>
        </View>
        <View style = {{width: Window_width*100 , marginTop: 40}}>
          <ScrollView>
             {ShowFoodInfo(division)}
          </ScrollView>
        </View>
      </View> 
    </Modal>
   )
}
export default FormerFoodMenuModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    justifyContent: 'space-around',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonClose: {
    marginHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 14,
    paddingHorizontal: 40,
    elevation: 5,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalView: {
    height: 500,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    justifyContent: 'space-around',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});