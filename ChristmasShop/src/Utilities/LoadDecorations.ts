// make GET API from http://localhost:5010/decorations to get decorations
//Make a function that takes in the values and returns them so that components can use them
//Import IProduct from Models folder to write out how the products should be shown.


const getAllItems = async () => {
    const response = await fetch("http://localhost:5010/decorations");
    const data = await response.json();
    console.log("RESPONSE", data);
    return data;
}

export default getAllItems;