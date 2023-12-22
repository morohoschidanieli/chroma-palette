import { Slider } from "@components";
import { useState } from "react";

interface CMYKValues {
  cyanValue: number;
  magentaValue: number;
  yellowValue: number;
  blackValue: number;
}

const CMYKSlider = () => {
  const [cmykValues, setCmykValues] = useState<CMYKValues>({
    cyanValue: 0,
    magentaValue: 0,
    yellowValue: 0,
    blackValue: 0,
  });

  console.log(cmykValues);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const value = e.target.value;

    setCmykValues((prevCMYKValues: CMYKValues) => ({
      ...prevCMYKValues,
      [id]: value,
    }));
  };

  return (
    <div className="flex flex-col w-full">
      <Slider
        min={0}
        max={100}
        unit="%"
        color="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,255,255,1) 100%);"
        value={cmykValues.cyanValue}
        id="cyanValue"
        onChange={(e) => onChangeHandler(e)}
      />
      <Slider
        min={0}
        max={100}
        unit="%"
        color="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,0,255,1) 100%);"
        value={cmykValues.magentaValue}
        id="magentaValue"
        onChange={(e) => onChangeHandler(e)}
      />
      <Slider
        min={0}
        max={100}
        unit="%"
        color="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,0,1) 100%);"
        value={cmykValues.yellowValue}
        id="yellowValue"
        onChange={(e) => onChangeHandler(e)}
      />
      <Slider
        min={0}
        max={100}
        unit="%"
        color="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)"
        value={cmykValues.blackValue}
        id="blackValue"
        onChange={(e) => onChangeHandler(e)}
      />
    </div>
  );
};

export default CMYKSlider;
