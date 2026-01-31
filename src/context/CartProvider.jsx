import { useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // 🔑 clave única por producto + variante
  const buildKey = (item) =>
    `${item.id}-${item.size}-${item.color}`;

  // ➕ Agregar al carrito
    const addToCart = (item) => {
      setCart((prev) => {
        const key = buildKey(item); 
        const existing = prev.find(
          (i) => buildKey(i) === key
        );  
        if (existing) {
          return prev.map((i) =>
            buildKey(i) === key
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          );
        }   
        return [...prev, item];
      });
    };

    const removeFromCart = (itemKey) => {
    setCart(prev =>
        prev.filter(
          item => `${item.id}-${item.size}-${item.color}` !== itemKey
        )
      );
    };


  const clearCart = () => setCart([]);

  const getTotalQuantity = () =>
    cart.reduce((acc, item) => acc + item.quantity, 0);

  const getSubtotal = () =>
    cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  
  const totalPrice = () => {
    return cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  };


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalQuantity,
        getSubtotal,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
