import styled from "styled-components";

export const ModalCurrencyList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 1;
`;
export const CurrencyItem = styled.li`
  width: 100%;

  padding: 8px 20px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.white};
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.6;
  text-align: left;

  :hover,
  :focus {
    background-color: #eeeeee;
  }
`;
