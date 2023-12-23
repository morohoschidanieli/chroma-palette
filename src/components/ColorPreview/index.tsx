import { useState } from "react";
import { StyledColorPreview } from "./styles";
import { darkenHexColor } from "@utils";

interface IColorPreview {
  color: string;
  onClick?: () => void;
}

const ColorPreview = ({ color, onClick }: IColorPreview) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const clickHandler = () => {
    onClick!();
    setIsClicked(true);

    setTimeout(() => setIsClicked(false), 1000);
  };
  return (
    <StyledColorPreview
      onClick={onClick ? clickHandler : undefined}
      color={isClicked ? darkenHexColor(color, 0.4) : color}
      className="flex justify-center items-center cursor-pointer h-24 w-full rounded-md "
    >
      {isClicked ? "Copied!" : ""}
    </StyledColorPreview>
  );
};

export default ColorPreview;
