import styled from "styled-components";
import { Link } from "react-router-dom";

export const Return = styled(Link)`
  display: block;
  margin-bottom: 45px;

  font-weight: 400;
  font-size: 20px;
  line-height: 18px;
  color: inherit;

  :hover,
  :focus {
    color: ${(p) => p.theme.colors.accent};
  }
`;
