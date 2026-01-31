function RatingStars({ rating = 0, reviews }) {
  const hasReviews = Array.isArray(reviews) && reviews.length > 0;

  const reviewsCount = hasReviews ? reviews.length : 0;

  const effectiveRating = hasReviews
    ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviewsCount
    : rating;

  const roundedRating = Math.round(effectiveRating * 10) / 10;

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`text-xl ${
              effectiveRating >= i
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {hasReviews ? (
        <span className="text-sm text-gray-600">
          {roundedRating} ({reviewsCount})
        </span>
      ) : (
        <span className="text-sm text-gray-500">
          🆕 Producto nuevo — sé el primero en opinar
        </span>
      )}
    </div>
  );
}
export default RatingStars;