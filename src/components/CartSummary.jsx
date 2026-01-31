import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartSummary() {
  const { getSubtotal, getTotalQuantity } = useContext(CartContext);

  return (
    <div className="mt-8 bg-rose-100 p-6 rounded-lg">
      <div className="flex justify-between mb-2">
        <span>Productos</span>
        <span>{getTotalQuantity()}</span>
      </div>

      <div className="flex justify-between text-lg font-semibold">
        <span>Subtotal</span>
        <span>${getSubtotal().toFixed(2)}</span>
      </div>
    </div>
  );
}

export default CartSummary;
