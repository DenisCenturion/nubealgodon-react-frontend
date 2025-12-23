import { useState } from "react";
import CardWidget from "./CartWidget";
import { Link } from 'react-router';

function NavBar({ categories = [] }) {
    const [openCategories, setOpenCategories] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    return (
        <nav className="px-6 py-4 bg-rose-200 shadow-sm">
            <div className="flex items-center justify-between">

                {/* Logo */}
                <Link to='/'className="text-purple-900 text-2xl font-bold">
                    Nube Algodón
                </Link>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex gap-6 text-purple-800 font-medium relative">

                    <li 
                        className="hover:text-purple-600 cursor-pointer relative"
                        onClick={() => setOpenCategories(!openCategories)}
                    >
                        Categorías ▾

                        {/* Dropdown Desktop */}
                        {openCategories && (
                            <div className="absolute z-50 bg-white shadow-xl rounded-xl p-4 w-48 border border-rose-100 animate-fadeIn top-full mt-2 left-1/2 -translate-x-1/2">
                                <ul className="flex flex-col gap-2">
                                    {categories.map(cat => (
                                        <Link to={`/category/${cat}`}
                                            key={cat}
                                            className="text-purple-700 hover:text-purple-500 cursor-pointer transition"
                                        >
                                            {cat}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>

                {/* ICONOS DERECHA */}
                <div className="flex items-center gap-4">

                    {/* MENU HAMBURGUESA (Mobile) */}
                    <button 
                        className="md:hidden text-purple-800 text-3xl"
                        onClick={() => setOpenMobileMenu(!openMobileMenu)}
                    >
                        ☰
                    </button>

                    {/* Carrito siempre visible */}
                    <CardWidget />
                </div>
            </div>

            {/* MOBILE MENU - SLIDE */}
            {openMobileMenu && (
                <div className="md:hidden bg-white shadow-xl rounded-xl mt-4 p-4 border border-rose-100 animate-slideDown">
                
                    <h2 
                        className="text-purple-900 font-semibold text-lg cursor-pointer mb-2"
                        onClick={() => setOpenCategories(!openCategories)}
                    >
                        Categorías ▾
                    </h2>
            
                    {/* Dropdown Mobile */}
                    {openCategories && (
                        <ul className="flex flex-col gap-2 pl-2">
                            {categories.map(cat => (
                                <Link 
                                    to={`/category/${cat}`}
                                    key={cat}
                                    className="text-purple-700 hover:text-purple-500 cursor-pointer transition"
                                    onClick={() => {
                                        setOpenCategories(false);
                                        setOpenMobileMenu(false);  // <-- CIERRA EL MENU MOBILE
                                    }}
                                >
                                    {cat}
                                </Link>
                            ))}
                        </ul>
                    )}
                </div>
            )}

        </nav>
    );
}

export default NavBar;