import { StyledSelect } from "./select.styles";

interface ISelectOption {
  id: number | string;
  name: string;
  value: string;
}

interface ISelect {
  options: ISelectOption[];
  setSelected: (arg: string) => void;
  selected?: string | number;
  defaultValue?: string | number;
}

export const Select = ({ 
  options,
  setSelected,
  defaultValue,
  selected,
}: ISelect) => {

  return (
    <StyledSelect
      onChange={({ target }) => setSelected(target.value)}
      value={selected || defaultValue}
    >
      <option
        key={666}
        value=''
      >
        {'-'}
      </option>
      {options?.map(option => (
        <option
          key={option.id}
          value={option.value}
        >
          {option.name}
        </option>
      ))}
    </StyledSelect>
  );
}