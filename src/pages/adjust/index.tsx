import {
  Button,
  SliderSelector,
  Dropdown,
  DropdownItem,
  ColorPreview,
  CollectionItem,
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
    console.log("Copy Handler");
  };

  const renameHandler = () => {
    console.log("rename Handler");
  };

  const deleteHandler = () => {
    console.log("delete Handler");
  };

  const addHandler = () => {
    console.log("add Handler");
  };

  const changeDropdownHandler = (colorRepresentation: TColorRepresentation) => {
    setColorRepresentation(colorRepresentation);
  };

  return (
    <main className="flex flex-col justify-start p-5 items-center h-full">
      <ColorPreview
        onClick={() => console.log("On Press Event")}
        color="#ff0000"
      />
      <div className="flex flex-row py-4 items-center justify-between w-full">
        {/* Current color container */}
        <div className="tracking-wide font-bold text-neutral-500">#FF00FF</div>
        {/* Color representation container */}
        <div className="flex flex-row justify-center items-center">
          {/* Color representation dropdown */}
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
      {/* Slider for selected color representation */}
      <div className="h-auto w-full">
        <SliderSelector colorRepresentation={colorRepresentation} />
      </div>
      {/* Collection menu for collection */}
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
              <Button
                icon={faKeyboard}
                title="Rename"
                onClick={renameHandler}
              />
            </div>
            <div>
              <Button icon={faTrash} title="Delete" onClick={deleteHandler} />
            </div>
            <div>
              <Button icon={faPlus} title="Add" onClick={addHandler} />
            </div>
          </div>
        </div>
        {/* Collection items */}
        <Collection>
          <CollectionItem color="#00FF00" selected={true} />
          <CollectionItem color="#FF0000" />
          <CollectionItem color="#FFFF00" />
          <CollectionItem color="#FFFFF0" />
          <CollectionItem color="#00FF00" />
          <CollectionItem color="#FF0000" />
          <CollectionItem color="#FFFF00" />
          <CollectionItem color="#FFFFF0" />
          <CollectionItem color="#00FF00" />
          <CollectionItem color="#FF0000" />
          <CollectionItem color="#FFFF00" />
          <CollectionItem color="#FFFFF0" />
          <CollectionItem color="#FFFF00" />
        </Collection>
      </div>
    </main>
  );
};

export default Adjust;
