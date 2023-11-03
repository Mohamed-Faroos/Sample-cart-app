import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackTabNavigationParams} from '../../navigations';
import {Product} from '../../constants/interfaces/product';

type StackNavProps = NativeStackNavigationProp<StackTabNavigationParams>;

const useProductCardAction = () => {
  const navigation = useNavigation<StackNavProps>();

  /**
   * The onClickCard function navigates to the 'Product' screen with the given
   * product data.
   */
  const onClickCard = (product: Product) => {
    navigation.navigate('Product', product);
  };

  return {onClickCard};
};

export default useProductCardAction;
