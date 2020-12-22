import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

const ImageInput = ({imageUri, onChangeImage}) => {
  const handlePress = () => {
    if (!imageUri) {
      selectImage();
      return;
    } else {
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        {
          text: 'Yes',
          onPress: () => onChangeImage(null),
        },
        {text: 'No'},
      ]);
    }
  };

  const selectImage = async () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (!response.didCancel) {
        onChangeImage(response.uri);
      }
    });
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress} style={styles.container}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}

        {imageUri && (
          <Image
            style={styles.image}
            source={{
              uri: imageUri,
            }}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
    height: 100,
    width: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageInput;
