import React from 'react';
import {
  ListRenderItemInfo,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import useCartAction from './useCartAction';
import {FlatList} from 'react-native';
import CartProductCard from '../../components/CartProduct';
import {ICartProduct} from '../../constants/interfaces/cart';

const Cart = () => {
  const {stateCart, getTotalAmount} = useCartAction();

  const renderItem = (product: ListRenderItemInfo<ICartProduct>) => {
    return <CartProductCard key={product.item.cartId} product={product.item} />;
  };

  /**
   * The function renders a message indicating that no cart items were found.
   */
  const renderEmptyList = () => {
    return (
      <View className="flex justify-center items-center">
        <Text className="text-2xl text-bold text-gray-500 mt-40">
          No cart items found
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-orange-500">
      <View className="flex-1 bg-gray-100">
        {/* cart header */}
        <Header title={'Cart' + `(${stateCart.cart.length})`} />
        {/* cart items list */}
        <FlatList
          className="justify-space-between"
          data={stateCart.cart}
          renderItem={renderItem}
          numColumns={1}
          ListEmptyComponent={renderEmptyList}
        />
      </View>
      {/* cart total and pay now button */}
      {stateCart.cart.length > 0 && (
        <View
          className="flex-row justify-between items-center
        absolute w-full h-20 bg-white bottom-0 px-4">
          <Text className="text-black font-extrabold text-xl">{`Total : ${getTotalAmount()} GPB`}</Text>
          <View className="bg-blue-600 rounded-lg p-2 px-3">
            <TouchableOpacity>
              <Text className="text-white text-bold text-lg">Pay Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Cart;
