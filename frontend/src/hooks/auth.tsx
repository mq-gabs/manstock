import { ReactElement, createContext, useContext, useEffect, useState } from "react";
import { usePopUp } from "./toast";
import { api } from "../services";
import { IUserData } from "../interfaces";

interface IAuthContext {
  userData: IUserData;
  setUserData: (arg: any) => void;
  logOut: () => void;
}

const storageNick = '@manstock:user';

const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: { children: ReactElement[] }) => {
  const localUserData = JSON.parse(localStorage.getItem(storageNick) || '{}');

  if (localUserData.token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${localUserData.token}`;
  }

  const [userData, setUserData] = useState<IUserData>(localUserData || {} as IUserData);

  const { popUp } = usePopUp();

  useEffect(() => {
    if (!userData?.token) return;
    localStorage.setItem(storageNick, JSON.stringify(userData));
  }, [userData])

  const logOut = () => {
    setUserData({} as IUserData);
    localStorage.setItem(storageNick, '{}');
    popUp({
      message: 'Você saiu! Para continuar navegando informe novamente o email e a senha.',
      type: 'info'
    });
  }

  return (
    <AuthContext.Provider value={{ userData, setUserData, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };