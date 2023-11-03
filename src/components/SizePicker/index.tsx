import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export interface SizePickerProps {
  selectedSize: number;
  onSelectSize(size: number): void;
  options: number[];
}

const SizePicker = (props: SizePickerProps) => {
  /**
   * The function `selectedSizeStyle` returns a CSS class name based on whether the
   * `selectedSize` prop matches the given `size` argument.
   */
  const selectedSizeStyle = (size: number) => {
    if (props.selectedSize === size) {
      return 'border-teal-400 border-2';
    } else {
      return 'border-0';
    }
  };

  return (
    <View className="my-4">
      <Text className="text-md text-bold my-2"> Select Size: </Text>
      <View className="flex-row">
        {props.options.map((size: number) => (
          <TouchableOpacity
            key={size}
            className={
              'justify-center items-center w-12 h-10 rounded-sm bg-gray-200 px-2 mr-2 ' +
              selectedSizeStyle(size)
            }
            onPress={() => props.onSelectSize(size)}>
            <Text className="text-sm text-bold">{size}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SizePicker;
