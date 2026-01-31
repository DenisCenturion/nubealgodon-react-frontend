import { useState, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const bannerImages = [
    {
        img: "/assets/banner1.jpg",
        title: "El mejor descanso está en Nube Algodón",
        subtitle: "Descubrí nuestra nueva colección",
        cta: "Comprar ahora",
        link: "/products"
    },
    {
        img: "/assets/banner2.jpg",
        title: "Pijamas suaves como una nube",
        subtitle: "Nuevos ingresos 2025",
        cta: "Ver novedades",
        link: "/products"
    },
    {
        img: "/assets/banner3.jpg",
        title: "Regalá confort",
        subtitle: "Los mejores precios del verano",
        cta: "Ver ofertas",
        link: "/products"
    }
];

function HeroBanner() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % bannerImages.length);
    const prev = () =>
        setIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, []);

    const current = bannerImages[index];

    return (
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">

            <img
                src={current.img}
                alt="banner"
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
                    {current.title}
                </h2>
                <p className="text-lg md:text-2xl mb-4 drop-shadow-lg">
                    {current.subtitle}
                </p>
                <a
                    href={current.link}
                    className="bg-white text-purple-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-rose-200 transition"
                >
                    {current.cta}
                </a>
            </div>

            <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-xl rounded-full p-3"
            >
                <BiChevronLeft className="text-3xl text-purple-800" />
            </button>

            <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-xl rounded-full p-3"
            >
                <BiChevronRight className="text-3xl text-purple-800" />
            </button>
        </div>
    );
}

export default HeroBanner;
