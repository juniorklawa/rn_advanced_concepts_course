import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import listingsApi from '../api/listings';
import ActivityIndicator from '../components/ActivityIndicator';
import Button from '../components/Button';
import Card from '../components/Card';
import Screen from '../components/Screen';
import AppText from '../components/Text';
import colors from '../config/colors';
import useApi from '../hooks/useApi';

const ListingsScreen = ({navigation}) => {
  const getListingApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingApi.request(1, 2, 3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingApi.error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <Button title="Retry" onPress={getListingApi.request()} />
        </>
      )}
      <ActivityIndicator visible={getListingApi.loading} />
      <FlatList
        data={getListingApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate('ListeningDetails', item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
