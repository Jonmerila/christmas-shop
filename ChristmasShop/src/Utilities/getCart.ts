

const getCartItems = async () => {

    try{
        const response = await fetch("http://localhost:3010/api/basket");
        const data = await response.json();
        if(!response.ok){
            throw new Error("Error while getting basket");
        }
        return data;
    }catch(e){
        console.error("Could not retrive basket:", e);
    }
}

export default getCartItems;