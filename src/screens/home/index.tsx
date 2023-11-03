import React from 'react';
import {FlatList, ListRenderItemInfo, SafeAreaView, View} from 'react-native';

import useHomeActions from './useHomeActions';
import {Product} from './../../constants/interfaces/product';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';

const Home = () => {
  const {stateProducts} = useHomeActions();

  /**
   * The function "product" returns a JSX element representing a product card
   * component with the given product data.
   */
  const product = (product: ListRenderItemInfo<Product>) => {
    return <ProductCard product={product.item} />;
  };

  return (
    <SafeAreaView className="flex-1 bg-orange-500">
      <View className="flex-1 bg-gray-100">
        {/* home header */}
        <Header title="Products" />
        {/* home products list */}
        <FlatList
          className="justify-space-between"
          data={stateProducts.products}
          renderItem={product}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
