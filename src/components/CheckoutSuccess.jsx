function CheckoutSuccess({ orderId }) {
  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        ¡Gracias por tu compra! 🎉
      </h2>

      <p className="mb-2">
        Tu número de orden es:
      </p>

      <p className="font-mono text-lg bg-gray-100 p-2 rounded mb-6">
        {orderId}
      </p>

      <p>
        Te contactaremos por email para coordinar el envío.
      </p>
    </div>
  );
}

export default CheckoutSuccess;
