import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import styles from "./Summary.module.css";
import { contactPath, homePath, aboutPath, projectsPath } from "../../routes";
import FadeIn from "../../components/FadeIn/FadeIn";

const Summary = () => (
    <div className={styles.summary}>
        <Title title="Sommaire" />
        <div className={styles.list}>
            <FadeIn delay="0s" duration="0.5s">
                <Link className={styles.link} to={homePath}>
                    <p><span className={styles.number}>01</span>ACCUEIL</p>
                </Link>
            </FadeIn>
            <FadeIn delay="0.3s" duration="0.5s">
                <Link className={styles.link} to={aboutPath}>
                    <p><span className={styles.number}>02</span>PRÉSENTATION</p>
                </Link>
            </FadeIn>
            <FadeIn delay="0.6s" duration="0.5s">
                <Link className={styles.link} to={projectsPath}>
                    <p><span className={styles.number}>03</span>PROJETS</p>
                </Link>
            </FadeIn>
            <FadeIn delay="0.9s" duration="0.5s">
                <Link className={styles.link} to={contactPath}>
                    <p><span className={styles.number}>04</span>CONTACT</p>
                </Link>
            </FadeIn>
        </div>
    </div>
);

export default Summary;