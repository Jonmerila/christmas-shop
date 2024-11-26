import { IProduct } from "../../Models/IProduct";



const ProdCard = ({prod}:{prod:IProduct}) => {
    // console.log("PROD", prod);

    return <div data-testid="product-item">
        
            <h1>Name: {prod.name}</h1>
        </div>
}

export default ProdCard;