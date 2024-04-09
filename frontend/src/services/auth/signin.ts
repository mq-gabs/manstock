import jwtDecode from "jwt-decode";
import { api } from "..";
import { IUserData } from "../../interfaces";

interface ISignIn {
  authData: { email: string, password: string };
}

export const signIn = async ({
  authData,
}: ISignIn): Promise<IUserData | undefined> => {
  try {
    const { data } = await api.post('/auth', authData);
    
    api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

    const { userProfile }: { userProfile: string } = jwtDecode(data.token);
    data.user.profile = userProfile;

    return data;
  } catch (error) {
    console.log({ error });
    return;
  }
}