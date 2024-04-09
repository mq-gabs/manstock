import { api } from ".."
import { IProduct } from "../../interfaces";

export const getRandomProduct = async (): Promise<IProduct | undefined> => {
  try {
    const { data } = await api.get('/products/random');

    return data;
  } catch (error) {
    console.log({ error });

    return;
  }
}