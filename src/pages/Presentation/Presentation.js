import Title from "../../components/Title/Title";
import styles from "./Presentation.module.css";

const Presentation = () => (
    <div className={styles.presentation}>
        <Title title="Présentation" />
        <div className={styles.grid}>
            <div className={styles.text}>
                <p>Je m’appelle Aristide Proriol, et je suis en 3e année de BUT Informatique à l’IUT de Dijon. Je suis également développeur fullstack en alternance chez Atol Conseils et Développements.</p>
                <p>Passionné de développement informatique depuis toujours, je suis intéressé par le développement web et le développement back-end. Fan de jeu vidéo, j'ai pour loisir de développer mes propres projets de jeux.</p>
                <p>Lorsque je ne suis pas en train de coder, vous pouvez me trouver en train de grimper, lire, ou gagner une course à Mario Kart...</p>
            </div>
        </div>
    </div>
);

export default Presentation;