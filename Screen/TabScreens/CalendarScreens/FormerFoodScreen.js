import React, { useState, useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import Loader from '../../Components/Loader';
import { GetFoodContext } from '../../Utils/Context';
import { GetFetch } from '../../Utils/CustomFetch';

LocaleConfig.locales['fr'] = {
    monthNames: ['01 월 ', '02 월 ', '03 월 ', '04 월 ', '05 월 ', '06 월 ', '07 월 ', '08 월 ', '09 월 ', '10 월 ', '11 월 ', '12 월 '],
    monthNamesShort: ['01', '02', '03', '04', '05', '06', '07.', '08', '09', '10', '11', '12'],
    dayNames: ['SunDay', 'Moday', 'Tuesday', 'Wedenday', 'Thursday', 'Friday', 'SaturDay'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    today: 'Aujourd\'hui'
};

LocaleConfig.defaultLocale = 'fr';

const date = new Date();
const day = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
const month = ((date.getMonth() < 9) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
const year = date.getFullYear();
const s = date.getDay();
const today = year + '-' + month + '-' + day;

const FormerFoodScreen = ({ navigation }) => {

    const { state } = useContext(GetFoodContext);
    const [loading, setLoading] = useState(false);
    const [selectedDay, setSelectedDay] = useState({});
    const [selectedDate, setSelectedDate] = useState({ year: year, month: month, day: day });
    const [breakfast, setBreakfast] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            let markedDates = { [today]: { selected: true, selectedColor: '#d7d7d7' } };
            setBreakfast(state.toBreakfast);
            setLunch(state.toLunch);
            setDinner(state.toDinner);
            setSelectedDay(markedDates);
        });

        return unsubscribe;
    }, [])

    const select = (day) => {
        setSelectedDate(day);
        setLoading(true);

        GetFetch({
            uri: `/api/foods?date=${day.dateString}`
        })
        .then((response) => {
            setBreakfast(response.breakfast);
            setLunch(response.lunch);
            setDinner(response.dinner);
            setLoading(false);
            let seldate = { [day.dateString]: { selected: true, marked: true } };
            setSelectedDay(seldate);
        })
        .catch((error) => {
            setLoading(false);
            alert("정보를 가져오는데 실패 했습니다.");
        })
    }

    const FoodListComponent = (division) => {

        let food = [];
        switch (division) {
            case 'breakfast':
                food = breakfast;
                break;
            case 'lunch':
                food = lunch;
                break;
            case 'dinner':
                food = dinner;
                break;
        }
        if (food.length > 0) {
            return food.map((data, index) => {
                return (
                    <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#acacac' }} key={index}>{data} </Text>
                )
            })
        }
        else {
            return (
                <View>
                    <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#acacac' }}>먹은 음식이 없어요....</Text>
                </View>
            )
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff', alignItems: 'center' }}>
            <Loader loading={loading} />
            <View style={{ flex: 3, marginTop: 20, width: "95%" }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>오늘</Text>
                </View>
                <View style={{ flex: 8 }}>
                    <Calendar
                        theme={{
                            todayBackgroundColor: '#c7c7c7',
                            todayTextColor: '#ffffff',
                        }}
                        markingType={'custom'}
                        markedDates={(Object.keys(selectedDay)[0] != today ? {
                            [Object.keys(selectedDay)[0]]: {
                                customStyles: {
                                    container: {
                                        borderColor: '#b4dd5d',
                                        borderRadius: 15,
                                        borderWidth: 2,
                                    }
                                }
                            },
                            text: {
                                color: 'black',
                                fontWeight: 'bold'
                            }
                        } : {})}
                        style={{ borderTopColor: '#f3f3f3', borderTopWidth: 1 }}
                        current={today}
                        onDayPress={(day) => select(day)}
                    />
                </View>
                <View style={{ flex: 1, width: "90%", alignSelf: 'center', alignItems: 'center', justifyContent: 'center', bordercolor: '#c1c1c1', borderWidth: 1, borderRadius: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{selectedDate.month}월 {selectedDate.day}일</Text>
                </View>
            </View>

            <View style={{ flex: 1, height: "50%", width: "90%", alignContent: 'center', marginTop: 20 }}>
                <View style={{ flex: 1, alignSelf: 'center', width: "95%", flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginVertical: 5, marginRight: 20, fontSize: 20, color: '#000000', fontWeight: 'bold' }}>아침</Text>
                    {FoodListComponent('breakfast')}
                </View>
                <View style={{ flex: 1, alignSelf: 'center', width: "95%", flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginVertical: 5, marginRight: 20, fontSize: 20, color: '#000000', fontWeight: 'bold' }}>점심</Text>
                    {FoodListComponent('lunch')}
                </View>
                <View style={{ flex: 1, alignSelf: 'center', width: "95%", flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginVertical: 5, marginRight: 20, fontSize: 20, color: '#000000', fontWeight: 'bold' }}>저녁</Text>
                    {FoodListComponent('dinner')}
                </View>
            </View>
        </View>
    )
}
export default FormerFoodScreen;