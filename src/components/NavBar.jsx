import { useState, useEffect, useRef } from "react";
import CardWidget from "./CartWidget";
import { Link } from "react-router";
import { LuSearch } from "react-icons/lu";
import SearchOverlay from "./SearchOverlay";
import { FiUser } from "react-icons/fi";
import LoginPanel from "./LoginPanel";

function NavBar({ categories = [] }) {

    const [openCategories, setOpenCategories] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const desktopMenuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (desktopMenuRef.current && !desktopMenuRef.current.contains(e.target)) {
                setOpenCategories(false);
            }
        }

        if (openCategories) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openCategories]);


    return (
        <nav className="px-6 py-4 bg-rose-200 shadow-sm fixed top-0 left-0 w-full z-50">

            <div className="grid grid-cols-3 items-center">

                <div className="flex items-center gap-4">

                    <button
                        className="md:hidden text-purple-800 text-3xl"
                        onClick={() => setOpenMobileMenu(!openMobileMenu)}
                    >
                        ☰
                    </button>

                    <div ref={desktopMenuRef} className="hidden md:block relative">
                        <button
                            onClick={() => setOpenCategories(!openCategories)}
                            className="flex items-center gap-2 text-purple-900 font-semibold hover:text-rose-600"
                        >
                            <span className="text-2xl">☰</span>
                            <span className="hidden md:inline text-lg">Menú</span>
                        </button>

                        {openCategories && (
                            <div className="absolute left-0 mt-3 z-50 bg-white shadow-2xl rounded-xl p-6 w-72 border border-rose-100 animate-fadeIn">
                                <h3 className="text-purple-900 font-semibold text-lg mb-3">Categorías</h3>
                        
                                <ul className="flex flex-col gap-2 max-h-80 overflow-y-auto pr-2">
                                    {categories.map(cat => (
                                        <Link
                                            key={cat.id}
                                            to={`/category/${cat.name}`}
                                            className="text-purple-700 hover:bg-rose-100 px-3 py-2 rounded-lg transition cursor-pointer"
                                            onClick={() => setOpenCategories(false)}
                                        >
                                            {cat.name}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>


                    <button
                        onClick={() => setOpenSearch(true)}
                        className="flex items-center gap-1 hover:text-rose-600"
                    >
                        <LuSearch className="w-5 h-5" />
                        <span className="hidden sm:inline">Buscar</span>
                    </button>
                </div>

                <div className="text-center">
                    <Link to="/" className="text-purple-900 text-2xl font-bold">
                        Nube Algodón
                    </Link>
                </div>

                <div className="flex items-center gap-6 justify-end">
                    <button 
                        className="text-purple-900 hover:text-rose-600 transition"
                        onClick={() => setOpenLogin(true)}
                    >
                        <FiUser className="w-6 h-6" />
                    </button>
                    <CardWidget />
                </div>

            </div>

            {openMobileMenu && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-40 z-50 overflow-hidden" 
                    onClick={() => setOpenMobileMenu(false)}
                >
                    <div
                        className="
                            absolute left-0 top-0 
                            h-full w-72 
                            bg-white shadow-2xl 
                            animate-slideRight
                            overflow-y-auto
                            p-6
                        "
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-purple-900 font-semibold text-2xl">Menú</h2>
            
                            <button 
                                onClick={() => setOpenMobileMenu(false)}
                                className="text-2xl text-purple-700 hover:text-rose-600"
                            >
                                ✕
                            </button>
                        </div>
            
                        <ul className="flex flex-col gap-3">
                            {categories.map(cat => (
                                <Link
                                    key={cat.id}
                                    to={`/category/${cat.name}`}
                                    className="
                                        text-purple-700 
                                        hover:bg-rose-100 
                                        px-3 py-2 rounded-lg 
                                        transition
                                    "
                                    onClick={() => setOpenMobileMenu(false)}
                                >
                                    {cat.name}
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

        {openSearch && <SearchOverlay onClose={() => setOpenSearch(false)} />}
        {openLogin && <LoginPanel onClose={() => setOpenLogin(false)} />}

        </nav>
    );
}

export default NavBar;
