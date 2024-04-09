import { api } from ".."
import { IPaymentType } from "../../interfaces";

export const getPaymentTypes = async (): Promise<IPaymentType[] | undefined> => {
  try {
    const { data } = await api.get('/payment-types');

    return data;
  } catch (error) {
    console.log({ error });

    return;
  }
}