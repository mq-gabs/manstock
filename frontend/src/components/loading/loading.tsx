import Icon from "../icon";
import { StyledLoading } from "./loading.styles";

interface ILoading {
  isWhite?: boolean;
}

export const Loading = ({ isWhite = false }: ILoading) => {
  return (
    <StyledLoading>
      <Icon name={isWhite ? "loadingWhite" : 'loading'} />
    </StyledLoading>
  );
}