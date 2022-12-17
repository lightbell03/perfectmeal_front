import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import Loader from '../Components/Loader';
import { PostFetch } from '../Utils/CustomFetch';

const RegisterScreen = (props) => {
  const Window_width = Dimensions.get('window').width / 120;
  const Window_height = Dimensions.get('window').height / 213.3;

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState("");
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);
  const [userGender, setUserGender] = useState('man');

  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const addressInputRef = createRef();
  const passwordInputRef = createRef();
  const weightInputRef = createRef();
  const heightInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userAge) {
      alert('Please fill Age');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    //Show Loader
    setLoading(true);

    PostFetch({
      uri: '/api/auth/signup',
      body: {
        name: userName,
        email: userEmail,
        password: userPassword,
        age: userAge,
        gender: "MAN",
        weight: weight,
        height: height,
      }
    })
    .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        setIsRegistraionSuccess(true);
      })
      .catch((error) => {
        setLoading(false);
        alert("register error");
        setErrortext("error text");
      })
  };

  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../Image/success.png')}
          style={{
            height: 150,
            resizeMode: 'contain',
            alignSelf: 'center'
          }}
        />
        <Text style={styles.successTextStyle}>
          Registration Successful
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle, { marginTop: 50, marginVertical: 10, width: Window_width * 104 }}>
            <Text style={{}}>이름</Text>
            <View style={{ flexDirection: 'row', height: Window_height * 17 }}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserName) => setUserName(UserName)}
                underlineColorAndroid="#f000"
                placeholder="이름을 입력하세요"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
                onSubmitEditing={() =>
                  emailInputRef.current && emailInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
          </View>
          <View style={styles.SectionStyle, { marginVertical: 10, width: Window_width * 104 }}>
            <Text>이메일</Text>
            <View style={{ flexDirection: 'row', height: Window_height * 17 }}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                underlineColorAndroid="#f000"
                placeholder="이메일을 입력하세요"
                placeholderTextColor="#8b9cb5"
                keyboardType="email-address"
                ref={emailInputRef}
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
          </View>
          <View style={styles.SectionStyle, { marginVertical: 10, width: Window_width * 104 }}>
            <Text>비밀번호</Text>
            <View style={{ flexDirection: 'row', height: Window_height * 17 }}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                underlineColorAndroid="#f000"
                placeholder="비밀번호를 입력하세요"
                placeholderTextColor="#8b9cb5"
                ref={passwordInputRef}
                returnKeyType="next"
                secureTextEntry={true}
                onSubmitEditing={() =>
                  ageInputRef.current &&
                  ageInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
          </View>
          <View style={styles.SectionStyle, { marginVertical: 10, width: Window_width * 104 }}>
            <Text>성별을 선택하세요</Text>
            <View style={{ flexDirection: 'row', height: Window_height * 17 }}>
              <Picker
                selectedValue={userGender}
                style={{ flex: 1, paddingLeft: 15, borderWidth: 1, borderRadius: 10, borderColor: '#dadae8', paddingRight: 15, }}
                onValueChange={(itemValue, itemIndex) => setUserGender(itemValue)}
              >
                <Picker.Item label="man" value="man" />
                <Picker.Item label="woman" value="woman" />
              </Picker>
            </View>
          </View>
          <View style={styles.SectionStyle & { marginVertical: 10, width: Window_width * 104 }}>
            <Text>나이</Text>
            <View style={{ flexDirection: 'row', height: Window_height * 17 }}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserAge) => setUserAge(UserAge)}
                underlineColorAndroid="#f000"
                placeholder="나이를 입력하세요"
                placeholderTextColor="#8b9cb5"
                keyboardType="numeric"
                ref={ageInputRef}
                returnKeyType="next"
                onSubmitEditing={() =>
                  addressInputRef.current &&
                  addressInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
          </View>
          <View style={styles.SectionStyle, { marginVertical: 10, width: Window_width * 104 }}>
            <Text>몸무게</Text>
            <View style={{ flexDirection: 'row', height: Window_height * 17 }}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserWeight) => setUserAge(UserWeight)}
                underlineColorAndroid="#f000"
                placeholder="몸무게를 입력하세요"
                placeholderTextColor="#8b9cb5"
                keyboardType="numeric"
                ref={weightInputRef}
                returnKeyType="next"
                onSubmitEditing={() =>
                  weightInputRef.current &&
                  weightInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
          </View>
          <View style={styles.SectionStyle, { marginVertical: 10, width: Window_width * 104 }}>
            <Text>키</Text>
            <View style={{ flexDirection: 'row', height: Window_height * 17 }}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserHeight) => setHeight(UserHeight)}
                underlineColorAndroid="#f000"
                placeholder="키를 입력하세요"
                placeholderTextColor="#8b9cb5"
                keyboardType="numeric"
                ref={heightInputRef}
                returnKeyType="next"
                onSubmitEditing={() =>
                  heightInputRef.current &&
                  heightInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
          </View>

          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>회원가입</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'column',
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
    marginBottom: 20,
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
    borderRadius: 10,
    borderColor: '#dadae8',
    fontSize: 17
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});