import { defaultNavigationButtonClassName } from "@constants/classes";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeDetector } from "@hooks";
import { NavLink } from "react-router-dom";

interface NavigationButtonProps {
  icon: IconProp;
  to?: string;
  title?: string;
  extraStyle?: React.CSSProperties;
  extraClassName?: string;
  onClick?: () => void;
}

const NavigationButton = ({
  icon,
  title,
  to,
  extraStyle,
  extraClassName,
  onClick,
}: NavigationButtonProps) => {
  const isDarkTheme = useThemeDetector();

  const buttonClassName = isDarkTheme
    ? `text-neutral-300 ${extraClassName || ""}`
    : `text-slate-700 ${extraClassName || ""}`;

  const buttonActiveClassName = isDarkTheme
    ? `bg-neutral-600 p-2 rounded`
    : `bg-slate-200 p-2 rounded`;

  return (
    <>
      {to ? (
        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive
              ? buttonActiveClassName
              : "flex justify-center items-center p-2"
          }
        >
          <button
            style={extraStyle || undefined}
            className={buttonClassName + defaultNavigationButtonClassName}
            title={title || undefined}
          >
            <FontAwesomeIcon icon={icon} />
          </button>
        </NavLink>
      ) : (
        <button
          style={extraStyle || undefined}
          className={buttonClassName + defaultNavigationButtonClassName}
          onClick={onClick || undefined}
        >
          <FontAwesomeIcon
            className="flex justify-center items-center p-2"
            icon={icon}
          />
        </button>
      )}
    </>
  );
};

export default NavigationButton;
