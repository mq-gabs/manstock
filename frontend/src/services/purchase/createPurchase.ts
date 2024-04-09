import { api } from ".."
import { IDefaultResponse } from "../../interfaces";

interface ICreatePurchase {
  total: number;
  payment: number;
  change: number;
  payment_type_id: string;
  products: { id: string, quantity: number }[];
}

export const createPurchase = async ({
  total,
  payment,
  change,
  payment_type_id,
  products,
}: ICreatePurchase): Promise<IDefaultResponse | undefined> => {
  try {
    const { data } = await api.post('/purchases', {
      total,
      payment,
      change,
      payment_type_id,
      products,
    });

    return data;
  } catch (error) {
    console.log({ error });

    return;
  }
}