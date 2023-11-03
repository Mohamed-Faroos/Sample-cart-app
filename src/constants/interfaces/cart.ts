export type ICartProduct = {
  id: number;
  cartId: string;
  SKU: number;
  name: string;
  brandName: string;
  mainImage: string;
  price: {
    amount: number;
    currency: string;
  };
  sizes: number[];
  stockStatus: string;
  colour: string;
  description: string;
  selectedSize: number;
  quantity: number;
};

export type CartProductData = {
  cart: ICartProduct[];
};
