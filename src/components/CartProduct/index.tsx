import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

import {ICartProduct} from '../../constants/interfaces/cart';
import useCartProductAction from './useCartProductAction';

const CartProduct = ({product}: {product: ICartProduct}) => {
  const {onRemoveCartProduct} = useCartProductAction();

  return (
    <View className="w-full">
      <View className="flex flex-row bg-white m-3 rounded-xl p-2 shadow-xl">
        {/* cart product image */}
        <Image
          resizeMode="contain"
          className="w-32 h-32"
          source={{uri: product.mainImage}}
        />
        <View className="p-2">
          {/* cart product name */}
          <Text numberOfLines={2} className="w-44 text-lg font-semibold">
            {product.name}
          </Text>
          {/* cart product price and quantity */}
          <Text className="text-sm font-bold text-orange-600 mt-1">
            {`${product.price.currency} ${product.price.amount} X ${product.quantity}`}
          </Text>
          {/* cart product selected size */}
          <Text className="text-lg mt-1">Size: {product.selectedSize}</Text>
        </View>
        <TouchableOpacity
          onPress={() => onRemoveCartProduct(product)}
          className="w-20 justify-center items-center">
          <AntDesignIcons name="delete" color={'red'} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartProduct;
