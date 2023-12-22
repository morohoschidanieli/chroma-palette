import { Slider } from "@components";
import { useState } from "react";
import { HueSlider, SaturationSlider } from "./styles";

interface HSLValues {
  hueValue: number;
  saturationValue: number;
  valueValue: number;
}
const HSLSlider = () => {
  const [HSLValues, setHSLValues] = useState<HSLValues>({
    hueValue: 0,
    saturationValue: 100,
    valueValue: 50,
  });

  console.log(HSLValues);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const value = e.target.value;

    setHSLValues((prevHSVValues: HSLValues) => ({
      ...prevHSVValues,
      [id]: value,
    }));
  };

  return (
    <div className="flex flex-col w-full">
      <HueSlider
        min={0}
        max={360}
        unit="°"
        value={HSLValues.hueValue}
        id="hueValue"
        onChange={(e) => onChangeHandler(e)}
      />
      <SaturationSlider
        hueValue={HSLValues.hueValue}
        saturationValue={HSLValues.saturationValue}
        valueValue={HSLValues.valueValue}
        min={0}
        max={100}
        unit="%"
        value={HSLValues.saturationValue}
        id="saturationValue"
        onChange={(e) => onChangeHandler(e)}
      />
      <Slider
        className="bg-yellow-500"
        min={0}
        max={100}
        unit="%"
        value={HSLValues.valueValue}
        id="valueValue"
        onChange={(e) => onChangeHandler(e)}
      />
    </div>
  );
};

export default HSLSlider;
