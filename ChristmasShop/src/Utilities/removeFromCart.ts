

const removeFromCart = async (id:string): Promise<void> => {
    const url = `http://localhost:5010/basket/${id}`;

    try{
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            }
        });
        if(!response.ok){
            throw new Error(`Failed to delete item from basket, Response: ${response.statusText}`)
        }
        console.log("Cart updated");
    }
    catch(e){
        console.error("Error adding to basket", e);
    }
}

export default removeFromCart;