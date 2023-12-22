import { CMYKSlider, HSLSlider, RGBSlider } from "@components";
import { TColorRepresentation } from "pages/adjust";

interface IComponent {
  colorRepresentation: TColorRepresentation;
}

const SliderSelector = ({ colorRepresentation }: IComponent) => {
  switch (colorRepresentation) {
    case "rgb":
      return <RGBSlider />;
    case "cmyk":
      return <CMYKSlider />;
    case "hsl":
      return <HSLSlider />;
    default:
      return <RGBSlider />;
  }
};

export default SliderSelector;
