import React, {useState, useContext } from 'react';
import {View, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import Loader from '../Components/Loader';
import { AuthContext} from '../Utils/Context';

const SerialNumberScreen = ({navigation}) => {

    const {signIn} = useContext(AuthContext);
    const [serialNumberText, setSerialNumberText] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = () =>{
        setLoading(true);

        AsyncStorage.getItem('user_id', function(err, result){
            if(err){
                console.log(err)
                setLoading(false);
                return;
            }

            fetch(url + "/regist_serial_number", {
                method: "POST",
                headers: {
                    "Accept" : "application/json",
                    "Content-Type" : "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    userEmail: result,
                    serial_number: serialNumberText,
                })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.status === "success"){
                    setLoading(false);
                    signIn();
                }
                else{
                    setLoading(false);
                    alert(responseJson.status);
                    return;
                }
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                return;
            })
        })
    }

    return (
        <View style={styles.container}>
            <Loader loading = {loading} />
            <View style = {{flex: 4, justifyContent: 'center'}}>
                <TextInput style = {styles.textinput}
                    onChangeText = { (serialnumber) => {
                        setSerialNumberText(serialnumber);
                    }}
                    placeholder="serial number"/>
            </View>
            <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress = {() => navigation.navigate('LoginScreen')}>
                    <Text style={{alignSelf: 'center', marginTop: 15}}>취소</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress = {handleSubmit}>
                    <Text style={{alignSelf: 'center', marginTop: 15}}>등록</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SerialNumberScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    textinput: {
        width: 300, 
        height: 40,
        alignSelf: 'center', 
        borderWidth: 2, 
        borderRadius: 10, 
        borderColor: 'black' ,
        marginBottom: 100,
    },
    button: {
        height: 50,
        width: 100,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: 'green',
    },
});