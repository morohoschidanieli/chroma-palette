import styled from "styled-components";

interface SliderProps {
  min: number;
  max: number;
  value: number;
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

const StyledSlider = styled.input`
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: transparent;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
  }
`;

const Slider = ({ min, max, value, id, className, onChange }: SliderProps) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <StyledSlider
        className={`p-1 h-5 my-1 w-full rounded-3xl ${className}`}
        type="range"
        min={min}
        max={max}
        value={value}
        id={id}
        onChange={onChange}
        style={{ WebkitAppearance: "none" }}
      />
      <div className="w-14">{value}</div>
    </div>
  );
};

export default Slider;
