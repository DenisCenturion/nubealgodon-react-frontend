import { getProducts } from "../firebase/db";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

function SearchPage() {
    const { search } = useLocation();
    const query = new URLSearchParams(search).get("text") || "";

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const fetchSearchResults = async () => {
          setLoading(true);

          const products = await getProducts();

          const filtered = products.filter(prod =>
            prod.title.toLowerCase().includes(query.toLowerCase()) ||
            prod.description.toLowerCase().includes(query.toLowerCase()) ||
            prod.category.toLowerCase().includes(query.toLowerCase())
          );

          setResults(filtered);
          setLoading(false);
        };

        fetchSearchResults();
    }, [query]);


    if (loading) return <p className="text-center mt-10">Buscando productos...</p>;

    if (results.length === 0)
        return <p className="text-center mt-10">No se encontraron productos para "<b>{query}</b>"</p>;

    return (
        <div className="w-full px-6 mt-6">
            <h2 className="text-2xl font-bold mb-4">
                Resultados para: <span className="text-rose-500">{query}</span>
            </h2>

            <ItemList items={results} />
        </div>
    );
}

export default SearchPage;
