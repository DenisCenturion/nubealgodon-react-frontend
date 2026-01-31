import ItemCount from "./ItemCount";

function ProductPurchase({
  stock,
  quantity,
  onQuantityChange,
  canAdd,
  onAddToCart,
  hintText,
}) {
  return (
    <div className="mt-6">
      <ItemCount
        stock={stock}
        value={quantity}
        onChange={onQuantityChange}
        onAdd={onAddToCart}
        disabled={!canAdd}
        hintText={!canAdd ? hintText : ""}
      />
    </div>
  );
}

export default ProductPurchase;
