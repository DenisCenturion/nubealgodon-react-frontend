import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { getCategories } from "../firebase/db";

function NavBarConteiner() {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        getCategories()
        .then((cats) => setCategories(cats));
    }, []);

    return (
        <NavBar categories={categories} />
    );
}

export default NavBarConteiner;