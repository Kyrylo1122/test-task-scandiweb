import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const NavigationItem = styled.li`
  margin: ${(p) => p.theme.space[3]}px;
`;
export const NavigationLink = styled(NavLink)`
  padding-bottom: 30px;
  padding-top: 28px;

  display: block;

  font-size: 16px;
  line-height: 1.2;
  color: inherit;
  text-transform: capitalize;
  &.active {
    color: ${(p) => p.theme.colors.accent};
    font-weight: 600;
    border-bottom: 1px solid ${(p) => p.theme.colors.accent};
  }
`;
