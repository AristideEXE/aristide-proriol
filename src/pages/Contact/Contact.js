import FadeIn from "../../components/FadeIn/FadeIn";
import TextButton from "../../components/TextButton/TextButton";
import Title from "../../components/Title/Title";
import styles from "./Contact.module.css";

const Contact = () => (
    <div className={styles.contact}>
        <Title title="Contact" />
        <p>On a peut-être des intérêts en commun :</p>
        <div className={styles.buttons}>
          <div>
            <a href="mailto:contact@aristideproriol.com?subject=Je souhaite développer un site web !">
              <FadeIn delay="0.3s" duration="0.5s">
                <TextButton text={"Développement web"}/>
              </FadeIn>
            </a>
            <a href="mailto:contact@aristideproriol.com?subject=Nous sommes une école d'ingénieur !">
              <FadeIn delay="0.6s" duration="0.5s">
                <TextButton text={"Écoles d'ingénieur"}/>
              </FadeIn>
            </a>
            <a href="mailto:contact@aristideproriol.com?subject=Je souhaite créer une API !">
              <FadeIn delay="0.9s" duration="0.5s">
                <TextButton text={"Développement back-end"}/>
              </FadeIn>
            </a>
          </div>
          <div>
            <a href="mailto:contact@aristideproriol.com?subject=Je veux créer un jeu vidéo !">
            <FadeIn delay="1.2s" duration="0.5s">
              <TextButton text={"Jeux-vidéos"}/>
            </FadeIn>
            </a>
            <a href="mailto:contact@aristideproriol.com?subject=J'ai une super idée d'application !">
              <FadeIn delay="1.5s" duration="0.5s">
                <TextButton text={"Développement d'application"}/>
              </FadeIn>
            </a>
            <a href="mailto:contact@aristideproriol.com?subject=J'adore la pizza ! !">
              <FadeIn delay="1.8s" duration="0.5s">
                <TextButton text={"Pizza"}/>
              </FadeIn>
            </a>
          </div>
        </div>
    </div>
);

export default Contact;