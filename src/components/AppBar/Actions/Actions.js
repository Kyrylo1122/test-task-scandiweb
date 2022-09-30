import { Box } from "../../Box";
import { BsCart2 } from "react-icons/bs";
import { ActionBtn } from "./Actions.style";
import CurrenciesList from "./CurrencyList/CurrenciesList";
import CartModal from "../../CartModal/CartModal";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Actions({ symbol }) {
  const cart = useSelector((state) => state.cart);
  const [isCurrenciesListOpen, setIsCurrenciesListOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleClose = () => setIsCartOpen(false);
  const handleShow = () => setIsCartOpen(true);

  const [currency, setCurrency] = useState("");
  useEffect(() => {
    setCurrency(symbol);
  }, [symbol]);

  return (
    <Box display="flex">
      <Box className="dropdown" position="relative">
        <ActionBtn
          type="button"
          onClick={() => {
            setIsCurrenciesListOpen((state) => !state);
            setIsCartOpen(false);
          }}
        >
          {currency}
        </ActionBtn>
        {isCurrenciesListOpen && (
          <CurrenciesList
            className="dropdown-menu"
            onClose={() => setIsCurrenciesListOpen(false)}
          />
        )}
      </Box>

      <Box className="dropdown" position="relative">
        <ActionBtn
          type="button"
          onClick={() => {
            handleShow();
            setIsCurrenciesListOpen(false);
          }}
        >
          {cart.cartTotalQuantity > 0 && (
            <Box
              backgroundColor="accent"
              color="white"
              borderRadius="50%"
              width="20px"
              height="20px"
              fontSize="14px"
              position="absolute"
              top="0"
              right="10%"
            >
              {cart.cartTotalQuantity}
            </Box>
          )}

          <BsCart2 />
        </ActionBtn>
        {isCartOpen && <CartModal closeCart={handleClose} />}
      </Box>
    </Box>
  );
}
