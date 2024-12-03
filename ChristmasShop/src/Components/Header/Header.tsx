import styles from "../Components.module.css"


const Header = ({title}:{title:string}) => {
    return <h1 className={styles.siteHeader}>{title}</h1>
}

export default Header;