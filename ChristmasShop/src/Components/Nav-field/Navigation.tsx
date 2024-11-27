import { Link } from "react-router-dom";
import Cart from "./Cart";

const Navigation = () => {


    return <>
        <nav>
            <h3>Navbar</h3>
            <Link to="/home">Home</Link>
            <Cart/>
        </nav>
    </>
}

export default Navigation;