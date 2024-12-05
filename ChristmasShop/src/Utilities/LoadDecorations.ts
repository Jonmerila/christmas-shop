const getAllItems = async () => {
    
    try{
        const response = await fetch("http://localhost:3010/api/decorations");
        const data = await response.json();
        return data;
    }catch(e){
        throw new Error(`Something went wrong, ${e}`);
    }
}

export default getAllItems;