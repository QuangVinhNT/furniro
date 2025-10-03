type Product = {
  id: string,
  name: string,
  price: number,
  discount?: number,
  description: {
    short: string,
    long: string;
  },
  images: string[],
  reviews: {
    ranking: number,
    content: string;
  }[],
  SKU: string,
  category: string,
  tags: string[],
  createdDate: string,
  attribute?: {
    sizes?: string[],
    colors?: string[],
  },
  additionalInformation?: {
    modelNumber?: string,
    materials?: string[],
    originOfManufacture?: string,
    warranty?: number,
  };
};

export type {
  Product
};
