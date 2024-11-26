import Header from "../../Components/Header/Header";
import Products from "../../Components/Products/Products";
// import Pagination from "../../Components/Pagination/Pagination";

import getAllItems from "../../Utilities/LoadDecorations";
import { IProduct } from "../../Models/IProduct";
import { useState, useEffect } from "react";

const ProductsPage = () => {

    // const products = [
    //     {
    //         id: 1,
    //         title: "Essence Mascara Lash Princess",
    //         description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    //         category: "beauty",
    //         price: 4,
    //         rating: 4.94,
    //         stock: 3,
    //     },
    //     {
    //         id: 2,
    //         title: "Baseball Bat",
    //         description: "It's a bat",
    //         category: "beauty sure",
    //         price: 12,
    //         rating: 4.94,
    //         stock: 8,
    //     }
    // ]

    const [prod, setProd] = useState<IProduct[]>([]);


    useEffect(() => {
        loadProducts();

    }, [])

    const loadProducts = async () => {
        const data = await getAllItems();
        console.log("NEWDATA", data);
        setProd(data);
    }

    // 
    
// console.log("PAGE", products);
    return <>
        <Header title={"Christmas Shop"}/>
        {/* <Pagination gotoPage={handlePagination} pagination={pagination}/> */}
        <Products products={prod}/>
    </>
}

export default ProductsPage;