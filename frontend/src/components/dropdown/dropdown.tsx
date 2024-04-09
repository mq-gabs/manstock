import { ReactElement } from "react";
import { StyledDropdown } from "./dropdown.styles";
import { IIcon } from "..";
import Icon from "../icon";

interface IDropdown {
  title?: string;
  iconName?: IIcon["name"];
  children?: ReactElement | ReactElement[];
  open: boolean;
  setOpen: (arg: boolean) => void;
}

export const Dropdown = ({
  open,
  setOpen,
  title = 'Título do Dropdown',
  iconName = 'barCodePrimary',
  children,
}: IDropdown) => {

  return (
    <StyledDropdown open={open}>
      <div className="dropdown-head">
        <div className="dropdown-head-title">
          {iconName && (
            <Icon name={iconName} />
          )}
          <p>
            {title}
          </p>
        </div>
        <div className="arrow-wrapper">
          <Icon size={1.5} name="arrow" onClick={() => setOpen(!open)} />
        </div>
      </div>
      {open && (
        <div className="dropdown-body">
          {children}
        </div>
      )}
    </StyledDropdown>
  );
}