import Icon, { IIcon } from "../icon";
import { StyledBigButton } from "./big-button.styles";

interface IBigButton {
  iconName: IIcon["name"];
  text: string;
  onClick: () => void;
}

export const BigButton = ({
  iconName,
  text,
  onClick = () => {},
}: IBigButton) => {
  return (
    <StyledBigButton onClick={onClick}>
      <Icon size={4} name={iconName} />
      <p>{text}</p>
    </StyledBigButton>
  );
}