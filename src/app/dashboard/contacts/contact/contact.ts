export interface Product {
  id: number;
  name: string;
  categories: any[];
  price: number;
  price_promotion: number;
  brand: any;
  // @ts-ignore
  // numbers: any[];
  // @ts-ignore
  created_at: Date;
  updated_at: Date;
}

