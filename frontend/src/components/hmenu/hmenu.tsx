import { StyledHMenu } from "./hmenu.styles";

interface IHMenuOption {
  id: number;
  name: string;
}

interface IHMenu {
  options: IHMenuOption[];
  selected: number;
  setSelected: (arg: number) => void;
}

export const HMenu = ({
  options,
  selected,
  setSelected,
}: IHMenu) => {
  return (
    <StyledHMenu selected={selected} size={options.length}>
      {options?.map((option: IHMenuOption, index: number) => (
        <div key={option.id} className="hmenu-option" onClick={() => setSelected(index)}>
          <p>{option.name}</p>
        </div>
      ))}
    </StyledHMenu>
  );
}