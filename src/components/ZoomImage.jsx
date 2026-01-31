import { useState, useRef } from "react";

function ZoomImage({ src, zoom = 2 }) {
    const [showZoom, setShowZoom] = useState(false);
    const [backgroundPos, setBackgroundPos] = useState("0% 0%");
    const imgRef = useRef(null);

    const handleMove = (e) => {
        const rect = imgRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setBackgroundPos(`${x}% ${y}%`);
    };

    return (
        <div className="relative flex justify-center">

            <img
                ref={imgRef}
                src={src}
                alt="zoom-img"
                onMouseEnter={() => setShowZoom(true)}
                onMouseLeave={() => setShowZoom(false)}
                onMouseMove={handleMove}
                className="w-[380px] h-[380px] object-contain rounded-lg shadow cursor-zoom-in"
            />

            {showZoom && (
                <div
                    className="
                        hidden md:block 
                        absolute top-0 left-[420px]
                        border rounded-lg shadow-lg bg-white 
                        z-50
                    "
                    style={{
                        width: "380px",
                        height: "380px",
                        backgroundImage: `url(${src})`,
                        backgroundSize: `${zoom * 100}%`,
                        backgroundPosition: backgroundPos,
                        backgroundRepeat: "no-repeat",
                    }}
                />
            )}
        </div>
    );
}

export default ZoomImage;
