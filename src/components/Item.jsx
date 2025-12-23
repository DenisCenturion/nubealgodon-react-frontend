import ProductCard from "./ProductCard";
import { useNavigate } from "react-router";

function Item({ prod }) {
  const navigate = useNavigate();

  const rawOldPrice = prod.price / (1 - prod.discountPercentage / 100);
  const oldPrice = parseFloat(rawOldPrice.toFixed(2));

  const hasOffer = oldPrice !== prod.price;

  return (
    <ProductCard
      key={prod.id}
      title={prod.title}
      description={prod.description}
      price={prod.price}
      oldPrice={hasOffer ? oldPrice : null}
      offert={hasOffer}
      image={prod.thumbnail}
      onAddToCart={() => navigate(`/product/${prod.id}`)}
    />
  );
}


export default Item;
