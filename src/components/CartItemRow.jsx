import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { TrashIcon } from "@heroicons/react/24/outline";


function CartItemRow({ item }) {
  const { removeFromCart } = useContext(CartContext);

  const itemKey = `${item.id}-${item.size}-${item.color}`;

  return (
    <div className="flex gap-4 bg-white p-4 rounded-lg shadow-sm">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-20 h-20 object-cover rounded"
      />

      <div className="flex-1">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-600">
          Talle: {item.size} · Color: {item.color}
        </p>
        <p className="text-sm">Cantidad: {item.quantity}</p>
      </div>

      <div className="text-right">
        <p className="font-semibold">
          ${(item.price * item.quantity).toFixed(2)}
        </p>

        <button
          onClick={() => removeFromCart(itemKey)}
          className="
            flex items-center gap-2
            text-sm text-gray-400
            hover:text-red-600
            transition
          "
        >
          <TrashIcon className="w-4 h-4" />
          Eliminar
        </button>


      </div>
    </div>
  );
}

export default CartItemRow;
