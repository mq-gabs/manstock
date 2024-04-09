import { api } from "..";

interface IUpdateUser {
  id: string;
  name: string;
  email: string;
  oldPassword: string;
  newPassword: string;
  profileName: string;
}

export const updateUser = async (
  params: IUpdateUser
) => {
  try {
    const data = await api.patch(`/users/${params.id}`, {
      name: params.name,
      email: params.email,
      oldPassword: params.oldPassword,
      newPassword: params.newPassword,
      profileName: params.profileName,
    });

    return data;
  } catch (error) {
    console.log({ error });

    return;
  }
}