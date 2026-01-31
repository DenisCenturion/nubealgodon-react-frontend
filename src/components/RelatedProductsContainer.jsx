import { useEffect, useState } from "react";
import RelatedProducts from "./RelatedProducts";
import { getProductsByCategory } from "../firebase/db";

function RelatedProductsContainer({ category, currentId }) {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (!category) return;

    getProductsByCategory(category)
      .then(products => {
        const filtered = products.filter(p => p.id !== currentId);
        setRelated(filtered);
      });
  }, [category, currentId]);

  if (related.length === 0) return null;

  return <RelatedProducts products={related} />;
}

export default RelatedProductsContainer;