

const getOneDecoration = async (id:number) => {
    // http://localhost:5010/decorations

    try{
        const response = await fetch(`http://localhost:3010/api/decorations/${id}`);
        const data = await response.json();
        console.log("fetchoneproduct util", data);
        return data;
    }catch(e){
        throw new Error(`Something went wrong, ${e}`);
    }
}

export default getOneDecoration;