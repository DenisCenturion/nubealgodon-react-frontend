import { useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import RelatedProductCard from "./RelatedProductCard";

function RelatedProducts({ products }) {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <div className="mt-16 mb-10">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">
                Te puede interesar
            </h2>

            <div className="relative">

                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20
                               bg-white shadow-xl rounded-full w-12 h-12
                               hidden md:flex items-center justify-center
                               hover:bg-rose-100 transition"
                >
                    <BiChevronLeft className="text-3xl text-purple-800" />
                </button>

                <div
                    ref={carouselRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-1 py-2"
                >
                    {products.map(prod => (
                        <RelatedProductCard key={prod.id} prod={prod} />
                    ))}
                </div>

                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20
                               bg-white shadow-xl rounded-full w-12 h-12
                               hidden md:flex items-center justify-center
                               hover:bg-rose-100 transition"
                >
                    <BiChevronRight className="text-3xl text-purple-800" />
                </button>

            </div>
        </div>
    );
}

export default RelatedProducts;
