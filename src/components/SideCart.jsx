import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";
import { SHOP_CONFIG } from "../config/shopConfig";


function SideCart({ open, onClose }) {
  const { cart, getSubtotal } = useContext(CartContext);
  
  const navigate = useNavigate();

  const subtotal = getSubtotal();

  const envioGratisMin = SHOP_CONFIG.FREE_SHIPPING_MIN;

  const restante = Math.max(envioGratisMin - subtotal, 0);
  const progress = Math.min((subtotal / envioGratisMin) * 100, 100);

  const handleGoToCart = () => {
    onClose();
    navigate("/cart");
  };


  return (
    <>
      <div
        className={`
          fixed inset-0 bg-black/40 z-40 transition-opacity
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose}
      />

      <div
        className={`
          fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-50 p-6 
          transition-transform duration-300 overflow-y-auto
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-2">Carrito</h2>

        <p className="text-gray-600 mb-4">
          {cart.length === 1
            ? "Agregaste 1 producto al carrito"
            : `Agregaste ${cart.length} productos al carrito`}
        </p>

        <div className="space-y-4 mb-4">
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.size}-${item.color}`}
              className="flex items-start gap-3"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 rounded"
              />

              <div className="flex-1">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-600">
                  {item.size} · {item.color}
                </p>
                <p className="text-sm text-gray-600">
                  Cant.: {item.quantity}
                </p>
              </div>

              <p className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <hr className="my-4 border-gray-300/60" />

        <div className="flex justify-between text-lg font-semibold">
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>

        <p className="text-sm text-gray-600 mt-1">
          {restante > 0 ? (
            <>
              ¡Te faltan{" "}
              <span className="font-bold text-rose-500">
                ${restante.toFixed(2)}
              </span>{" "}
              para tener{" "}
              <span className="font-semibold text-green-600">
                envío gratis
              </span>
              !
            </>
          ) : (
            <span className="text-green-600 font-medium">
              ¡Tenés envío gratis! 🎉
            </span>
          )}
        </p>

        <div className="w-full h-2 bg-gray-200 rounded-full mt-2 mb-6">
          <div
            className="h-full bg-green-500 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          onClick={handleGoToCart}
          className="
            w-full bg-rose-500 text-white py-3 rounded-lg
            text-center font-semibold
            hover:bg-rose-600 transition
          "
        >
          Ir al Carrito
        </button>

      </div>
    </>
  );
}

export default SideCart;
