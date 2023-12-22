import {
  Button,
  SliderSelector,
  Dropdown,
  DropdownItem,
  ColorPreview,
} from "@components";
import {
  faCopy,
  faKeyboard,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { ITestCollection, dropdownData, testCollection } from "./content";
import { IDropdownItem } from "../../components/DropdownItem/index";
import { useState } from "react";
import Collection from "components/Collection";

export type TColorRepresentation = "rgb" | "cmyk" | "hsv" | "hsl";

const Adjust = () => {
  const [colorRepresentation, setColorRepresentation] =
    useState<TColorRepresentation>("rgb");

  const copyHandler = () => {
    console.log("servus");
  };

  const changeDropdownHandler = (colorRepresentation: TColorRepresentation) => {
    setColorRepresentation(colorRepresentation);
  };

  return (
    <main className="flex flex-col justify-start p-5 items-center h-full">
      <ColorPreview onClick={() => console.log("DA")} color="#ff0000" />
      <div className="flex flex-row py-4 items-center justify-between w-full">
        <div className="tracking-wide font-bold text-neutral-500">#FF00FF</div>
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
      <div className="h-auto w-full">
        <SliderSelector colorRepresentation={colorRepresentation} />
      </div>
      <div className="h-auto w-full">
        <div className="flex flex-row items-center justify-between py-4">
          <div>
            <Dropdown
              className="!mx-0"
              onChangeValue={(event) => changeDropdownHandler(event)}
            >
              {testCollection.map((data: ITestCollection) => (
                <DropdownItem key={data.id} value={data.name}>
                  {data.name}
                </DropdownItem>
              ))}
            </Dropdown>
          </div>
          <div className="flex flex-row">
            <div>
              <Button icon={faKeyboard} title="Rename" onClick={copyHandler} />
            </div>
            <div>
              <Button icon={faTrash} title="Delete" onClick={copyHandler} />
            </div>
            <div>
              <Button icon={faPlus} title="Add" onClick={copyHandler} />
            </div>
          </div>
        </div>
        <Collection></Collection>
      </div>
    </main>
  );
};

export default Adjust;
