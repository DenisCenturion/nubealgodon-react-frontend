function FilterPanel({ priceMax, onPriceChange }) {
  return (
    <div className="w-64 bg-white p-4 rounded-xl shadow-sm">
      <h3 className="font-semibold text-lg mb-4">Filtros</h3>

      <div>
        <p className="text-sm font-medium mb-2">Precio máximo</p>
        <input
          type="range"
          min="0"
          max="200000"
          step="10000"
          value={priceMax}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full"
        />
        <p className="text-sm mt-1">$ {priceMax}</p>
      </div>
    </div>
  );
}

export default FilterPanel;
