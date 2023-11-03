import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {Product} from '../../constants/interfaces/product';
import useProductCardAction from './useProductCardAction';

const ProductCard = ({product}: {product: Product}) => {
  const {onClickCard} = useProductCardAction();

  return (
    <View className="w-1/2 p-2">
      <TouchableOpacity
        onPress={() => onClickCard(product)}
        className="flex-1 h-69 bg-white rounded-xl p-2">
        {/* home product cart image */}
        <Image
          resizeMode="contain"
          className="w-50 h-44"
          source={{uri: product.mainImage}}
        />
        {/* home product cart name */}
        <Text numberOfLines={2} className="text-sm font-semibold">
          {product.name}
        </Text>
        {/* home product cart brand name */}
        <Text numberOfLines={2} className="text-sm text-indigo-600">
          {product.brandName}
        </Text>
        {/* home product cart price and stock status */}
        <View className="flex flex-row  justify-between items-center">
          <Text className="text-sm font-bold text-orange-600 mt-1">
            {`${product.price.currency} ${product.price.amount}`}
          </Text>
          <Text className="text-xs text-green-600 mt-1">
            {product.stockStatus}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
