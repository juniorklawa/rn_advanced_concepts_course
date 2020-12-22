import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

const useLocation = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    try {
      const {
        coords: {latitude, longitude},
      } = Geolocation.getCurrentPosition();

      setLocation({latitude, longitude});
    } catch (error) {
      console.log(error);
    }
  }, []);

  return location;
};

export default useLocation;
