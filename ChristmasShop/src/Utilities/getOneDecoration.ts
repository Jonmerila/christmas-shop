

const getOneDecoration = async (id:number) => {
    // http://localhost:5010/decorations

    try{
        const response = await fetch(`http://localhost:5010/decorations/${id}`);
        const data = await response.json();
        return data;
    }catch(e){
        throw new Error(`Something went wrong, ${e}`);
    }
}

export default getOneDecoration;