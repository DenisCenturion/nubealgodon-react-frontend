import { useState } from "react";
import FullscreenViewer from "./FullscreenViewer";
import ZoomImageML from "./ZoomImage";

function ProductGallery({ images = [] }) {
    const [main, setMain] = useState(images[0]);

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeImage = (img) => {
      setMain(img);
    };


    const openFullscreen = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const nextImage = () =>
        setCurrentIndex((prev) => (prev + 1) % images.length);

    const prevImage = () =>
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <>
            <div className="flex flex-col items-center">

                <div onClick={() => openFullscreen(images.indexOf(main))}
                     className="cursor-pointer">
                    <ZoomImageML src={main} zoom={3} />
                </div>

                <div className="flex gap-3 mt-4 overflow-x-auto py-2 px-1 w-full justify-center">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            onClick={() => changeImage(img)}
                            className={`
                                w-20 h-20 rounded-xl cursor-pointer border transition flex items-center justify-center
                                ${main === img ? "border-rose-500 border-4" : "border-gray-300 hover:border-rose-400"}
                            `}
                        >
                            <img src={img} className="w-full h-full object-contain p-1" />
                        </div>
                    ))}
                </div>
            </div>

            {isOpen && (
                <FullscreenViewer
                    images={images}
                    currentIndex={currentIndex}
                    onClose={() => setIsOpen(false)}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            )}
        </>
    );
}

export default ProductGallery;
