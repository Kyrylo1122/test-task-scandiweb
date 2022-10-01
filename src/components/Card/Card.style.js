import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ProductCard = styled.li`
  width: calc((100% / 3) - 40px);
  padding: 16px;
  margin: 20px;
  transform: scale(1);
  transition: transform 300ms ease-in-out;
  :hover,
  :focus {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: scale(1.1);
  }
`;
export const CardText = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 1.6;
`;

export const CardPrice = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.6;
`;
export const TextOutOfStock = styled.p`
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  position: absolute;
  color: ${(p) => p.theme.colors.grey};
  font-weight: 400;
  font-size: 24px;
  line-height: 1.6;
  text-align: center;
  width: 100%;
`;

export const CardLink = styled(Link)`
  color: inherit;
`;
