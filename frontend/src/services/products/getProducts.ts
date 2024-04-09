import { api } from "..";
import { IProduct } from "../../interfaces";
import { formatQuery } from "../../utils";

interface IGetProducts {
  name?: string;
  code?: string;
  page?: string;
  pageSize?: string;
  initDate?: string;
  endDate?: string;
  initTime?: string;
  endTime?: string;
}

export const getProducts = async ({
  name,
  code,
  page,
  pageSize,
  initDate,
  endDate,
  initTime,
  endTime,
}: IGetProducts): Promise<[IProduct[], number] | undefined> => {
  try {
    const query = formatQuery({
      name,
      code,
      page,
      pageSize,
      initDate,
      endDate,
      initTime,
      endTime,
    });

    const { data } = await api.get(`/products${query}`);

    return data;
  } catch (error) {
    console.log({ error });
    return;
  }
}