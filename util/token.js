import AsyncStorage from '@react-native-async-storage/async-storage';  

export const getAppToken = async () => {
  return await AsyncStorage.getItem('traotoken');  
};

export const setAppToken = async (token) => {
    await AsyncStorage.setItem('traotoken', token);  
  };

export const flushAppToken= async () => {
    await AsyncStorage.setItem('traotoken', '');  
  };


