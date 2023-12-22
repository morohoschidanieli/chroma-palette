import { IDropdownItem } from "../../components/DropdownItem/index";

export const dropdownData: Array<IDropdownItem> = [
  { value: "rgb", children: "RGB" },
  { value: "cmyk", children: "CMYK" },
  { value: "hsl", children: "HSL" },
];

interface IColors {
  id: string;
  value: string;
}

export interface ITestCollection {
  id: string;
  name: string;
  colors: Array<IColors>;
}

export const testCollection: Array<ITestCollection> = [
  { id: "1", name: "Collection1", colors: [{ id: "1", value: "#ffffff" }] },
  { id: "2", name: "Collection2", colors: [{ id: "1", value: "#ffffff" }] },
  { id: "3", name: "Collection3", colors: [{ id: "1", value: "#ffffff" }] },
];
