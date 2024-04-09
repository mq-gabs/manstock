export interface IUserData {
  token: string;
  user: {
    created_at: string;
    email: string;
    id: string;
    name: string;
    profile_id: string;
    updated_at: string;
    profile: 'admin' | 'default';
  }
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  code: string;
}

export interface IFormatedProduct extends IProduct {
  quantity: number;
}

export type TToastTypes = 'info' | 'warning' | 'success';

export interface IToastElement {
  id: string;
  message: string;
  type: TToastTypes;
  title?: string;
}

export interface IPaymentType {
  id: string;
  name: string;
}

export interface IFormatedPaymentType extends IPaymentType {
  value: string;
}

export interface IDefaultResponse {
  message: string;
}

export interface ICreateProductResponse extends IDefaultResponse {
  product: IProduct;
}

export interface IPurchase {
  id: string;
  total: number;
  payment: number;
  change: number;
  payment_type_id: string;
  owner: string;
  created_at: string;
  updated_at: string;
}