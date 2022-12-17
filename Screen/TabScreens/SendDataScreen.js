import React, { useState, useContext } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { RadioButton } from 'react-native-paper'
import { Dimensions } from 'react-native';

import Loader from '../Components/Loader';
import { GetFoodContext } from '../Utils/Context';
import { PostFetch, PutFetch } from '../Utils/CustomFetch';

var date = new Date;
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (day < 10) day = '0' + day;
if (month < 10) month = '0' + month;

var today = (year + '-' + month + '-' + day);

const App = ({ route, navigation }) => {

  const Window_width = Dimensions.get('window').width / 120;
  const Window_height = Dimensions.get('window').height / 213.3;

  const { division } = route.params;
  const { edit } = route.params;
  const { dispatch } = useContext(GetFoodContext);
  const [loading, setLoading] = useState(false);
  const [foodData, setFoodData] = useState(route.params.food);
  const [checked, setChecked] = useState('');

  const deleteItem = (index) => {
    setFoodData(prevState => {
      var temp = [...prevState];
      for (let i = index; i < temp.length; i++) {
        temp[i].id = String(Number(temp[i].id) - 1);
      }
      temp.splice(index, 1);
      return temp;
    });
  }

  const dispatchFoodInfo = (division, foodList, nutriList, totalList, underNutri) => {

    dispatch({ type: "CHANGE_TOTAL_NUTRI", totalNutri: totalList });
    dispatch({ type: "CHANGE_UNDER_NUTRI", underNutri: underNutri });

    switch (division) {
      case 'breakfast': {
        dispatch({ type: "CHANGE_BREAKFAST", breakfast: foodList })
        dispatch({ type: "CHANGE_BREAKFAST_NUTRI", breakfastNutri: nutriList });
        break;
      }
      case 'lunch': {
        dispatch({ type: "CHANGE_LUNCH", lunch: foodList })
        dispatch({ type: "CHANGE_LUNCH_NUTRI", lunchNutri: nutriList });
        break;
      }
      case 'dinner': {
        dispatch({ type: "CHANGE_DINNER", dinner: foodList })
        dispatch({ type: "CHANGE_DINNER_NUTRI", dinnerNutri: nutriList });
        break;
      }
      case 'etc': {
        dispatch({ type: "CHANGE_ETC", etc: foodList })
        dispatch({ type: "CHANGE_ETC_NUTRI", etcNutri: nutriList });
        break;
      }
    }
  }

  const sendEditData = (sendFood) => {
    setChecked(division);

    return PutFetch({
      uri: `/api/foods?type=${division}&date=${today}`,
      body: {
        foodSet: sendFood
      }
    });
  }

  const sendNewData = (sendFood) => {

    return PostFetch({
      uri: `/api/foods?type=${checked}&date=${today}`,
      body: {
        foodSet: sendFood
      }
    })
  }

  //send foddData to Server
  const sendHandleSubmitPress = async () => {
    setLoading(true);
    const sendFood = [];
    for (let i = 0; i < foodData.length; i++) {
      sendFood.push(foodData[i]["food"]);
    }
    let f;
    if(edit == "new"){
      if(!checked){
        alert("check the checkbox");
        setLoading(false);
        return;
      }
      f = sendNewData(sendFood);
    }
    else if(edit == "modify"){
      f = sendEditData(sendFood);
    }

    f
    .then((response) => response.json())
    .then((response) => {
      console.log(response.foodSet);
      dispatchFoodInfo(checked, response.foodSet, response.nutrient, response.totalNutrient, response.underNutrient);
      setLoading(false);
      navigation.navigate('TodayFoodScreen');
    })
    .catch((error) => {
      console.log(error);
      alert("전송 에러");
      setLoading(false);
    })
  }

  const renderItem = ({ item, index }) => {
    if (index == foodData.length - 1)
      return (
        <View>
          <View style={{ marginBottom: 5, flexDirection: 'row', width: Window_width * 104, height: Window_height * 16.7, borderRadius: 8, borderWidth: 1, borderColor: '#e9e9e9', alignContent: 'center', justifyContent: 'space-between' }}>
            <Text style={{ marginLeft: 10, alignSelf: 'center', fontWeight: 'bold', fontSize: 15, color: '#000000' }}>{item.food}</Text>
            <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
              <TouchableOpacity
                style={{ width: 40, height: 20, flexDirection: 'row', marginHorizontal: 10 }}
                onPress={() => {
                  navigation.navigate('ChooseFoodScreen', { food: foodData, division: 'modify', index: index, edit: edit, editDivision: division });
                }}
              >
                <Image
                  source={require('../../Image/icon_edit.png')}
                  style={{ width: Window_width * 5.7, height: Window_height * 5.7, resizeMode: 'contain' }}
                />
                <Text style={{ color: '#787878' }}>변경</Text>
              </TouchableOpacity>
              <View style={{ borderLeftWidth: 1, borderLeftColor: '#d9d9d9' }} />
              <TouchableOpacity
                style={{ width: 40, height: 20, flexDirection: 'row', marginHorizontal: 10 }}
                onPress={() => deleteItem(index)}
              >
                <Image
                  source={require('../../Image/icon_del.png')}
                  style={{ width: Window_width * 5.7, height: Window_height * 5.7, resizeMode: 'contain' }}
                />
                <Text>삭제</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={{ justifyContent: 'center', width: Window_width * 104, height: Window_height * 16.7, borderRadius: 8, borderWidth: 1, borderColor: '#e9e9e9', borderStyle: 'dashed' }}
            onPress={() => {
              navigation.navigate('ChooseFoodScreen', { food: foodData, division: 'add', index: foodData.length, edit: edit, editDivision: division })
            }
            }
          >
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <Image
                source={require('../../Image/icon_add.png')}
                style={{ width: Window_width * 7.3, height: Window_height * 7.3 }}
              />
              <Text style={{ marginLeft: 3, marginTop: 2, fontSize: 17 }}>추가</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    else
      return (
        <View style={{ marginBottom: 5, flexDirection: 'row', width: Window_width * 104, height: Window_height * 16.7, borderRadius: 8, borderWidth: 1, borderColor: '#e9e9e9', alignContent: 'center', justifyContent: 'space-between' }}>
          <Text style={{ marginLeft: 10, alignSelf: 'center', fontWeight: 'bold', fontSize: 15, color: '#000000' }}>{item.food}</Text>
          <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
            <TouchableOpacity
              style={{ width: 40, height: 20, flexDirection: 'row', marginHorizontal: 10 }}
              onPress={() => {
                navigation.navigate('ChooseFoodScreen', { food: foodData, division: 'modify', index: index });
              }}
            >
              <Image
                source={require('../../Image/icon_edit.png')}
                style={{ width: Window_width * 5.7, height: Window_height * 5.7, resizeMode: 'contain' }}
              />
              <Text style={{ color: '#787878' }}>변경</Text>
            </TouchableOpacity>
            <View style={{ borderLeftWidth: 1, borderLeftColor: '#d9d9d9' }} />
            <TouchableOpacity
              style={{ width: 40, height: 20, flexDirection: 'row', marginHorizontal: 10 }}
              onPress={() => deleteItem(index)}
            >
              <Image
                source={require('../../Image/icon_del.png')}
                style={{ width: Window_width * 5.7, height: Window_height * 5.7, resizeMode: 'contain' }}
              />
              <Text>삭제</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
  }

  return (
    <View style={{ flex: 10, backgroundColor: 'white' }}>
      <Loader loading={loading} />
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
        <TouchableOpacity
          style={{ marginTop: 30 }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: '500', color: '#000000', letterSpacing: 0.36 }}>뒤로</Text>
        </TouchableOpacity>
        <View style={{ marginLeft: 90, marginTop: 20 }}>
          <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: '500', color: '#000000', letterSpacing: 0.36 }}>음식 목록</Text>
        </View>
      </View>
      {edit === 'new' ?
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.checkboxContainer} >
            <RadioButton
              value="breakfast"
              status={checked === 'breakfast' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('breakfast')}
              color='blue'
            />
            <Text style={styles.checkboxLabel}>breakfast</Text>
          </View>
          <View style={styles.checkboxContainer} >
            <RadioButton
              value="lunch"
              status={checked === 'lunch' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('lunch')}
            />
            <Text style={styles.checkboxLabel}>lunch</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <RadioButton
              value="dinner"
              status={checked === 'dinner' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('dinner')}
            />
            <Text style={styles.checkboxLabel}>dinner</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <RadioButton
              value="etc"
              status={checked === 'etc' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('etc')}
            />
            <Text style={styles.checkboxLabel}>Etc</Text>
          </View>
        </View> :
        <></>
      }
      <View style={{ flex: 8, alignItems: 'center' }}>
        {foodData.length != 0 ?
          <FlatList
            removeClippedSubviews={false}
            data={foodData}
            renderItem={renderItem}
            keyExtractor={(item) => item.food}
          /> :
          <TouchableOpacity
            style={{ justifyContent: 'center', width: Window_width * 104, height: Window_height * 16.7, borderRadius: 8, borderWidth: 1, borderColor: '#e9e9e9', borderStyle: 'dashed' }}
            onPress={() => navigation.navigate('ChooseFoodScreen', { food: foodData, division: 'add', edit: edit, index: foodData.length, editDivision: division })}
          >
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <Image
                source={require('../../Image/icon_add.png')}
                style={{ width: Window_width * 7.3, height: Window_height * 7.3 }}
              />
              <Text style={{ marginLeft: 3, marginTop: 2, fontSize: 17 }}>추가</Text>
            </View>
          </TouchableOpacity>
        }
      </View>
      <TouchableOpacity
        style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: '#FDBD5D' }}
        onPress={() => sendHandleSubmitPress()}
      >
        <Text style={{ alignSelf: 'center', color: '#ffffff', fontWeight: '800', fontSize: 18 }}>확인</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#FFFFFF',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  check: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 14,
  },
  done: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 14,
    backgroundColor: '#6830CF',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'auto',
  },
  checkboxLabel: {
    margin: 8
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'stretch',
    alignContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
    paddingRight: 50,
    paddingLeft: 50,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  modifyButton: {
    width: 60,
    height: 60,
    backgroundColor: '#7DE24E',
    borderColor: '#7DE24E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 14,
    borderBottomRightRadius: 14,
  },
  text: {
    color: '#FFFFFF'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 22,
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
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  pickerView: {
    flex: 2,
    width: 200,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 30
  },
  bimage: {
    width: '100%',
    height: '100%',
  },
});

{/*<Modal
        animationType = "slide"
        transparent={true}
        visible={addModalVisible}
        onRequestClose={() => {
          alert("Modal has been closed");
          setAddModalVisible(!addModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.pickerView}>
              <Picker
                selectedValue={selectedFood}
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedFood(itemValue);
                }}
                >
                {renderFoodList()}
              </Picker>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.buttonClose}
                onPress={() => setAddModalVisible(!addModalVisible)}
              >
                <Text style={styles.textStyle}>
                  취소
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonClose}
                onPress={() => {
                  addItem();
                  setAddModalVisible(!addModalVisible)
                }}
              >
                <Text style={styles.textStyle}>
                  추가
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
              </Modal>*/}