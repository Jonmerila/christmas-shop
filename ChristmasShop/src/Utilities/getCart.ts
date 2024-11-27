

const getCartItems = async () => {
    const response = await fetch("http://localhost:5010/basket");
    const data = await response.json();
    console.log("RESPONSE", data);
    return data;
}

export default getCartItems;