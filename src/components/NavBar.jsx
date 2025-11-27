import CardWidget from "./CartWidget";

function NavBar(){
    return(
        <>
            <nav className="flex justify-between items-center p-4 bg-rose-200">
                <h1 className="text-purple-900 text-2xl font-bold">Nube Algodón</h1>
                <ul className="flex gap-6 text-purple-800 font-medium">
                    <li className="hover:text-purple-600 cursor-pointer transition">Vestidos</li>
                    <li className="hover:text-purple-600 cursor-pointer transition">Pijamas</li>
                    <li className="hover:text-purple-600 cursor-pointer transition">Mallas</li>
                    <li className="hover:text-purple-600 cursor-pointer transition">Conjuntos</li>
                    <li className="hover:text-purple-600 cursor-pointer transition">Toallas</li>
                </ul>
                <CardWidget/>
            </nav>
        </>
    )
}

export default NavBar;