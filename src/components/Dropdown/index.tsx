import { TColorRepresention } from "../../pages/adjust/index";

interface IDropdown {
  children: React.ReactNode[];
  onChangeValue: (value: TColorRepresention) => void;
}

export const Dropdown: React.FC<IDropdown> = ({ children, onChangeValue }) => {
  return (
    <select
      onChange={(event) =>
        onChangeValue(event.target.value as TColorRepresention)
      }
      className="mx-3 bg-transparent cursor-pointer rounded p-2 text-xs hover:bg-neutral-600 "
    >
      {children}
    </select>
  );
};

export default Dropdown;
