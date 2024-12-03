import { IProduct } from "../Models/IProduct";

const addToCart = async (cartItem:IProduct): Promise<void> => {
    const url = "http://localhost:5010/basket";

    const cartResponse = await fetch(url);
    if (!cartResponse.ok) {
        throw new Error(`Failed to fetch cart, Response: ${cartResponse}`);
    }

    const cart: IProduct[] = await cartResponse.json();

    const existingItem = cart.find((item) => item.id === cartItem.id);

    if(existingItem){
        alert("You cannot add two of the same product to your cart.");
        return;
    }
    
    try{
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(cartItem),
        });
        if(!response.ok){
            throw new Error(`Failed to update basket, Response: ${response}`)
        }
        console.log("Cart updated");
    }
    catch(e){
        console.error("Error adding to basket", e);
    }
}

export default addToCart;