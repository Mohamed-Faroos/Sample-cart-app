import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {RouteProp, useRoute} from '@react-navigation/native';

import useProductAction from './useProductAction';
import QuantityPicker from '../../components/QuantityPicker';
import SizePicker from '../../components/SizePicker';
import {StackTabNavigationParams} from '../../navigations';

const Product = () => {
  const route = useRoute<RouteProp<StackTabNavigationParams, 'Product'>>();
  const productDetails = route.params;

  const {
    stateCart,
    quantity,
    selectedSize,
    increaseQuantity,
    decreaseQuantity,
    onClickBack,
    onSelectSize,
    onAddToCart,
    onClickCart,
  } = useProductAction();

  /**
   * The function `renderFloatingHeader` returns a JSX element representing a
   * floating header with back and cart buttons, and a badge indicating the number
   * of items in the cart.
   */
  const renderFloatingHeader = () => {
    return (
      <View className="flex-row w-full justify-between top-12 absolute pt-1 px-4">
        {/* product detail screen back button */}
        <TouchableOpacity
          className="w-10 h-10 justify-center items-center bg-gray-200 rounded-full shadow-2xl"
          onPress={onClickBack}>
          <AntDesignIcons name="back" color={'black'} size={25} />
        </TouchableOpacity>

        {/* product detail screen cart button with cart item count */}
        <TouchableOpacity
          className="w-10 h-10 justify-center items-center bg-gray-200 rounded-full shadow-2xl"
          onPress={onClickCart}>
          <AntDesignIcons name="shoppingcart" color={'black'} size={25} />
          {stateCart.cart.length > 0 && (
            <View
              className="justify-center items-center  absolute bg-red-600
            text-white w-5 h-5 top-[-4] right-[-4] rounded-full">
              <Text className="text-sm text-bold text-white">
                {stateCart.cart.length}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  /**
   * The function `renderProductDetails` returns a JSX element that displays the
   * details of a product, including the brand name, product name, price, and
   * description.
   */
  const renderProductDetails = () => {
    return (
      <View>
        <Text className="text-xl text-indigo-600 font-semibold mt-2">
          {productDetails.brandName}
        </Text>
        <Text className="text-2xl font-semibold mt-1">
          {productDetails.name}
        </Text>
        <Text className="text-xl font-bold text-orange-600 mt-2">
          {`${productDetails.price.currency} ${productDetails.price.amount}`}
        </Text>
        <Text className="text-lg text-gray-500 mt-2 text-justify">
          {productDetails.description}
        </Text>
      </View>
    );
  };

  return (
    <>
      <ScrollView className="bg-white">
        <Image
          resizeMode="contain"
          source={{uri: productDetails.mainImage}}
          className="h-96 w-full object-cover "
        />
        <View className="px-5 pb-10">
          {renderProductDetails()}

          {/* size picker component */}
          <View>
            <SizePicker
              selectedSize={selectedSize}
              onSelectSize={onSelectSize}
              options={productDetails.sizes}
            />
          </View>

          {/* quantity picker component and add to cart button */}
          <View className="flex flex-row justify-between mt-4 rounded-lg">
            <QuantityPicker
              quantity={quantity}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
            <TouchableOpacity
              className="bg-yellow-600 py-2 px-4 rounded-lg"
              onPress={() => onAddToCart(productDetails)}>
              <Text className="text-lg text-white text-bold">Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <SafeAreaView className="bg-white" />
      {renderFloatingHeader()}
    </>
  );
};

export default Product;
