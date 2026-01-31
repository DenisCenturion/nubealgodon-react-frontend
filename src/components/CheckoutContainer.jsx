import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import CheckoutSuccess from "./CheckoutSuccess";
import { createOrder } from "../firebase/db";

function CheckoutContainer() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCreateOrder = async (buyerData) => {
    setLoading(true);

    const order = {
      buyer: buyerData,
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity
      })),
      total: totalPrice()
    };

    try {
      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch (err) {
      console.error("Error creando la orden", err);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return <CheckoutSuccess orderId={orderId} />;
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Finalizar compra</h2>
      <CheckoutForm onConfirm={handleCreateOrder} loading={loading} />
    </div>
  );
}

export default CheckoutContainer;
