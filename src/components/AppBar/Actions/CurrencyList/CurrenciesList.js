import { Box } from "../../../Box";
import { useGetCurrencies } from "../../../Api/Api";
import { useDispatch } from "react-redux";
import {
  handleChangeCurrency,
  handleChangeCurrencySymbol,
} from "../../../Redux/CurrencySlice";
import { CurrencyItem, ModalCurrencyList } from "./CurrencyList.style";

import { equalCurrency } from "../../../Redux/CartSlice";

export default function CurrenciesList({ onClose }) {
  const dispatch = useDispatch();
  const { data } = useGetCurrencies();

  return (
    <ModalCurrencyList>
      <Box as="ul" display="flex" flexDirection="column">
        {data?.currencies?.map(({ symbol, label }) => (
          <CurrencyItem
            key={label}
            onClick={() => {
              dispatch(handleChangeCurrency(label));
              dispatch(handleChangeCurrencySymbol(symbol));
              dispatch(equalCurrency({ symbol }));
              onClose();
            }}
          >
            <span>{symbol}</span>
            <span>{label}</span>
          </CurrencyItem>
        ))}
      </Box>
    </ModalCurrencyList>
  );
}
