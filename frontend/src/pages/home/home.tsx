import { useNavigate } from "react-router-dom";
import { BigButton } from "../../components";
import { StyledHome } from "./home.styles";

export const Home = () => {
  document.title = 'Manstock';
  const navigate = useNavigate();

  return (
    <StyledHome>
      <div className="btns-wrapper">
        <BigButton
          iconName="addChart"
          text="Nova compra"
          onClick={() => navigate('/purchase/new')}
        />
        <BigButton
          iconName="registers"
          text="Consultar compra"
          onClick={() => navigate('/purchase/search')}
        />
        <BigButton
          iconName="addProduct"
          text="Novo produto"
          onClick={() => navigate('/product/new')}
        />
      </div>
    </StyledHome>
  );
}