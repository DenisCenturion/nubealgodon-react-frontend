function ProductReviews({ reviews = [] }) {
  const hasReviews = reviews.length > 0;

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-gray-700 mb-3">
        Opiniones
      </h2>

      {!hasReviews && (
        <p className="text-gray-500 italic">
          🆕 Producto nuevo — sé el primero en opinar
        </p>
      )}

      {hasReviews && (
        <div className="space-y-4">
          {reviews.slice(0, 3).map((rev, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow"
            >
              <p className="font-medium text-gray-800">
                ⭐ {rev.rating} — {rev.reviewerName}
              </p>

              <p className="text-gray-600 text-sm mt-1">
                {rev.comment}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductReviews;
