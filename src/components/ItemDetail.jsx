import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ detail }) {
    
    // Imagen principal controlada por estado
    const [mainImage, setMainImage] = useState(detail.thumbnail);

    // Si cambia el producto, actualizamos la imagen principal
    useEffect(() => {
        setMainImage(detail.thumbnail);
    }, [detail]);

    const handleAdd = (quantity) => {
        alert(`Agregaste ${quantity} unidad/es al carrito`);
    };


    return (
        <div className="max-w-4xl mx-auto p-6 bg-rose-100 rounded-xl shadow-md mt-6">

            {/* ---------- Imagen + Datos ----------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Imagen principal */}
                <div>
                    <img 
                        src={mainImage}
                        alt={detail.title}
                        className="rounded-lg shadow-md w-full object-cover"
                    />

                    {/* Miniaturas */}
                    <div className="flex gap-2 mt-3">
                        {[detail.thumbnail, ...detail.images].slice(0, 4).map((img, idx) => (
                            <img 
                                key={idx}
                                src={img}
                                onClick={() => setMainImage(img)}
                                className={`w-16 h-16 rounded-md border cursor-pointer hover:opacity-80 transition 
                                            ${mainImage === img ? "border-rose-500 border-2" : "border-gray-300"}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Información */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-700">{detail.title}</h1>
                    <p className="text-gray-600 mt-2">{detail.description}</p>

                    <div className="mt-4">
                        <span className="text-4xl font-semibold text-gray-800">
                            ${detail.price}
                        </span>

                        {detail.discountPercentage > 0 && (
                            <span className="ml-3 text-rose-500 font-semibold">
                                -{detail.discountPercentage}% OFF
                            </span>
                        )}
                    </div>

                    <p className="text-yellow-600 mt-2 font-medium">
                        ⭐ {detail.rating}
                    </p>

                    <p className="mt-1 text-gray-700">
                        Stock disponible: <span className="font-semibold">{detail.stock}</span>
                    </p>

                    <p className="mt-1 text-gray-700">
                        Marca: <span className="font-semibold">{detail.brand}</span>
                    </p>

                        {/* ITEM COUNT CENTRADO */}
                        <div className="flex flex-col mt-4">
                            <ItemCount 
                                stock={detail.stock} 
                                initial={1} 
                                onAdd={handleAdd}
                            />
                        </div>
                </div>
            </div>

            {/* ---------- Reviews ---------- */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-700 mb-3">Opiniones</h2>

                <div className="space-y-4">
                    {detail.reviews.slice(0, 3).map((rev, i) => (
                        <div key={i} className="bg-white p-4 rounded-lg shadow">
                            <p className="font-medium text-gray-800">
                                ⭐ {rev.rating} — {rev.reviewerName}
                            </p>
                            <p className="text-gray-600 text-sm mt-1">{rev.comment}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default ItemDetail;
