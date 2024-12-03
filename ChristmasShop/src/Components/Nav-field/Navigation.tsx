import { Link } from "react-router-dom";
import styles from "../Components.module.css";
import Cart from "./Cart";

const Navigation = () => {


    return <>
        <nav className={styles.navField}>
            <div className={styles.navHeader}>
                <Link to="/">Home</Link>
                <Cart/>
            </div>
        </nav>
    </>
}

export default Navigation;