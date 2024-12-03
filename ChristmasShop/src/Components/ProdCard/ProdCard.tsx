import { IProduct } from "../../Models/IProduct";
import { Link } from "react-router-dom";
import styles from "../Components.module.css"
import addToCart from "../../Utilities/addToCart";



const ProdCard = ({prod}:{prod:IProduct}) => {
    // console.log("PROD", prod);

    const addItemToCart = async (product: IProduct, event: React.MouseEvent): Promise<void> => {
        event.stopPropagation();
        event.preventDefault();
        addToCart(product);
    };

    return <>
    <Link to={`/product/${prod.id}`}>
        <div className={styles.prodCard} data-testid="product-item">
            <img src={prod.imageUrl} alt={prod.name} />
            <h3>{prod.name}</h3>
            <strong>Price: ${prod.price}</strong>
            <button onClick={(e) => {addItemToCart(prod, e)}}>Add to cart</button>
        </div>
    </Link>
    </>
}

export default ProdCard;