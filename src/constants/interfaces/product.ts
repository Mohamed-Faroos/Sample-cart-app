export type Product = {
  id: number;
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
};

export type ProductData = {
  loading_products: boolean;
  products: Product[];
  error_products: any;
};
