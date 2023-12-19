import styled from "styled-components";

export const StyledButton = styled.button<{
  showPopUp: boolean;
  popUpMessage?: string;
}>`
  position: relative;

  &&::before {
    content: ${(props) =>
      props.popUpMessage ? `"${props.popUpMessage}"` : "''"};
    position: absolute;
    display: ${(props) => (props.showPopUp ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    bottom: 43px;
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
    bottom: 38px;
    transform: rotate(45deg);
  }
`;
