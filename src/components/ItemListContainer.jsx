import { useState, useEffect } from "react";
import { ItemListWithLoading } from "./ItemListWithLoading";
import { useParams } from 'react-router';


function ItemListContainer(){
    const [items, setItems] = useState([])
    const {categoryId} = useParams();

    useEffect(()=>{
        const url = 'https://dummyjson.com/products';
        const urlCategory = `https://dummyjson.com/products/category/${categoryId}`;
        fetch(categoryId ? urlCategory : url)
        .then(res => res.json())
        .then(data => setTimeout(() =>{
            setItems(data.products)
        }, 1000));
    }, [categoryId])

    return(
        <ItemListWithLoading isLoading={items.length < 1} items={items} />
    )
}

export default ItemListContainer;