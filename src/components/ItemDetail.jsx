import { useEffect, useMemo, useState, useContext } from "react";
import RelatedProductsContainer from "../components/RelatedProductsContainer";
import ProductGallery from "./ProductGallery";

import SideCart from "./SideCart";
import ProductHeader from "./ProductHeader";
import ProductOptions from "./ProductOptions";
import ProductPurchase from "./ProductPurchase";
import ProductMeta from "./ProductMeta";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";
import { CartContext } from "../context/CartContext";

function ItemDetail({ detail }) {
  const { addToCart } = useContext(CartContext);

  const hasVariants =
    Array.isArray(detail.variants) && detail.variants.length > 0;

  const availableSizes = useMemo(() => {
    if (!hasVariants) return [];
    return [...new Set(
      detail.variants
        .map(v => v.size)
        .filter(Boolean)
    )];
  }, [detail.variants, hasVariants]);

  const availableColors = useMemo(() => {
    if (!hasVariants) return [];
    return [...new Set(
      detail.variants
        .map(v => v.color)
        .filter(Boolean)
    )];
  }, [detail.variants, hasVariants]);

  const isSizeAvailable = (size) => {
    if (!hasVariants) return true;

    return detail.variants.some(v =>
      v.size === size &&
      (!selectedColor || v.color === selectedColor) &&
      Number(v.stock) > 0
    );
  };

  const isColorAvailable = (color) => {
    if (!hasVariants) return true;

    return detail.variants.some(v =>
      v.color === color &&
      (!selectedSize || v.size === selectedSize) &&
      Number(v.stock) > 0
    );
  };



  const handleAddToCart = () => {
    addToCart({
      id: detail.id,
      title: detail.title,
      price: detail.price,
      thumbnail: detail.thumbnail,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });

    setSideOpen(true);
  };



  const [sideOpen, setSideOpen] = useState(false);    
    
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);    
  const [quantity, setQuantity] = useState(1);
  
  const availableStock = useMemo(() => {
    if (!hasVariants) {
      return Number(detail.stock ?? 0);
    }

    if (!selectedSize && !selectedColor) {
      return 0;
    }

    const variant = detail.variants.find(v =>
      (v.size ? v.size === selectedSize : true) &&
      (v.color ? v.color === selectedColor : true)
    );

    return Number(variant?.stock ?? 0);
  }, [hasVariants, detail.variants, selectedSize, selectedColor, detail.stock]);


  const requiresSize = hasVariants && detail.variants.some(v => v.size);
  const requiresColor = hasVariants && detail.variants.some(v => v.color);

  const addDisabled =
    (requiresSize && !selectedSize) ||
    (requiresColor && !selectedColor) ||
    availableStock === 0;

  const hintText =
    requiresSize && !selectedSize
    ? "Elegí un talle para continuar con tu compra."
    : requiresColor && !selectedColor
    ? "Elegí un color para continuar con tu compra."
    : availableStock === 0
    ? "No hay stock disponible."
    : "";


    return (
      <div className="max-w-4xl mx-auto p-6 bg-rose-100 rounded-xl shadow-md mt-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <ProductGallery
            images={[detail.thumbnail, ...detail.images]}
          />
    
          <div>
            <ProductHeader
              title={detail.title}
              rating={detail.rating}
              reviews={detail.reviews}
              price={detail.price}
              discountPercentage={detail.discountPercentage}
            />

            <ProductOptions
              hasVariants={hasVariants}
              sizes={availableSizes}
              colors={availableColors}
              selectedSize={selectedSize}
              selectedColor={selectedColor}
              onSelectSize={setSelectedSize}
              onSelectColor={setSelectedColor}
              isSizeAvailable={isSizeAvailable}
              isColorAvailable={isColorAvailable}
              availableStock={availableStock}
            />



            <ProductMeta
              brand={detail.brand}
              showStock={!hasVariants}
              stock={detail.stock}
            />
   
            <ProductPurchase
              stock={availableStock}
              quantity={quantity}
              onQuantityChange={setQuantity}
              canAdd={!addDisabled}
              hintText={hintText}
              onAddToCart={handleAddToCart}
            />
  
          </div>
        </div>

        <hr className="my-10 border-gray-300/80" />

          <ProductDescription description={detail.description} />

        <hr className="my-10 border-gray-300/80" />

          <ProductReviews reviews={detail.reviews} />
        
        <hr className="my-10 border-gray-300/80" />

        <RelatedProductsContainer category={detail.category} currentId={detail.id} />
        
        <SideCart
          open={sideOpen}
          onClose={() => setSideOpen(false)}
        />
      </div>
    );
}   

export default ItemDetail;
