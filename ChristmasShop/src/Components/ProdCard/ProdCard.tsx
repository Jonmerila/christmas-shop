import { IProduct } from "../../Models/IProduct";
import getCartItems from "../../Utilities/getCart";
import styles from "../Components.module.css"
import addToCart from "../../Utilities/addToCart";



const ProdCard = ({prod}:{prod:IProduct}) => {
    // console.log("PROD", prod);

    const addItemToCart = async (product:IProduct):Promise<void> => {
        addToCart(product);
    }

    return <div className={styles.prodCard} data-testid="product-item">
        
            <img src={prod.imageUrl} alt={prod.name} />
            <h3>{prod.name}</h3>
            <p>{prod.description}</p>
            <strong>Price: ${prod.price}</strong>
            <button onClick={() => {addItemToCart(prod)}}>Add to cart</button>
        </div>
}

export default ProdCard;