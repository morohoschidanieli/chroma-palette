import { Slider } from "@components";
import styled from "styled-components";

interface ISaturationSlider {
  hueValue: number;
  saturationValue: number;
  valueValue: number;
}

export const HueSlider = styled(Slider)`
  background: linear-gradient(
    to right,
    hsl(0, 100%, 50%),
    hsl(60, 100%, 50%),
    hsl(120, 100%, 50%),
    hsl(180, 100%, 50%),
    hsl(240, 100%, 50%),
    hsl(300, 100%, 50%),
    hsl(360, 100%, 50%)
  );
`;

export const SaturationSlider = styled(Slider)<ISaturationSlider>`
  background: ${(props) =>
    props
      ? ` linear-gradient(90deg, rgba(255,255,255,0) 0%, hsl(${props.hueValue}, ${props.saturationValue}%, ${props.valueValue}%) 100%) `
      : ""};
`;
