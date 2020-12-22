import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

const NewListingButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name="plus-circle" color="#fff" size={32} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 25,
    borderColor: colors.white,
    borderWidth: 3,
    borderRadius: 70,
    overflow: 'visible',
  },
});

export default NewListingButton;
