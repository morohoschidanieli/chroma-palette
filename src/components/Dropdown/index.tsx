import { TColorRepresentation } from "../../pages/adjust/index";

interface IDropdown {
  children: React.ReactNode[];
  className?: string;
  onChangeValue: (value: TColorRepresentation) => void;
}

export const Dropdown: React.FC<IDropdown> = ({
  children,
  className,
  onChangeValue,
}) => {
  return (
    <select
      onChange={(event) =>
        onChangeValue(event.target.value as TColorRepresentation)
      }
      className={
        "mx-3 bg-transparent cursor-pointer rounded p-2 text-xs hover:bg-neutral-600 " +
        (className ? className : "")
      }
    >
      {children}
    </select>
  );
};

export default Dropdown;
