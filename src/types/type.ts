export interface IProduct {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    guid: string;
    title: string;
    description: string;
    brand: {
      id: number;
      guid: string;
      title: string;
    };
    category: {
      id: number;
      guid: string;
      title: string;
    };
    stock: number;
    sales: number;
    status: boolean;
    productPricings: {
      tax: number;
      min_order: number;
      price: string;
    };
    productImages: {
      id: number;
      guid: string;
      photo: string;
      photo_medium: string;
      photo_small: string;
    }[];
  }[];
}

export interface IRows {
  id: string;
  name: string;
}
