import { useState, useEffect } from "react";
import { IProduct } from "../../Models/IProduct";
import getOneDecoration from "../../Utilities/getOneDecoration";
import { useParams } from "react-router-dom";

const OneProductPage = () => {
    const [item, setItem] = useState<IProduct | null>(null);

    const { id } = useParams();
    const getItemFromParam = async () => {
        if(id){
            try {
                const data: IProduct = await getOneDecoration(+id); 
                setItem(data); 
                console.log("Prod item: ", data);
            } catch (error) {
                console.error("Error fetching product: ", error);
            }
        }
    }
    

    
    
    useEffect(() => {
        getItemFromParam();
        
    }, [])

    if (!item) {
        return <p>Loading...</p>;
    }

    return <>
        <div>
            <img src={item.imageUrl} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Type: {item.type}</p>
            <p>Description: {item.description}</p>
            <p>Price: ${item.price}</p>
            <p>Dimensions: {item.dimensions || "N/A"}</p>
            <p>Quantity: {item.quantity || 0}</p>
        </div>
    </>
}

export default OneProductPage;