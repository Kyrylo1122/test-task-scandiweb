import styled from "styled-components";

export const GridContainer = styled.div`
  margin-bottom: 30px;
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  column-gap: 0.5rem;
`;

export const CartGridTitles = styled.h3`
  font-size: 25px;
`;

export const ClearCartBtn = styled.button`
  padding: 15px 20px;
  font-size: large;
  border-radius: 2px;
  border: 1px solid grey;
  background-color: white;
  margin-top: 15px;
`;

export const CartSummaryTitles = styled.h3`
  display: flex;
  font-size: 25px;
  font-weight: 500;
  label {
    margin-left: auto;
  }
`;
export const CartSummarySubTitle = styled.h3`
  margin-top: 10px;

  display: flex;
  font-size: 25px;
  font-weight: 300;
  label {
    margin-left: auto;
  }
`;

export const CartSummaryText = styled.p`
  font-style: italic;
  margin: 15px 0;
`;
