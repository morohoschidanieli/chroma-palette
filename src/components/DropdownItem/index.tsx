export interface IDropdownItem {
  value: string;
  children: string;
}

const DropdownItem = ({ value, children }: IDropdownItem): React.ReactNode => {
  return <option value={value}>{children}</option>;
};

export default DropdownItem;
