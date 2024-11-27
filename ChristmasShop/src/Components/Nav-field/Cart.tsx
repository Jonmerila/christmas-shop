import { Link } from "react-router-dom";
import getCartItems from "../../Utilities/getCart";
import { IProduct } from "../../Models/IProduct";
import { useEffect, useState } from "react";

const Cart = () => {

    const [cart, setCart] = useState<IProduct[]>([]);
    

    const loadCart = async () => {
        const data = await getCartItems();
        setCart(data);
    }

    useEffect(() => {
        loadCart();
    }, [])


    return <>
    {cart !== undefined && cart.map((item) => <li>{item.name}</li>)}
    </>
}

export default Cart;