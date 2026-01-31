import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import ItemDetailSkeleton from "./ItemDetailSkeleton";
import { getProductById } from "../firebase/db";

function ItemDetailContainer() {
    const [detail, setDetail] = useState(null);
    const [error, setError] = useState(null);
    const { productId } = useParams();

    useEffect(() => {
        setDetail(null);
        setError(null);

        getProductById(productId)
            .then((product) => {
              setDetail(product);
        })
        .catch((err) => {
            console.error(err);
            setError("Producto no encontrado");
        });
    }, [productId]);

    if (error) {
        return <p className="text-center mt-20">{error}</p>;
    }

    if (!detail) {
        return <ItemDetailSkeleton />;
    }

    return <ItemDetail detail={detail} />;
}

export default ItemDetailContainer;
