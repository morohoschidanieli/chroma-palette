import { defaultButtonClassName } from "@constants/classes";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeDetector } from "@hooks";
import { useState } from "react";
import { StyledButton } from "./styles";

interface Button {
  icon?: IconProp;
  text?: string;
  title?: string;
  extraStyle?: React.CSSProperties;
  extraClassName?: string;
  clickPopUpMessage?: string;
  popUpShowTime?: number;
  onClick: () => void;
}

const Button = ({
  icon,
  text,
  title,
  extraStyle,
  extraClassName,
  onClick,
  clickPopUpMessage,
  popUpShowTime,
}: Button) => {
  const isDarkTheme = useThemeDetector();
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  const buttonClassName = isDarkTheme
    ? `text-neutral-300 ${extraClassName || ""}`
    : `text-slate-700 ${extraClassName || ""}`;

  const clickHandler = () => {
    onClick();

    if (clickPopUpMessage) {
      setShowPopUp(true);

      setTimeout(() => {
        setShowPopUp(false);
      }, popUpShowTime || 300);
    }
  };
  return (
    <StyledButton
      className={`${buttonClassName} ${defaultButtonClassName} hover:bg-neutral-600 hover:p-2 ${
        showPopUp ? " before:bg-neutral-600 after:bg-neutral-600" : ""
      } `}
      style={extraStyle || extraStyle}
      title={title && title}
      onClick={clickHandler}
      popUpMessage={showPopUp ? clickPopUpMessage : ""}
      showPopUp={showPopUp}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {text && text}
    </StyledButton>
  );
};

export default Button;
