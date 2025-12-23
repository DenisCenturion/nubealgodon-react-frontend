import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(){
    const [detail, setDetail] = useState(null);
    const { productId } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setDetail(data));
    }, [productId]);

    if (!detail) {
        return <div className="text-center mt-10 text-xl">Cargando producto...</div>;
    }

    return <ItemDetail detail={detail} />;
}

export default ItemDetailContainer;
