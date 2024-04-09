import { api } from ".."
import { IDefaultResponse } from "../../interfaces";

interface ICreateUser {
  name: string;
  email: string;
  password: string;
  userProfile: string;
}

export const createUser = async (
  params: ICreateUser
): Promise<IDefaultResponse | undefined> => {
  try {
    const { data } = await api.post('/users', params);

    return data;
  } catch (error) {
    console.error({ error });

    return;
  }
}