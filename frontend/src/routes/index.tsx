import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";
import { AppRoutes } from "./app.routes";


export const Router = () => {
  const { userData } = useAuth();

  return (
    <BrowserRouter>
      {userData?.token ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}