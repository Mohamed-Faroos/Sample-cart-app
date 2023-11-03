import {Alert} from 'react-native';
import {ICartProduct} from '../../constants/interfaces/cart';
import {removeCartProduct} from '../../store/cart/action';
import {useAppDispatch} from '../../store/useStore';

const useCartProductAction = () => {
  const dispatch = useAppDispatch();

  /**
   * The function `onRemoveCartProduct` displays a confirmation alert and dispatches
   * an action to remove a product from the cart if the user confirms.
   */
  const onRemoveCartProduct = (product: ICartProduct) => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to remove?',
      [
        {
          text: 'No',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => dispatch(removeCartProduct(product)),
        },
      ],
      {cancelable: false},
    );
  };

  return {onRemoveCartProduct};
};

export default useCartProductAction;
