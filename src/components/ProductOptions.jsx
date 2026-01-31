import SelectorTalle from "./SelectorTalle";
import SelectorColor from "./SelectorColor";

function ProductOptions({
  hasVariants,
  sizes,
  colors,
  selectedSize,
  selectedColor,
  onSelectSize,
  onSelectColor,
  isSizeAvailable,
  isColorAvailable,
  availableStock,
}) {
  if (!hasVariants) return null;

  return (
    <div className="space-y-4">

      {sizes.length > 0 && (
        <SelectorTalle
          sizes={sizes}
          selected={selectedSize}
          onSelect={onSelectSize}
          isAvailable={isSizeAvailable}
        />
      )}

      {colors.length > 0 && (
        <SelectorColor
          colors={colors}
          selected={selectedColor}
          onSelect={onSelectColor}
          isAvailable={isColorAvailable}
        />
      )}

      {(selectedSize || selectedColor) && (
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Stock disponible:</span>{" "}
          <span
            className={
              availableStock === 0
                ? "text-red-600 font-semibold"
                : ""
            }
          >
            {availableStock}
          </span>
        </p>
      )}
    </div>
  );
}

export default ProductOptions;
