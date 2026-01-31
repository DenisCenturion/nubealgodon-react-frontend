import RatingStars from "./RatingStars";

function ProductHeader({
  title,
  rating,
  reviews,
  price,
  discountPercentage,
}) {
  return (
    <>
      <div className="md:hidden">
        <div className="flex items-start justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-gray-800">
            {title}
          </h1>
          <RatingStars rating={rating} reviews={reviews} />
        </div>

        <div className="mt-2">
          <span className="text-3xl font-bold text-gray-900">
            ${price}
          </span>
          {discountPercentage > 0 && (
            <span className="ml-2 text-rose-500 font-semibold">
              -{discountPercentage}% OFF
            </span>
          )}
        </div>
      </div>

      <div className="hidden md:block">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800">
          {title}
        </h1>

        <div className="mt-1">
          <RatingStars rating={rating} reviews={reviews} />
        </div>

        <div className="mt-4">
          <span className="text-4xl font-semibold text-gray-800">
            ${price}
          </span>
          {discountPercentage > 0 && (
            <span className="ml-3 text-rose-500 font-semibold">
              -{discountPercentage}% OFF
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductHeader;
