import { Button, Dropdown, DropdownItem, RGBSlider } from "@components";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { dropdownData } from "./content";
import { IDropdownItem } from "../../components/DropdownItem/index";
import { useEffect, useState } from "react";
import { getColorRepresentation } from "@utils";

export type TColorRepresention = "rgb" | "cmyk" | "hsv" | "hsl";

const Adjust = () => {
  const [colorRepresentation, setColorRepresentation] =
    useState<TColorRepresention>("rgb");

  useEffect(() => {
    console.log(getColorRepresentation(colorRepresentation)());
  }, [colorRepresentation]);

  const copyHandler = () => {
    console.log("servus");
  };

  const changeDropdownHandler = (colorRepresentation: TColorRepresention) => {
    setColorRepresentation(colorRepresentation);
  };

  return (
    <main className="flex flex-col justify-start p-5 items-center h-full">
      <div className="h-36 w-full bg-red-600 rounded-md " />
      <div className="flex flex-row py-4 items-center justify-between w-full">
        <div className="tracking-wide text-neutral-500">#FF00FF</div>
        <div className="flex flex-row justify-center items-center">
          <Dropdown onChangeValue={(event) => changeDropdownHandler(event)}>
            {dropdownData.map((data: IDropdownItem) => (
              <DropdownItem key={data.value} value={data.value}>
                {data.children}
              </DropdownItem>
            ))}
          </Dropdown>
          <Button
            icon={faCopy}
            title="Copy"
            clickPopUpMessage="Copied!"
            popUpShowTime={400}
            onClick={copyHandler}
          />
        </div>
      </div>
      <div className="h-9 w-full">
        {/* {getColorRepresentation(colorRepresentation)} */}
        <RGBSlider />
      </div>
    </main>
  );
};

export default Adjust;
