import {useContext} from 'react';
import AuthContext from './context';
import authStore from '../auth/storage';
import jwtDecode from 'jwt-decode';

const useAuth = () => {
  const {user, setUser} = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    authStore.removeToken();
  };

  const logIn = async (authToken) => {
    const authUser = jwtDecode(authToken);
    setUser(authUser);
    await authStore.storeToken(authToken);
  };

  return {user, setUser, logOut, logIn};
};

export default useAuth;
