import React from 'react';
import {View} from 'react-native';
import Text from './Text';
import colors from '../config/colors';
import {StyleSheet} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

const OfflineNotice = ({}) => {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No internet connection</Text>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
