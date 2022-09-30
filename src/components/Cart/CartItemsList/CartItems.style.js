import styled from "styled-components";
export const CartItemsTitle = styled.h3`
  font-weight: 600;
  font-size: 25px;
  line-height: 27px;
`;

export const CartItemsText = styled.p`
  margin-top: 16px;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
`;
export const CartItemsRemoveBtn = styled.button`
  margin-top: 15px;

  border: 1px solid ${(s) => s.theme.colors.accent};
  border-radius: 4px;
  background-color: white;
  color: ${(s) => s.theme.colors.accent}; ;
`;
export const CartItemsPrice = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
`;
export const CartItemsQuantity = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  margin: 0 10px;
`;
export const CartItemsQuantityBtn = styled.button`
  border: 1px solid black;
  background-color: white;
  width: 30px;
  height: 30px;
`;
