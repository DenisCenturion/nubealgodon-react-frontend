import { useNavigate } from "react-router";

function RelatedProductCard({ prod }) {
    const navigate = useNavigate();

    return (
        <div className="min-w-[260px] max-w-[260px] flex-shrink-0">
            <div className="bg-white shadow-md rounded-xl p-4 
                            flex flex-col justify-between items-center
                            h-[380px]">
                
                <img
                    src={prod.thumbnail}
                    alt={prod.title}
                    className="w-28 h-28 object-contain mb-2"
                />

                <h3 className="text-center font-semibold text-purple-900 text-sm line-clamp-2">
                    {prod.title}
                </h3>

                <p className="text-gray-600 text-xs text-center line-clamp-3">
                    {prod.description}
                </p>

                <p className="text-xl font-bold text-gray-800 mt-2">
                    ${prod.price}
                </p>

                <button
                    onClick={() => navigate(`/product/${prod.id}`)}
                    className="bg-rose-400 text-white px-4 py-2 rounded-lg mt-2 hover:bg-rose-500 transition"
                >
                    Ver más
                </button>
            </div>
        </div>
    );
}

export default RelatedProductCard;
