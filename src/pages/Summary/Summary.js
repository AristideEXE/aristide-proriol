import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import styles from "./Summary.module.css";
import { contactPath, homePath, presentationPath, projectsPath } from "../../routes";

const Summary = () => (
    <div className={styles.summary}>
        <Title title="Sommaire" />
        <div className={styles.list}>
            <Link className={styles.link} to={homePath}>
                <p><span className={styles.number}>01</span>ACCUEIL</p>
            </Link>
            <Link className={styles.link} to={presentationPath}>
                <p><span className={styles.number}>02</span>PRÉSENTATION</p>
            </Link>
            <Link className={styles.link} to={projectsPath}>
                <p><span className={styles.number}>03</span>PROJETS</p>
            </Link>
            <Link className={styles.link} to={contactPath}>
                <p><span className={styles.number}>04</span>CONTACT</p>
            </Link>
        </div>
    </div>
);

export default Summary;