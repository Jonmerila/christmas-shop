import { Link } from "react-router-dom";
import styles from "../Components.module.css";
import Cart from "./Cart";

const Navigation = () => {


    return <>
        <nav>
            <h3>Navbar</h3>
            <div className={styles.navHeader}>
                <Link to="/">Home</Link>
                <Cart/>
            </div>
        </nav>
    </>
}

export default Navigation;