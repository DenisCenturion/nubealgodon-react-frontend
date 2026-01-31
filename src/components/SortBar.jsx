function SortBar({ value, onChange }) {
  return (
    <div className="flex justify-end mb-4">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded-lg px-3 py-2 text-sm"
      >
        <option value="price-asc">Precio: menor a mayor</option>
        <option value="price-desc">Precio: mayor a menor</option>
        <option value="rating">Mejor calificados</option>
      </select>
    </div>
  );
}

export default SortBar;
