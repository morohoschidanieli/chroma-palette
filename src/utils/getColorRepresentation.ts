import { CMYKSlider, HSLSlider, HSVSlider, RGBSlider } from "@components";
import { TColorRepresention } from "pages/adjust";

const getColorRepresentation = (colorRepresentation: TColorRepresention) => {
  switch (colorRepresentation) {
    case "rgb":
      return RGBSlider;
    case "cmyk":
      return CMYKSlider;
    case "hsv":
      return HSVSlider;
    case "hsl":
      return HSLSlider;
    default:
      return RGBSlider;
  }
};

export default getColorRepresentation;
