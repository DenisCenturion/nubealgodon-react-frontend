import { useEffect } from "react";

function FullscreenViewer({ images, currentIndex, onClose, onNext, onPrev }) {

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") onNext();
            if (e.key === "ArrowLeft") onPrev();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose, onNext, onPrev]);

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999]">

            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white text-3xl font-bold hover:scale-110 transition"
            >
                ✕
            </button>

            <button
                onClick={onPrev}
                className="absolute left-6 text-white text-4xl hover:scale-125 transition select-none"
            >
                ‹
            </button>

            <img
                src={images[currentIndex]}
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
            />

            <button
                onClick={onNext}
                className="absolute right-6 text-white text-4xl hover:scale-125 transition select-none"
            >
                ›
            </button>

        </div>
    );
}

export default FullscreenViewer;
