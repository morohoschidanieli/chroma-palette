import { Slider } from "@components";
import { useState } from "react";

interface RGBValues {
  redValue: number;
  greenValue: number;
  blueValue: number;
  alphaValue: number;
}

const RGBSlider = () => {
  const [rgbValues, setRgbValues] = useState<RGBValues>({
    redValue: 0,
    greenValue: 0,
    blueValue: 0,
    alphaValue: 0,
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
        min={0}
        max={255}
        color="linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 100%);"
        value={rgbValues.redValue}
        id="redValue"
        onChange={(e) => onChangeHandler(e)}
      />
      <Slider
        min={0}
        max={255}
        color="linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,255,0,1) 100%);"
        value={rgbValues.greenValue}
        id="greenValue"
        onChange={(e) => onChangeHandler(e)}
      />
      <Slider
        min={0}
        max={255}
        color="linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,255,1) 100%);"
        value={rgbValues.blueValue}
        id="blueValue"
        onChange={(e) => onChangeHandler(e)}
      />
      <Slider
        min={0}
        max={1}
        step={0.01}
        unit="%"
        color="linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)"
        value={rgbValues.alphaValue}
        id="alphaValue"
        onChange={(e) => onChangeHandler(e)}
      />
    </div>
  );
};

export default RGBSlider;
