import styled from "styled-components";

interface IStyledColorPreview {
  color: string;
}

export const StyledColorPreview = styled.div<IStyledColorPreview>`
  background-color: ${(props) => props.color};
  color: white;
  font-weight: bold;
  transition: all 0.4s;
`;
