import { api } from ".."
import { IPurchase } from "../../interfaces";
import { formatQuery } from "../../utils";

interface IGetAllPurchases {
  purchaseId?: string;
  productName: string;
  productCode: string;
  page: number;
  pageSize: number;
  initDate: string;
  endDate: string;
  initTime: string;
  endTime: string;
}

export const getAllPurchases = async (
  params: IGetAllPurchases
): Promise<[IPurchase[], number] | undefined> => {
  try {
    const query = formatQuery(params);

    const { data } = await api.get(`/purchases${query}`);

    return data;
  } catch (error) {
    console.log({ error });

    return;
  }
}