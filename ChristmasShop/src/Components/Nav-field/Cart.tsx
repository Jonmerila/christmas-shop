import getCartItems from "../../Utilities/getCart";
import { IProduct } from "../../Models/IProduct";
import removeFromCart from "../../Utilities/removeFromCart";
import styles from "../Components.module.css";

import { useEffect, useState } from "react";

const Cart = () => {

    const [cart, setCart] = useState<IProduct[]>([]);
    const [showCart, setShowCart] = useState(false);
    
    const removeProduct = (id: string): void => {
        const newCart = cart.filter((elem) => elem.id !== id);
        console.log("NEWCART", newCart);
        removeFromCart(id)
        .then(() => {
            setCart(newCart);
        })
        .catch((e) => {
            console.error("Failed to update cart on the server", e);
        });
    }

    const loadCart = async () => {
        const data = await getCartItems();
        console.log("CART", data);
        setCart(data);
    }

    

    //TODO 
    // Add totalsum value to cart 

    useEffect(() => {
        loadCart();
    }, [])


    return <>
    <div className={styles.navContainer}>
        <button onClick={() => setShowCart(!showCart)}>{!showCart ? "Show Cart" : "Hide Cart"}</button>
        <div className={`${styles.openCart} ${showCart ? "show" : ""}`}>
            {showCart && cart !== undefined && cart.map((item) => <li  onClick={() => removeProduct(item.id)} key={item.id}className={styles.navLi}>{item.name}</li>)}
        </div>
        {/* <strong>Your total is: ${totalSum}</strong> */}
    </div>
    </>
}

export default Cart;