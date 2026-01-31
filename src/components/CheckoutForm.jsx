import { useState } from "react";

function CheckoutForm({ onConfirm, loading }) {
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email) {
      alert("Completá nombre y email");
      return;
    }

    onConfirm(buyer);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={buyer.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={buyer.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="phone"
        placeholder="Teléfono"
        value={buyer.phone}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-rose-500 text-white py-2 rounded"
      >
        {loading ? "Procesando..." : "Confirmar compra"}
      </button>
    </form>
  );
}

export default CheckoutForm;
