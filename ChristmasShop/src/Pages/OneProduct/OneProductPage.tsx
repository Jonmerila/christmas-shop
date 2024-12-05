import { useState, useEffect } from "react";
import { IProduct } from "../../Models/IProduct";
import getOneDecoration from "../../Utilities/getOneDecoration";
import styles from "./OneProductPage.module.css";
import { useParams } from "react-router-dom";
import Navigation from "../../Components/Nav-field/Navigation";

const OneProductPage = () => {
    const [item, setItem] = useState<IProduct | null>(null);

    const { id } = useParams();
    const getItemFromParam = async () => {
        if(id){
            try {
                const data = await getOneDecoration(+id); 
                console.log("ONEITEM", data);
                const product: IProduct = data.result;
                setItem(product); 
                console.log("Prod item: ", data);
            } catch (error) {
                console.error("Error fetching product: ", error);
            }
        }
    }
    

    
    
    useEffect(() => {
        getItemFromParam();
        
    }, [])

    if (!item) {
        return <p>Loading...</p>;
    }

    return <>
    <Navigation/>
         <div className={styles.productContainer}>
            <img src={item.imageUrl} alt={item.name} />
            <h2>{item.name}</h2>
            <div className={styles.productInfo}>
                <p>Type: {item.type}</p>
                <p className={styles.productDescription}>Description: {item.description}</p>
                <p className={styles.productPrice}>Price: ${item.price}</p>

                {/* Render Dimensions if available */}
                {item.dimensions && <p>Dimensions: {item.dimensions}</p>}

                {/* Render Diameter if available */}
                {item.diameter && <p>Diameter: {item.diameter}</p>}

                {/* Render Height if available */}
                {item.height && <p>Height: {item.height}</p>}

                {/* Render Length if available */}
                {item.length && <p>Length: {item.length}</p>}
                <p>
                Quantity: <span className={styles.productQuantity}>{item.quantity || 0}</span>
                </p>
            </div>
        </div>
    </>
}

export default OneProductPage;