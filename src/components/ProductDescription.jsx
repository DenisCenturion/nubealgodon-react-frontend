function ProductDescription({ description }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-2 text-gray-700">
        Descripción del producto
      </h2>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </section>
  );
}

export default ProductDescription;
