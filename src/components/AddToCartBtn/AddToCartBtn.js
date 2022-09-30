import { AddToCart } from "./AddToCartBtn.style";

export default function AddToCartBtn({ onSubmit }) {
  return (
    <AddToCart type="button" onClick={onSubmit}>
      ADD TO CART
    </AddToCart>
  );
}
