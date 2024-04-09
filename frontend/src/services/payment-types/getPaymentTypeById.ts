import { api } from ".."
import { IPaymentType } from "../../interfaces";

export const getPaymentTypeById = async ({
  payment_type_id
}: { payment_type_id: string }): Promise<IPaymentType | undefined> => {
  try {
    const { data } = await api.get(`payment-types/${payment_type_id}`);

    return data;
  } catch (error) {
    console.log({ error });
    return;
  }
}