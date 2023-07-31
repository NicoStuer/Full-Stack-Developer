import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const substractOfCart = (product) => {
    //chequear si el producto esta en el carrito
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      if (newCart[productInCartIndex].quantity > 1) {
        newCart[productInCartIndex].quantity -= 1;
      } else {
        newCart.splice(productInCartIndex, 1);
      }
      return setCart(newCart);
    }
  };

  const addToCart = (product) => {
    //chequear si el producto esta en el carrito
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const totalSum = () => {
    const sum = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    return sum.toFixed(2);
  };

  const getQuantityForProduct = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    return productInCart ? productInCart.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
        substractOfCart,
        getTotalQuantity,
        totalSum,
        getQuantityForProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
