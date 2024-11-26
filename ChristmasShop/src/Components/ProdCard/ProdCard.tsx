import { IProduct } from "../../Models/IProduct";
import styles from "../Components.module.css"


const ProdCard = ({prod}:{prod:IProduct}) => {
    // console.log("PROD", prod);

    return <div className={styles.prodCard} data-testid="product-item">
        
            <img src={prod.imageUrl} alt={prod.name} />
            <h3>{prod.name}</h3>
            <p>{prod.description}</p>
            <strong>Price: ${prod.price}</strong>
        </div>
}

export default ProdCard;