import Header from "../../Components/Header/Header";
import Products from "../../Components/Products/Products";
// import Pagination from "../../Components/Pagination/Pagination";

import styles from "./ProductsPage.module.css"
import getAllItems from "../../Utilities/LoadDecorations";
import { IProduct } from "../../Models/IProduct";
import { useState, useEffect } from "react";


const ProductsPage = () => {

    const [prod, setProd] = useState<IProduct[]>([]);


    useEffect(() => {
        loadProducts();

    }, [])

    const loadProducts = async () => {
        const data = await getAllItems();
        console.log("NEWDATA", data);
        setProd(data);
    }

    
    return <>
    
        <Header title={"Christmas Shop"}/>
        <section className={styles.prodGrid}>

            <Products products={prod}/>
        </section>
    </>
}

export default ProductsPage;