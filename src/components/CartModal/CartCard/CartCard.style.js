import styled from "styled-components";

export const CartCardTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
`;
export const CartCardText = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
`;

export const CartCardPrice = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
  label {
    font-weight: 400;
  }
`;
export const CartCardTotalPrice = styled.p`
  margin-top: auto;
  font-weight: 300;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 160%;
  label {
    font-weight: 400;
  }
`;
export const CartCardQuantityBtn = styled.button`
  border: 1px solid black;
  background-color: white;
  width: 24px;
  height: 24px;
`;
export const CartCardRemoveBtn = styled.button`
  margin-top: 15px;

  border: 1px solid ${(s) => s.theme.colors.accent};
  border-radius: 4px;
  background-color: white;
  color: ${(s) => s.theme.colors.accent}; ;
`;
