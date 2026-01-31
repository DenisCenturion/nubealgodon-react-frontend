function MobileFilterDrawer({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40"
      onClick={onClose}
    >
      <div
        className="absolute right-0 top-0 h-full w-80 bg-white p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="mb-4 text-sm underline"
        >
          Cerrar
        </button>

        {children}
      </div>
    </div>
  );
}

export default MobileFilterDrawer;
