import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

export interface QuantityPickerProps {
  quantity: number;
  increaseQuantity(): void;
  decreaseQuantity(): void;
}

const QuantityPicker = (props: QuantityPickerProps) => {
  return (
    <View>
      <View className="flex-row mr-5">
        {/* quantity decrease button */}
        <TouchableOpacity
          className="justify-center items-center w-10 h-10 rounded-full bg-black p-2"
          onPress={props.decreaseQuantity}>
          <AntDesignIcons
            className="absolute"
            name="minus"
            color={'white'}
            size={20}
          />
        </TouchableOpacity>
        {/* selected quantity text */}
        <View className="justify-center items-center w-10 h-10 p-2">
          <Text className="text-bold text-lg align-center">
            {props.quantity}
          </Text>
        </View>
        {/* quantity increase button */}
        <TouchableOpacity
          className="justify-center items-center w-10 h-10 rounded-full bg-black p-2"
          onPress={props.increaseQuantity}>
          <AntDesignIcons
            className="absolute"
            name="plus"
            color={'white'}
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuantityPicker;
