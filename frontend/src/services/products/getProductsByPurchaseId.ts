import { api } from ".."
import { IProduct } from "../../interfaces";

export const getProductsByPurchaseId = async (
  { id }: { id: string }
): Promise<IProduct[] | undefined> => {
  try {
    const { data } = await api.get(`/products/purchase/${id}`);

    return data;
  } catch (error) {
    console.log({ error });
    return;
  }
}