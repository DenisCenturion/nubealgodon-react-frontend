function CartWidget() {
  const itemsInCart = 0;

  return (
    <button className="relative inline-flex items-center justify-center rounded-full bg-white/90 px-3 py-2 shadow-sm hover:shadow-md hover:bg-rose-100 transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 text-purple-800"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="20" r="1.4" />
        <circle cx="18" cy="20" r="1.4" />
        <path d="M3 4h2l2.2 11h10.5l1.3-7.5H7.1" />
      </svg>

      <span className="ml-2 text-sm font-medium text-purple-900 hidden sm:inline">
        Carrito
      </span>

      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white shadow-md">
        {itemsInCart}
      </span>
    </button>
  );
}

export default CartWidget;