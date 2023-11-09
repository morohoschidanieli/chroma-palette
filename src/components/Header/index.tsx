import { NavigationButton } from "@components";
import { defaultHeaderClassName } from "@constants/classes";
import {
  faCircleHalfStroke,
  faEyeDropper,
  faMoon,
  faSliders,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeDetector } from "@hooks";
import { handlePickClick } from "@utils";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isDarkTheme = useThemeDetector();
  const navigate = useNavigate();

  const handlerTheme = () => {
    console.log("on theme handler");
  };

  const handlerPickColor = async () => {
    const result = await handlePickClick();
    console.log(result);
    navigate("/adjust");
  };

  return (
    <header
      className={`${defaultHeaderClassName} ${
        isDarkTheme
          ? "bg-neutral-700 text-neutral-500"
          : "bg-white text-gray-700"
      }`}
    >
      <button
        className="cursor-pointer"
        title="Change theme"
        onClick={handlerTheme}
      >
        <FontAwesomeIcon
          className={isDarkTheme ? "text-yellow-300" : "text-slate-700"}
          icon={isDarkTheme ? faSun : faMoon}
        />
      </button>
      <div className="flex">
        <NavigationButton
          icon={faEyeDropper}
          title="Color picker"
          onClick={handlerPickColor}
        />
        <NavigationButton icon={faSliders} title="Slider" to="/adjust" />
        <NavigationButton
          icon={faCircleHalfStroke}
          title="Contrast"
          to="/contrast"
        />
      </div>
    </header>
  );
};

export default Header;
