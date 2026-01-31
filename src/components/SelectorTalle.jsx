function SelectorTalle({ sizes, selected, onSelect, isAvailable }) {
  return (
    <div>
      <p className="font-semibold mb-2">Talle</p>
      <div className="flex gap-2 flex-wrap">
        {sizes.map(size => {
          const disabled = !isAvailable(size);

          return (
            <button
              key={size}
              disabled={disabled}
              onClick={() => !disabled && onSelect(size)}
              className={`px-3 py-1 rounded-lg border transition
                ${
                  disabled
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : selected === size
                    ? "bg-rose-500 text-white border-rose-500"
                    : "bg-white hover:bg-rose-100"
                }`}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default SelectorTalle;
