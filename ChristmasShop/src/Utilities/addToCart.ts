import { IProduct } from "../Models/IProduct";

const addToCart = async (cartItem:IProduct): Promise<void> => {
    const url = "http://localhost:5010/basket";

    // Should not be able to add two of the same item? 

    
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