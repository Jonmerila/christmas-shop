import ProdCard from "../ProdCard/ProdCard";
import { IProduct } from "../../Models/IProduct";



const Products = ({products}:{products: IProduct[]}) => {

    console.log("PRODUCTS", products);
    return <>
    
    {products.map((prod) => <ProdCard key={prod.id} prod={prod} />)}
    </>
}

export default Products;