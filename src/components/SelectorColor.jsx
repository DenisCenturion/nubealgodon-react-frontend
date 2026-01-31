import { useState } from "react";

const COLORES = [
    { nombre: "Rosa", valor: "#ff8fb1" },
    { nombre: "Celeste", valor: "#8fd3ff" },
    { nombre: "Blanco", valor: "#ffffff", borde: true }
];

export default function SelectorColor({ onSelect }) {
    const [selected, setSelected] = useState(null);

    const handle = (color) => {
        setSelected(color.nombre);
        onSelect && onSelect(color.nombre);
    };

    return (
        <div className="mt-4">
            <p className="font-semibold text-gray-700 mb-2">Color</p>

            <div className="flex gap-4">
                {COLORES.map((c) => (
                    <div
                        key={c.nombre}
                        onClick={() => handle(c)}
                        style={{ backgroundColor: c.valor }}
                        className={`
                            w-8 h-8 rounded-full cursor-pointer border 
                            ${c.borde ? "border-gray-400" : "border-transparent"}
                            transition
                            ${selected === c.nombre ? "ring-2 ring-rose-500" : ""}
                        `}
                    />
                ))}
            </div>
        </div>
    );
}
