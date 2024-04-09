import { api } from "..";
import { ICreateProductResponse } from "../../interfaces";

interface ICreateProduct {
  name: string;
  code: string;
  price: number;
}

export const createProduct = async (productData: ICreateProduct): Promise<ICreateProductResponse | undefined> => {
  try {
    const { data } = await api.post('/products', productData);

    return data;
  } catch (error) {
    console.log({ error });

    return;
  }
}