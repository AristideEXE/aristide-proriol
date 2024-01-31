import Title from "../../components/Title/Title";
import styles from "./Summary.module.css";

const Summary = () => (
    <div className={styles.summary}>
        <Title title="Sommaire" />
        <p>Toto</p>
    </div>
);

export default Summary;