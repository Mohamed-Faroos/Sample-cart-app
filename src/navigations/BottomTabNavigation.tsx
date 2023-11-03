/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

import Home from '../screens/home';
import Cart from '../screens/cart';
import {useAppSelector} from '../store/useStore';

export type BottomTabNavigationParams = {
  Home: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavigationParams>();

const BottomTabNavigation = () => {
  const stateCart: any = useAppSelector(state => state.cart);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        component={Home}
        name={'Home'}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <AntDesignIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        component={Cart}
        name={'Cart'}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <AntDesignIcons name="shoppingcart" color={color} size={size} />
          ),
          tabBarBadge: stateCart.cart.length || undefined,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
