import SecureStorage from 'react-native-secure-storage';
import jwtDecode from 'jwt-decode';

const key = 'authToken';

const getUser = async () => {
  const token = await getToken();

  if (token) {
    return jwtDecode(token);
  }

  return null;
};

const storeToken = async (authToken) => {
  try {
    await SecureStorage.setItem(key, authToken);
  } catch (error) {
    console.log('Error storgin the auth token', error);
  }
};

const getToken = async () => {
  try {
    return await SecureStorage.getItem(key);
  } catch (error) {
    console.log('Error getting the auth token', error);
  }
};

const removeToken = async () => {
  try {
    await SecureStorage.removeItem(key);
  } catch (error) {
    console.log('Error removing the auth token', error);
  }
};

export default {
  storeToken,
  removeToken,
  getUser,
  getToken,
};
