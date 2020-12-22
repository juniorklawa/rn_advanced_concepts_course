import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Listings"
      options={{headerShown: false}}
      component={ListingsScreen}
    />
    <Stack.Screen
      name="ListeningDetails"
      options={({route}) => ({title: route.params.title})}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
