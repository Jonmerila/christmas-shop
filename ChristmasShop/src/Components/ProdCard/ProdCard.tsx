import { IProduct } from "../../Models/IProduct";



const ProdCard = ({prod}:{prod:IProduct}) => {
    console.log("PROD", prod);

    return <h1>Name: {prod.title}</h1>
}

export default ProdCard;