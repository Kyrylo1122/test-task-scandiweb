import styled from "styled-components";

export const ImageItem = styled.li`
  margin: 20px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 300ms ease-in-out;

  :hover,
  :focus {
    transform: scale(1.5);
  }
`;
