import { Slider } from "@components";
import { useState } from "react";

interface RGBValues {
  redValue: number;
  greenValue: number;
  blueValue: number;
}

const RGBSlider = () => {
  const [rgbValues, setRgbValues] = useState<RGBValues>({
    redValue: 0,
    greenValue: 0,
    blueValue: 0,
  });

  console.log(rgbValues);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const value = e.target.value;

    setRgbValues((prevRGBValues: RGBValues) => ({
      ...prevRGBValues,
      [id]: value,
    }));
  };

  return (
    <div className="flex flex-col w-full">
      <Slider
        className="bg-gradient-to-r from-black to-red-500"
        min={0}
        max={255}
        value={rgbValues.redValue}
        id="redValue"
        onChange={(e) => onChangeHandler(e)}
      />
      <Slider
        className="bg-gradient-to-r from-black to-green-500"
        min={0}
        max={255}
        value={rgbValues.greenValue}
        id="greenValue"
        onChange={(e) => onChangeHandler(e)}
      />
      <Slider
        className="bg-gradient-to-r from-black to-blue-500"
        min={0}
        max={255}
        value={rgbValues.blueValue}
        id="blueValue"
        onChange={(e) => onChangeHandler(e)}
      />
    </div>
  );
};

export default RGBSlider;
