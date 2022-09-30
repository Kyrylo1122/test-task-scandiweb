import styled from "styled-components";
import { Link } from "react-router-dom";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  cursor: pointer;
`;
export const CardModal = styled.div`
  max-height: 650px;
  padding: 32px 16px;
  position: absolute;
  width: 400px;
  background-color: white;
  right: 5%;
  z-index: 10;
  cursor: default;
  overflow: scroll;
`;

export const ShoppingCartTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  display: flex;

  span {
    font-weight: 500px;
    margin-left: auto;
  }
`;
export const ShoppingCartTotalTitle = styled.h2`
  margin-top: 40px;

  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  display: flex;

  span {
    font-weight: 500px;
    margin-left: auto;
  }
`;

export const ShoppingCartText = styled.p`
  margin-top: 15px;
  font-weight: 300;
  font-size: 14px;
  line-height: 110%;
  font-style: italic;
`;
export const CartLinkBtnFirst = styled(Link)`
  padding: 13px 36px;
  margin-right: 12px;

  font-weight: 600;
  font-size: 14px;
  display: block;
  border: 1px solid black;
  color: black;
  background-color: white;
`;

export const CartLinkBtnSecond = styled(Link)`
  padding: 13px 36px;

  font-weight: 600;
  font-size: 14px;
  display: block;
  border: 1px solid transparent;
  color: white;
  background-color: ${(s) => s.theme.colors.accent};

  text-align: center;
`;
