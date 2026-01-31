import { FiX } from "react-icons/fi";
import { useState } from "react";

function LoginPanel({ onClose }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (

        <div className="fixed inset-0 z-50 flex">

            <div className="flex-1 bg-black/40" onClick={onClose}></div>

            <div 
                className="
                    w-[420px] 
                    bg-white 
                    shadow-2xl 
                    h-full 
                    p-8 
                    animate-slideLeft
                    overflow-y-auto
                "
            >
                <div className="flex justify-end mb-6">
                    <button onClick={onClose}>
                        <FiX className="w-7 h-7 text-gray-700 hover:text-black" />
                    </button>
                </div>

                <h2 className="text-2xl font-bold text-purple-900 mb-6">
                    Iniciar sesión
                </h2>

                <label className="text-sm text-gray-700">Ingresá tu email</label>
                <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-4
                               focus:border-rose-400 outline-none"
                    placeholder="Ej: usuario@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className="text-sm text-gray-700">Contraseña</label>
                <input
                    type="password"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-4
                               focus:border-rose-400 outline-none"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="text-sm text-purple-800 mb-4 hover:underline">
                    ¿Olvidaste tu contraseña?
                </button>

                <button
                    className="w-full bg-rose-400 text-white py-3 rounded-lg text-lg font-semibold
                               hover:bg-rose-500 transition mb-4"
                >
                    Ingresar
                </button>

                <button
                    className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-2
                               hover:bg-gray-50 transition mb-6"
                >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                         className="w-5 h-5" />
                    Continuar con Google
                </button>

                <h3 className="text-lg font-semibold text-purple-900">¿Todavía no tenés usuario?</h3>
                <p className="text-gray-600 text-sm mb-4">
                    Registrate para completar tus datos y acelerar el proceso de compra.
                </p>

                <button
                    className="w-full border border-purple-400 text-purple-700 py-3 rounded-lg
                               hover:bg-purple-50 transition"
                >
                    Registrarme
                </button>
            </div>

        </div>
    );
}

export default LoginPanel;
