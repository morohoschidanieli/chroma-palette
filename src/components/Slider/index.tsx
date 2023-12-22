import { StyledSlider } from "./styles";

interface SliderProps {
  min: number;
  max: number;
  value: number;
  id: string;
  step?: number;
  unit?: string;
  color?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

const Slider = ({
  min,
  max,
  value,
  id,
  step,
  className,
  unit,
  color,
  onChange,
}: SliderProps) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <StyledSlider
        className={`p-1 h-4 my-2 w-full rounded-3xl ${className}`}
        color={color}
        type="range"
        min={min}
        max={max}
        step={step || 1}
        value={value}
        id={id}
        onChange={onChange}
        style={{
          WebkitAppearance: "none",
        }}
      />
      <div className="w-14">
        {value}
        {unit ? unit : ""}
      </div>
    </div>
  );
};

export default Slider;
