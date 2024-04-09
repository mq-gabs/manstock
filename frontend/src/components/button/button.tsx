import { Loading } from "..";
import Icon, { IIcon } from "../icon";
import { StyledButton } from "./button.styles";

export interface IButton {
  text: string;
  iconName?: IIcon["name"];
  onClick: () => void;
  color?: 'primary' | 'secondary' | 'grey';
  isLoading?: boolean;
}

export const Button = ({
  text,
  iconName,
  onClick = () => {},
  color = 'primary',
  isLoading = false,
}: IButton) => {
  return (
    <StyledButton onClick={onClick} color={color} isloading={isLoading}>
      {isLoading && (
        <Loading isWhite />
      )}
      {iconName && !isLoading && (
        <Icon name={iconName} />
      )}
      <p>{text}</p>
    </StyledButton>
  );
}