import { MdShoppingCart } from "react-icons/md";
import { useCart } from "../../../context/useCart";

function CartButton({ product }) {
  const { addToCart, substractOfCart, getQuantityForProduct } = useCart();
  if (!product) {
    return null;
  }
  return (
    <div className="flex items-center">
      <button
        className="h-8 w-8 bg-red-400 text-white font-bold rounded-l"
        onClick={() => substractOfCart(product)}
      >
        -
      </button>
      <div className="flex items-center relative">
        <MdShoppingCart className="h-14 w-14 text-black relative" />
        <span className="absolute text-base font-semibold top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-400 text-white rounded-full w-6 h-6 flex items-center justify-center">
          {getQuantityForProduct(product)}
        </span>
      </div>
      <button
        className="h-8 w-8 bg-green-400 text-white font-bold rounded-r"
        onClick={() => addToCart(product)}
      >
        +
      </button>
    </div>
  );
}

export default CartButton;
