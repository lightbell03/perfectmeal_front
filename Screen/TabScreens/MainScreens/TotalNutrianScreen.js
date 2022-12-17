import React, {useContext} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import { ProgressBar } from 'react-native-paper';

import { GetFoodContext } from '../../Utils/Context';

const TotalNutrianScreen = ({navigation}) => {

    const {state} = useContext(GetFoodContext)

    if(state.toTotalNutri.length == 0){
        return (<Text>텅...</Text>)
    }

    return (
        <ScrollView style = {{backgroundColor: '#ffffff'}}>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar color='green' progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[1]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[2]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[3]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[4]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[5]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[6]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[7]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[8]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[9]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[10]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[11]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>

            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View><View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>

            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
            <View style={styles.example}>
                <Text>칼로리</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>부족</Text>
                    <Text>적정</Text>
                    <Text>초과</Text>
                </View>
                <ProgressBar progress={state.toTotalNutri[0]/1000} />
                <Text>{state.toTotalNutri[0]}kcal</Text>
            </View>
        </ScrollView>
    );
}
/*<View style = {{flex: 4, flexDirection: 'column', marginTop: 20}}>
		    <View style = {styles.nutriView}>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>식품 중량</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[0]}(kcal)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>에너지</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[1]}(%)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>수분</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[2]}(g)</Text>
		    	</View>
		    </View>
		    <View style = {styles.nutriView}>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>단백질</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[3]}(g)</Text>
		    	</View>	
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>지질</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[4]}(g)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>회분</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[5]}(g)</Text>
		    	</View>
		    </View>
		    <View style = {styles.nutriView}>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>탄수화물</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[6]}(g)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>총 당류</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[7]}(g)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>식이섬유</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[8]}(mg)</Text>
		    	</View>
		    </View>
		    <View style = {styles.nutriView}>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>총 아미노산</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[9]}(mg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>필수 아미노산</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[10]}(mg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>비필수 아미노산</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[11]}(g)</Text>
		    	</View>
		    </View>
		    <View style = {styles.nutriView}>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>총 지방산</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[12]}(g)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>총 필수 지방산</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[13]}(g)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>총 포화 지방산</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[14]}(g)</Text>
		    	</View>
		    </View>
		    <View style = {styles.nutriView}>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>총 단일 불포화 지방산</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[15]}(g)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>총 다중 불포화 지방산</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[16]}(mg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>칼슘</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[17]}(mg)</Text>
		    	</View>
		    </View>
		    <View style = {styles.nutriView}>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>철</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[18]}(mg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>마그네슘</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[19]}(mg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>인</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[20]}(mg)</Text>
		    	</View>
		    </View>
		    <View style = {styles.nutriView}>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>칼륨</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[21]}(mg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>나트륨</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[22]}(mg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>아연</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[23]}(mg)</Text>
		    	</View>
		    </View>
		    <View style = {styles.nutriView}>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>구리</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[24]}(mg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>망간</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[25]}(μg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>셀레늄</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[26]}(μg)</Text>
		    	</View>
		    </View>
		    <View style = {styles.nutriView}>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>몰리브덴</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[27]}(μg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>요오드</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[28]}(μg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>레티놀</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[29]}(μg)</Text>
		    	</View>
		    </View>
		    <View style = {styles.nutriView}>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>베타카로틴</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[30]}(μg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>비타민D(D2+D3)</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[31]}(μg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>비타민E</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[32]}(μg)</Text>
		    	</View>
		    </View>
		    <View style = {styles.nutriView}>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>비타민K1</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[33]}</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>비타민B1</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[34]}(mg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>비타민B2</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[35]}(mg)</Text>
		    	</View>
		    </View>
		    <View style = {styles.nutriView}>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>니아신</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[36]}(mg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>판토텐산(비타민B5)</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[37]}(mg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>비타민B6</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[38]}(mg)</Text>
		    	</View>
		    </View>
		    <View style = {styles.nutriView}>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>비오틴</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[39]}(mg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>엽산</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[40]}(μg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>비타민B12</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[41]}(μg)</Text>
		    	</View>
		    </View>
		    <View style = {styles.nutriView}>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>비타민C</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[42]}(mg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>콜레스테롤</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[43]}(mg)</Text>
		    	</View>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>식염상당량</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[44]}(g)</Text>
		    	</View>
		    </View>
		    <View style = {styles.nutriView}>
		    	<View style={{flex: 1, borderColor: 'black', borderWidth: 1}}>
		    		<Text style = {styles.text}>폐기물</Text>
		    		<Text style = {styles.text}>{state.toTotalNutri[45]}(g)</Text>
		    	</View>
		    </View>
		</View>*/

export default TotalNutrianScreen;


const styles = StyleSheet.create({
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
		//backgroundColor: 'hsla(186, 80%, 95%, 0.5)',
		marginVertical: 5,
	},
    example: {
        alignSelf: 'center',
        width: "80%",
        marginVertical: 10,
    },
})
