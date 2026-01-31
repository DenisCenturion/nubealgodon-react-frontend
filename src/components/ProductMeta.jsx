
function ProductMeta({ brand, stock, showStock }) {
  return (
    <div className="mt-4 text-sm text-gray-600 space-y-1">
      {showStock && (
        <p>
          <span className="font-semibold">Stock disponible:</span> {stock}
        </p>
      )}

      <p>
        <span className="font-semibold">Marca:</span> {brand}
      </p>
    </div>
  );
}

export default ProductMeta;
