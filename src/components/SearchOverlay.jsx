import { FiX, FiSearch } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";

function SearchOverlay({ onClose }) {
    const [text, setText] = useState("");
    const navigate = useNavigate();
    const boxRef = useRef(null);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?text=${text}`);
        onClose();
    };

    useEffect(() => {
        function handleClickOutside(e) {
            if (boxRef.current && !boxRef.current.contains(e.target)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={boxRef}
            className="
                fixed 
                left-0 
                top-[68px] 
                w-full 
                bg-white 
                shadow-md 
                z-50 
                px-6 py-4
                flex items-center gap-4"
        >

            <FiSearch className="text-gray-500 w-6 h-6" />

            <form onSubmit={handleSearch} className="flex-1">
                <input
                    type="text"
                    autoFocus
                    placeholder="Buscar productos..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="
                        w-full 
                        border-b 
                        border-gray-300 
                        focus:border-rose-400 
                        outline-none 
                        pb-1 
                        text-lg
                    "
                />
            </form>

            <button onClick={onClose}>
                <FiX className="w-7 h-7 text-gray-600 hover:text-black" />
            </button>
        </div>
    );
}

export default SearchOverlay;
