import { api } from "..";
import { IProduct } from "../../interfaces";

export const getProductByCode = async ({ code }: { code: string }): Promise<IProduct | undefined> => {
  try {
    const { data } = await api.get(`/products/code/${code}`);

    return data;
  } catch (error) {
    console.log({ error });
    return;
  }
}