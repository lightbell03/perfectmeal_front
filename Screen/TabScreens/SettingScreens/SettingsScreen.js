import React, {useContext, useState, useEffect} from 'react';
import { Alert, View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, PermissionsAndroid, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';

import { AuthContext } from '../../Utils/Context';
import { PostFetch } from '../../Utils/CustomFetch';

const SettingsScreen = ({navigation}) => {
  const { signOut } = useContext(AuthContext);

  const [image, setImage] = useState(null);

  useEffect(() => {
    GetUserProfileImage();
  }, []);

  const GetUserProfileImage = async () => {
    const userProfileImage = await AsyncStorage.getItem('UserProfileImage');
    if(userProfileImage != null)
      setImage(userProfileImage);
  }


  const addImage = async () => {
    const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.CAMERA,
		);
    if(granted === PermissionsAndroid.RESULTS.GRANTED){
      await ImagePicker.openPicker({
        width: 600,
        height: 600,
        cropping: true,
      }).then(imageData => {
        if(imageData != null){
          setImage(imageData.path);
          AsyncStorage.setItem('UserProfileImage', imageData.path);
        }
        else
          return;
      })
    }
    else{
      return;
    }
  }

  const logout = () => {
      Alert.alert(
        'Logout',
        'Are you sure? You want to logout?',
        [
          {
            text: 'Cancel',
            onPress: () => {
              return null;
            },
          },
          {
            text: 'Confirm',
            onPress: async () => {
              
              const accessToken = await AsyncStorage.getItem("accessToken");
              const refreshToken = await AsyncStorage.getItem("refreshToken");
              
              PostFetch({
                uri: '/api/logout',
                body: {
                  accessToken: accessToken,
                  refreshToken: refreshToken
                }
              })
              .then((response) => response.json())
              .then(() => {
                AsyncStorage.removeItem('accessToken');
                AsyncStorage.removeItem('refreshToken');
              })
              .catch((error) => {
                AsyncStorage.removeItem('accessToken');
                AsyncStorage.removeItem('refreshToken');
              })
              signOut();
            },
          },
        ],
        {cancelable: false},
      );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff', justifyContent: 'center'}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
          <Text style = {{fontSize: 20, color: '#000000', fontWeight: '500'}}>프로필</Text>
        </View>
        <View style ={{flex: 3, justifyContent:'center', alignItems: 'center'}}>
          <View style = {{elevation:8, height: 150, width: 150, backgroundColor:'#efefef', position:'relative', borderRadius:999, overflow:'hidden',}}>
            {
              image  && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
            }
            <View style={{opacity:0.7, position:'absolute', right:0, bottom:0, backgroundColor:'lightgrey', width:'100%', height:'25%',}}>
              <TouchableOpacity onPress={addImage} style={{display:'flex', alignItems:"center", justifyContent:'center'}} >
                <Text>{image ? 'Edit' : 'Upload'} Image</Text>
                <MaterialCommunityIcons name="camera" size = {20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style ={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
          <TextInput
            style = {{height: 20, borderBottomColor: '#c0c0c0', borderBottomWidth: 1}} />
        </View>
      </View>
      <View style = {{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <View style = {{ width: '80%', height: 80, justifyContent: 'center', alignItems: 'center', borderTopColor: '#c0c0c0', borderTopWidth: 1, borderBottomColor: '#c0c0c0', borderBottomWidth: 1}}>
          <TouchableOpacity>
            <Text style = {{fontSize: 17, color: '#000000', fontWeight: 'bold'}}>사용방법</Text>
          </TouchableOpacity>
        </View>
        <View style = {{ width: '80%', height: 80, justifyContent: 'center', alignItems: 'center', borderTopColor: '#c0c0c0', borderTopWidth: 1, borderBottomColor: '#c0c0c0', borderBottomWidth: 1}}>
          <TouchableOpacity>
            <Text style = {{fontSize: 17, color: '#000000', fontWeight: 'bold'}}>고객센터</Text>
          </TouchableOpacity>
        </View>
        <View style = {{ width: '80%', height: 80, justifyContent: 'center', alignItems: 'center', borderTopColor: '#c0c0c0', borderTopWidth: 1, borderBottomColor: '#c0c0c0', borderBottomWidth: 1}}>
          <TouchableOpacity
            onPress={() => logout()}
          >
            <Text style = {{fontSize: 17, color: '#ff5c28', fontWeight: 'bold'}}>로그아웃</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		backgroundColor: 'white'
	},
  bimage: {
		width: '100%',
		height: '100%',
	},
	button: {
		backgroundColor: 'gray',
		borderRadius: 5,
	},
	text: {
		alignSelf: 'center',
		fontSize: 20,
	}
});