import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationLink = styled(NavLink)`
  padding: ${(p) => p.theme.space[4]}px;
  color: inherit;

  &.active {
    color: ${(p) => p.theme.colors.accent};
    border-bottom: 1px solid ${(p) => p.theme.colors.accent};
  }
`;
