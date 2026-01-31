import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-rose-100 mt-16 pt-12 pb-6 fade-in">

            <div className="text-center mb-12 px-4">
                <h3 className="text-xl font-bold text-purple-900">
                    Suscribite a nuestro newsletter
                </h3>

                <p className="text-gray-700 text-sm mt-1">
                    y recibí novedades y beneficios exclusivos
                </p>

                <div className="mt-6 flex justify-center">
                    <input
                        type="email"
                        placeholder="Ingresá tu email"
                        className="
                         border-b border-gray-400 bg-transparent px-3 py-2 
                         focus:outline-none text-center w-64 
                         transition duration-300 focus:border-purple-700
                        "
                    />
                </div>

                <button 
                    className="
                     mt-4 bg-purple-800 text-white px-6 py-2 rounded-full 
                     hover:bg-purple-700 transition duration-300 hover:scale-105
                    "
                >
                    Suscribirme
                </button>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left px-4">

                <div>
                    <h4 className="font-bold text-purple-900 mb-3">Ayuda</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                        <li className="footer-link">Preguntas frecuentes</li>
                        <li className="footer-link">Envíos</li>
                        <li className="footer-link">Devoluciones</li>
                        <li className="footer-link">Términos y condiciones</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-purple-900 mb-3">Mi cuenta</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                        <li className="footer-link">Iniciar sesión</li>
                        <li className="footer-link">Registrarme</li>
                        <li className="footer-link">Mis compras</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-purple-900 mb-3">Nosotros</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                        <li className="footer-link">Quiénes somos</li>
                        <li className="footer-link">Contacto</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-purple-900 mb-3">Seguinos</h4>
                    <div className="flex justify-center md:justify-start gap-4 text-purple-800 text-xl">
                        {[FaInstagram, FaFacebook, FaTwitter, FaTiktok].map((Icon, i) => (
                            <Icon
                                key={i}
                                className="
                                 hover:text-purple-600 
                                 cursor-pointer 
                                 transition duration-300 
                                 hover:scale-110
                                "
                            />
                        ))}
                    </div>
                </div>

            </div>

            <div className="text-center text-gray-600 text-sm mt-12">
                © {new Date().getFullYear()} Nube Algodón — Todos los derechos reservados
            </div>
        </footer>
    );
}

export default Footer;
