import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import styles from "./Summary.module.css";
import { contactPath, homePath } from "../../routes";

const Summary = () => (
    <div className={styles.summary}>
        <Title title="Sommaire" />
        <div className={styles.list}>
            <Link className={styles.link} to={homePath}>
                <p><span className={styles.number}>01</span>Accueil</p>
            </Link>
            <Link className={styles.link} to={homePath}>
                <p><span className={styles.number}>02</span>Présentation</p>
            </Link>
            <Link className={styles.link} to={homePath}>
                <p><span className={styles.number}>03</span>Projets</p>
            </Link>
            <Link className={styles.link} to={contactPath}>
                <p><span className={styles.number}>04</span>Contact</p>
            </Link>
        </div>
    </div>
);

export default Summary;