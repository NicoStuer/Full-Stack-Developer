import "./Cart.css";

import { useId } from "react";
import { MdShoppingCart } from "react-icons/md";
import { useCart } from "../../../context/useCart";

function truncateTitle(title) {
  const words = title.split(" ");
  if (words.length > 3) {
    return words.slice(0, 3).join(" ");
  }
  return title;
}

function CartItem({
  image,
  price,
  title,
  quantity,
  addToCart,
  substractOfCart,
}) {
  const truncatedTitle = truncateTitle(title);
  const totalValue = (price * quantity).toFixed(2);
  return (
    <li className="flex items-start mb-2">
      <div className="flex items-center">
        <img
          src={image}
          alt={title}
          className="w-20 h-20 object-contain mr-4"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <strong className="text-xl">{truncatedTitle}</strong>
        <footer className="flex items-center justify-end mt-5">
          <div className="flex items-center">
            <button
              onClick={substractOfCart}
              className="bg-red-600 w-6 h-6 rounded text-base font-bold flex items-center justify-center mx-0"
            >
              -
            </button>
            <small className="mx-1 text-m font-bold">Qty: {quantity}</small>
            <button
              onClick={addToCart}
              className="bg-blue-500 w-6 h-6 rounded text-base font-bold flex items-center justify-center mx-0"
            >
              +
            </button>
          </div>

          <div className="ml-auto font-bold text-lg">U$S {totalValue}</div>
        </footer>
      </div>
    </li>
  );
}

function Cart() {
  const cartCheckboxId = useId();
  const {
    cart,
    clearCart,
    addToCart,
    getTotalQuantity,
    totalSum,
    substractOfCart,
  } = useCart();

  return (
    <>
      <label className="cart-button relative" htmlFor={cartCheckboxId}>
        <MdShoppingCart className="text-gray-200 text-custom-size font-extrabold justify-center text-center" />
        <span className="absolute text-base font-semibold top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-amber-400 text-white rounded-full w-6 h-6 flex items-center justify-center">
          {getTotalQuantity()}
        </span>
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          <h1 className="text-3xl font-bold border-b-4 border-black mb-4">
            Shopping Cart
          </h1>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              substractOfCart={() => substractOfCart(product)}
              {...product}
            />
          ))}
        </ul>
        <div className="flex flex-col  ">
          <div className="flex  items-center justify-between">
            <button
              onClick={clearCart}
              className="bg-red-600 rounded px-2 font-bold"
            >
              Clear Cart
            </button>
            <div className="mt-2 font-bold">Total U$S {totalSum()}</div>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-green-500 text-xl rounded  font-bold px-2 mt-6">
              Buy Cart
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Cart;
