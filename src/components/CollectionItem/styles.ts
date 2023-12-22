import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { darkenHexColor } from "@utils";
import styled from "styled-components";

interface IStyledColorCollectionItem {
  color: string;
  selected?: boolean;
}

export const StyledColorCollectionItem = styled.div<IStyledColorCollectionItem>`
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  box-shadow: ${(props) =>
    props.selected ? " 0px 0px 0px 3px rgba(82,82,82,1)" : ""};
  border: ${(props) =>
    props.selected ? `2px solid #ffffff` : `2px solid transparent`};
  background-color: ${(props) => (props.color ? props.color : "")};

  &:hover {
    background-color: ${(props) => darkenHexColor(props.color, 0.4)};
    box-shadow: 0px 0px 0px 3px rgba(82, 82, 82, 1);
    border: 2px solid white;

    &::before {
      content: "${(props) => String(`${props.color}`)}";
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 50px;
      left: -17px;
      color: red;
      background-color: #525252;
      letter-spacing: 2px;
      font-weight: 400;
      color: white;
      height: auto;
      width: auto;
      padding: 4px 6px;
      font-size: 12px;
      border-radius: 4px;
    }

    &&::after {
      content: "";
      position: absolute;
      height: 10px;
      width: 10px;
      bottom: 45px;
      left: 14px;
      transform: rotate(45deg);
      background-color: #525252;
    }
  }
`;

export const StyledAddCollectionItem = styled.div`
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 0px 3px rgba(82, 82, 82, 1);
    border: 2px solid #ffffff;
    border: 2px solid white;
  }
`;
