import {ICartProduct} from '../../constants/interfaces/cart';
import {useAppSelector} from '../../store/useStore';

const useCartAction = () => {
  const stateCart: any = useAppSelector(state => state.cart);

  /**
   * The function calculates the total amount by multiplying the quantity and
   * price of each product in the cart and summing them up.
   */
  const getTotalAmount = () => {
    let amount = 0;
    stateCart.cart.map((product: ICartProduct) => {
      amount = amount + product.quantity * product.price.amount;
    });
    return amount;
  };

  return {stateCart, getTotalAmount};
};

export default useCartAction;
