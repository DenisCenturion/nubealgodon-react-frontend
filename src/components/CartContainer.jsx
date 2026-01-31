import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItemRow from "./CartItemRow";
import CartSummary from "./CartSummary";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";


function CartPage() {
  const { cart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Tu carrito está vacío
        </h2>
        <p className="text-gray-600">
          Agregá productos para comenzar tu compra
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
    <h1 className="text-3xl font-extrabold text-purple-800 mb-1">
        Carrito de compras
    </h1>
    <p className="text-sm text-gray-500 mb-6">
        Estos son los productos que elegiste 💖
    </p>

      <div className="space-y-4">
        {cart.map((item) => (
          <CartItemRow key={`${item.id}-${item.size}-${item.color}`} item={item} />
        ))}
      </div>

      <CartSummary />

      <div className="mt-6 flex justify-between">
        <button
          onClick={clearCart}
          className="
            inline-flex items-center gap-2
            border border-red-300
            text-red-500
            px-4 py-2 rounded-lg
            hover:bg-red-50
            hover:border-red-400
            transition
          "
        >
          <TrashIcon className="w-4 h-4" />
          Vaciar carrito
        </button>

        <Link
          to="/checkout"
          className="
            inline-block
            bg-purple-600 hover:bg-purple-700
            text-white font-semibold
            px-6 py-3 rounded-lg
            shadow-md hover:shadow-lg
            transition
          "
        >
          Continuar compra
        </Link>

      </div>
    </div>
  );
}

export default CartPage;
