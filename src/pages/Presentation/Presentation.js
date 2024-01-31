import Title from "../../components/Title/Title";
import styles from "./Presentation.module.css";

const Presentation = () => (
    <div className={styles.presentation}>
        <Title title="Présentation" />
        <p>Coucou</p>
    </div>
);

export default Presentation;