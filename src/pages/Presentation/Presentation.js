import Title from "../../components/Title/Title";
import styles from "./Presentation.module.css";
import image from "./Aristide.jpg";
import CV from "./CV Aristide Proriol 2024.pdf";
import TextButton from "../../components/TextButton/TextButton";
import FadeIn from "../../components/FadeIn/FadeIn";

const Presentation = () => (
    <div className={styles.presentation}>
        <Title title="Présentation" />
        <div className={styles.flexbox}>
            <div className={styles.text}>
                <p>
                    <FadeIn delay="0s" duration="0.5s">
                        Je m’appelle Aristide Proriol, et je suis en 3e année de BUT Informatique à l’IUT de Dijon. Je suis également développeur fullstack en alternance chez Atol Conseils et Développements.
                    </FadeIn>
                </p>
                <p>
                    <FadeIn delay="0.3s" duration="0.5s">
                        Passionné de développement informatique depuis toujours, je suis intéressé par le développement web et le développement back-end. Fan de jeu vidéo, j'ai pour loisir de développer mes propres projets de jeux.
                    </FadeIn>
                </p>
                <p>
                    <FadeIn delay="0.6s" duration="0.5s">
                        Lorsque je ne suis pas en train de coder, vous pouvez me trouver en train de grimper, lire, ou gagner une course à Mario Kart...
                    </FadeIn>
                </p>
                <a href={CV} target="_blank" className={styles.link}>
                    <FadeIn delay="0.9s" duration="0.5s">
                        <TextButton text={"Curriculum Vitæ"}/>
                    </FadeIn>
                </a>
            </div>
            <div className={styles.image}>
                <FadeIn delay="1.2s" duration="0.5s">
                    <div className={styles.imageDiv}>
                        <img src={image}/>
                    </div>
                </FadeIn>
            </div>
        </div>
    </div>
);

export default Presentation;