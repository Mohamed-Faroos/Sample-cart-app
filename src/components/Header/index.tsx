import React from 'react';
import {StatusBar} from 'react-native';
import {Text, View} from 'react-native';

export interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  return (
    <View className="justify-end h-20 bg-orange-500 px-5 rounded-b-xl">
      <StatusBar barStyle="dark-content" />
      <Text className="text-4xl font-bold text-white mb-3">{props.title}</Text>
    </View>
  );
};

export default Header;
