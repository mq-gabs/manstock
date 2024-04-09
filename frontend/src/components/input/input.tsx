import { useState } from "react";
import Icon, { IIcon } from "../icon";
import { StyledInput } from "./input.styles";

interface IInput {
  type?: string;
  placeholder?: string;
  icon?: IIcon['name'];
  value?: string | number;
  setValue: (arg: any) => void;
  pattern?: string;
}

export const Input = ({
  type = 'text',
  placeholder = '',
  icon,
  value,
  setValue,
  pattern,
}: IInput) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <StyledInput>
      {icon && (
        <Icon name={icon} />
      )}
      <input
        type={showPassword ? 'text' : type}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder={placeholder}
        pattern={pattern}
      />
      {type === 'password' && (
        <Icon
          background
          name={showPassword ? 'slashEye' : 'eye'}
          onClick={handleToggleShowPassword}
        />
      )}
    </StyledInput>
  );
}
