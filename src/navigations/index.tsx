import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import ProductDetails from '../screens/product';
import {Product} from '../constants/interfaces/product';

export type StackTabNavigationParams = {
  HomeTab: undefined;
  Product: Product;
};

const Stack = createNativeStackNavigator<StackTabNavigationParams>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={BottomTabNavigation} name="HomeTab" />
        <Stack.Screen
          options={{presentation: 'fullScreenModal'}}
          component={ProductDetails}
          name="Product"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
