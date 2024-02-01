import Title from "../../components/Title/Title";
import styles from "./Presentation.module.css";
import image from "./Aristide.jpg";
import CV from "./CV Aristide Proriol 2024.pdf";
import TextButton from "../../components/TextButton/TextButton";

const Presentation = () => (
    <div className={styles.presentation}>
        <Title title="Présentation" />
        <div className={styles.flexbox}>
            <div className={styles.text}>
                <p>Je m’appelle Aristide Proriol, et je suis en 3e année de BUT Informatique à l’IUT de Dijon. Je suis également développeur fullstack en alternance chez Atol Conseils et Développements.</p>
                <p>Passionné de développement informatique depuis toujours, je suis intéressé par le développement web et le développement back-end. Fan de jeu vidéo, j'ai pour loisir de développer mes propres projets de jeux.</p>
                <p>Lorsque je ne suis pas en train de coder, vous pouvez me trouver en train de grimper, lire, ou gagner une course à Mario Kart...</p>
                <a href={CV} target="_blank" className={styles.link}>
                    <TextButton text={"Curriculum Vitæ"}/>
                </a>
            </div>
            <div className={styles.image}>
                <div className={styles.imageDiv}>
                    <img src={image}/>
                </div>
            </div>
        </div>
    </div>
);

export default Presentation;