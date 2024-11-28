import { IProduct } from "../Models/IProduct";


const updateCart = async (cartList:IProduct[]): Promise<void> => {
    const url = "http://localhost:5010/basket";

    try{
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(cartList),
        });
        if(!response.ok){
            throw new Error(`Failed to update basket, Response: ${response}`)
        }
        console.log("Cart updated");
    }
    catch(e){
        console.error("Error updating basket", e);
    }
}

export default updateCart;