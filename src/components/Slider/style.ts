import styled from "styled-components";
import transparentBackground from "../../assets/transparent-background.jpg";

interface IStyledSlider {
  color?: string;
}

export const StyledSlider = styled.input<IStyledSlider>`
  background: ${(props) =>
    `${
      props.color ? `${props.color}, ` : "transparent"
    } url(${transparentBackground}) center/cover `};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.9),
      rgba(224, 224, 224, 0.9)
    );
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    color: #fff;
    border: 1px solid #ccc;
    width: 18px;
    height: 18px;
    transition: background 0.3s ease, box-shadow 0.3s ease;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background: linear-gradient(180deg, #e0e0e0, #ffffff);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.4), 0 0 10px rgba(0, 0, 0, 0.2);
    }
  }
`;
