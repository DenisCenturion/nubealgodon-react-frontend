import { useState } from "react";

function ItemCount({ stock, initial = 1, onAdd }) {

    const [count, setCount] = useState(initial);

    const increase = () => {
        if (count < stock) setCount(count + 1);
    };

    const decrease = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div className="mt-6 flex flex-col gap-3">

            {/* CONTADOR */}
            <div className="flex items-center gap-4 justify-center">

                <button 
                    onClick={decrease}
                    className="bg-gray-300 px-3 py-1 rounded-lg text-lg font-bold hover:bg-gray-400 "
                >
                    -
                </button>

                <span className="text-xl font-semibold">{count}</span>

                <button 
                    onClick={increase}
                    className="bg-gray-300 px-3 py-1 rounded-lg text-lg font-bold hover:bg-gray-400"
                >
                    +
                </button>
            </div>

            {/* BOTÓN AGREGAR */}
            <button
                onClick={() => onAdd(count)}
                className="bg-rose-400 hover:bg-rose-500 text-white font-semibold py-3 rounded-lg shadow text-center w-64 mx-auto"
            >
                Agregar al Carrito
            </button>

        </div>
    );
}

export default ItemCount;
