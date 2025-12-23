function Page404() {
    return (
        <div className="text-center mt-20">
            <h1 className="text-4xl font-bold text-rose-600">404</h1>
            <p className="text-gray-700 mt-3">Página no encontrada</p>

            <a 
                href="/" 
                className="mt-5 inline-block bg-rose-400 hover:bg-rose-500 
                           text-white px-6 py-3 rounded-lg"
            >
                Volver al Inicio
            </a>
        </div>
    );
}

export default Page404;
