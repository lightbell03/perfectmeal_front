import React, { useState, createRef, useContext } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Keyboard,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from '../Components/Loader';
import { AuthContext } from '../Utils/Context';
import { PostFetch } from '../Utils/CustomFetch';

const LoginScreen = ({ navigation }) => {

  const { signIn } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const passwordInputRef = createRef();

  const Window_width = Dimensions.get('window').width / 120;
  const Window_height = Dimensions.get('window').height / 213.3;

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);

    PostFetch({
      uri: '/api/auth/login',
      body: {
        email: userEmail,
        password: userPassword
      }
    })
    .then((response) => response.json())
      .then((response) => {
        setLoading(false);

        AsyncStorage.setItem('accessToken', response.accessToken);
        AsyncStorage.setItem('refreshToken', response.refreshToken);
        signIn(response.accessToken);
      })
      .catch((error) => {
        setLoading(false);
        alert("이메일 또는 비밀번호가 일치하지 않습니다.");
      })
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Loader loading={loading} />
      <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../../Image/icon_logo.png')}
            style={{
              width: Window_width * 12,
              height: Window_height * 12,
              resizeMode: 'contain',
            }}
          />
          <Text style={{ color: '#373737', fontSize: 40, fontFamily: 'Angels Cookie' }}>PERFECT</Text>
          <Text style={{ color: '#b4dd5d', fontSize: 40, fontFamily: 'Angels Cookie' }}>MEAL</Text>
        </View>
      </View>
      <View style={{ flex: 4, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', width: Window_width * 100, height: Window_height * 16, borderWidth: 1, borderColor: '#e8e8e8', borderRadius: 25, marginVertical: 5 }}>
          <Image
            source={require('../../Image/icon_email.png')}
            style={{ width: Window_width * 5.3, height: Window_height * 5.3, resizeMode: 'contain', marginTop: 17, marginLeft: 17 }}
          />
          <TextInput
            onChangeText={(UserEmail) =>
              setUserEmail(UserEmail)
            }
            placeholder="이메일 아이디를 입력해주세요" //dummy@abc.com
            placeholderTextColor="#d2d2d2"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() =>
              passwordInputRef.current &&
              passwordInputRef.current.focus()
            }
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          />
        </View>
        <View style={{ flexDirection: 'row', width: Window_width * 100, height: Window_height * 16, borderWidth: 1, borderColor: '#e8e8e8', borderRadius: 25, marginVertical: 10 }}>
          <Image
            source={require('../../Image/icon_password.png')}
            style={{ width: Window_width * 5.3, height: Window_height * 5.3, resizeMode: 'contain', marginTop: 17, marginLeft: 17 }}
          />
          <TextInput
            onChangeText={(UserPassword) =>
              setUserPassword(UserPassword)
            }
            placeholder="비밀번호를 입력해주세요"
            placeholderTextColor="#d2d2d2"
            keyboardType="default"
            ref={passwordInputRef}
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            underlineColorAndroid="#f000"
            returnKeyType="next"
          />
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
        </View>
        <TouchableOpacity
          style={{ width: Window_width * 100, height: Window_height * 16, backgroundColor: '#badd6f', borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
          activeOpacity={0.5}
          onPress={() => {
            handleSubmitPress();
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: '800', color: 'white' }}>로그인</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{ flex: 0.8, backgroundColor: '#FDBD5D', justifyContent: 'center', alignItems: 'center' }}
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        <Text style={{ fontSize: 17, fontWeight: '800', color: 'white' }}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};

/*
*/

export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});