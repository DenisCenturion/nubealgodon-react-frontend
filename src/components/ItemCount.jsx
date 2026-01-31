import { useEffect, useState } from "react";

function ItemCount({
  stock,
  initial = 1,
  onAdd,
  disabled = false,
  value,
  onChange,
  hintText
}) {
  const [count, setCount] = useState(value ?? initial);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (typeof value === "number") setCount(value);
  }, [value]);

  const setBoth = (newValue) => {
    setCount(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div className="mt-6 flex flex-col gap-4 items-center">

<div className="flex items-center gap-4">
    <button
      onClick={() => count > 1 && setBoth(count - 1)}
      disabled={disabled || count <= 1}
      className={`
        w-10 h-10 flex items-center justify-center
        rounded-full border text-lg font-semibold
        transition
        ${
          disabled || count <= 1
            ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
            : "bg-white text-gray-700 border-gray-300 hover:bg-rose-100 hover:border-rose-300"
        }
      `}
    >
      −
    </button>

    <span className="min-w-[32px] text-center text-xl font-semibold text-gray-800">
      {count}
    </span>

    <button
      onClick={() => count < stock && setBoth(count + 1)}
      disabled={disabled || count >= stock}
      className={`
        w-10 h-10 flex items-center justify-center
        rounded-full border text-lg font-semibold
        transition
        ${
          disabled || count >= stock
            ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
            : "bg-white text-gray-700 border-gray-300 hover:bg-rose-100 hover:border-rose-300"
        }
      `}
    >
      +
    </button>
  </div>

  {stock > 0 && stock <= 3 && (
    <p className="text-xs text-rose-600 font-medium">
      Quedan solo {stock} unidades
    </p>
  )}


    <div
      className="relative"
      onMouseEnter={() => disabled && setShowHint(true)}
      onMouseLeave={() => setShowHint(false)}
    >
      {showHint && hintText && (
        <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg shadow-lg">
          {hintText}
        </div>
      )}

      <button
        onClick={() => onAdd(count)}
        disabled={disabled}
        className={`py-3 rounded-lg w-64 font-semibold
          ${
            disabled
              ? "bg-gray-300 text-gray-500"
              : "bg-rose-400 hover:bg-rose-500 text-white"
          }`}
      >
        Agregar al Carrito
      </button>
    </div>
  </div>
  );
}

export default ItemCount;
