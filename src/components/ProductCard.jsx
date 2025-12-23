function ProductCardPastel({
  title,
  description,
  price,
  oldPrice,
  offert,
  image,
  onAddToCart
}) {
  return (
  <div className="max-w-sm bg-[#FFF7F4] rounded-3xl shadow-lg p-5 
                flex flex-col justify-between 
                text-center gap-3 border border-[#f2e8e3]
                min-h-[550px]">

  {/* BADGE + IMG */}
  <div className="relative w-full flex justify-center">
    {offert && (
      <span className="absolute top-2 left-2 bg-[#f9b4b4] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
        OFERTA
      </span>
    )}
    <img src={image} alt={title} className="h-64 w-full object-cover rounded-2xl"/>
  </div>

  {/* CONTENIDO SUPERIOR */}
  <div className="flex flex-col flex-grow gap-3">
    <h3 className="text-xl font-semibold text-[#354259]">{title}</h3>
    <p className="text-sm text-[#6b7a8f]">{description}</p>

    <div className="flex flex-col items-center">
      <span className="text-3xl font-bold text-[#354259]">${price}</span>
      {oldPrice && (
        <span className="text-md line-through text-[#9ca3af]">${oldPrice}</span>
      )}
    </div>
  </div>

  {/* BOTÓN */}
  <button
    onClick={onAddToCart}
    className="bg-[#f9b4b4] hover:bg-[#f7a3a3] text-white font-semibold py-2 px-4 rounded-full w-full mt-auto transition-all"
  >
    Ver más
  </button>

  </div>
  );
}
export default ProductCardPastel;