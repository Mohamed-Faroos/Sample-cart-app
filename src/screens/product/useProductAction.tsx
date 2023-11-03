import {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import uuid from 'react-native-uuid';

import {StackTabNavigationParams} from '../../navigations';
import {Alert} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../store/useStore';
import {addCartProduct} from '../../store/cart/action';
import {BottomTabNavigationParams} from '../../navigations/BottomTabNavigation';

type StackNavProps = NativeStackNavigationProp<StackTabNavigationParams>;
type TabNavProps = BottomTabNavigationProp<BottomTabNavigationParams>;

const useProductAction = () => {
  const stateCart: any = useAppSelector(state => state.cart);

  const navigation = useNavigation<StackNavProps>();
  const tabNavigation = useNavigation<TabNavProps>();
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<number>(0);

  const dispatch = useAppDispatch();

  /**
   * The function `increaseQuantity` increases the value of the `quantity` state
   */
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  /**
   * The function decreases the quantity by 1 if it is greater than 1.
   */
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  /**
   * The onClickBack function is used to navigate back to the previous screen.
   */
  const onClickBack = () => {
    navigation.goBack();
  };

  /**
   * The function `onSelectSize` sets the selected size to the provided size value.
   */
  const onSelectSize = (size: number) => {
    setSelectedSize(size);
  };

  /**
   * The function `onAddToCart` adds a product to the cart with the selected size
   * and quantity, and navigates to the cart screen.
   */
  const onAddToCart = (product: any) => {
    if (selectedSize === 0) {
      Alert.alert('Message', 'Please select a size');
    } else {
      const cartProduct = {
        ...product,
        cartId: uuid.v4(),
        quantity: quantity,
        selectedSize: selectedSize,
      };

      dispatch(addCartProduct(cartProduct));
      tabNavigation.navigate('Cart');
    }
  };

  /**
   * The onClickCart function navigates to the 'Cart' tab.
   */
  const onClickCart = () => {
    tabNavigation.navigate('Cart');
  };

  return {
    stateCart,
    quantity,
    selectedSize,
    increaseQuantity,
    decreaseQuantity,
    onClickBack,
    onSelectSize,
    onAddToCart,
    onClickCart,
  };
};

export default useProductAction;
