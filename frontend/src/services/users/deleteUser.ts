import { api } from ".."
import { IDefaultResponse } from "../../interfaces";

export const deleteUser = async (
  param: { id: string }
): Promise<IDefaultResponse | undefined> => {
  try {
    const { data } = await api.delete(`/users/${param.id}`);

    return data;
  } catch (error) {
    console.log({ error });

    return;
  }
}