import { api } from "..";

export const getAllUsers = async () => {
  try {
    const { data } = await api.get('/users');

    return data;
  } catch (error) {
    console.log({ error });
    return;
  }
}