import FadeIn from "../../components/FadeIn/FadeIn";
import SeparationLine from "../../components/SeparationLine/SeparationLine";
import TextButton from "../../components/TextButton/TextButton";
import Title from "../../components/Title/Title";
import styles from "./Contact.module.css";
import { ReactComponent as Youtube } from "./Logos/Youtube.svg";
import { ReactComponent as Github } from "./Logos/Github.svg";
import { ReactComponent as Linkedin } from "./Logos/Linkedin.svg";
import { ReactComponent as Twitter } from "./Logos/Twitter.svg";
import { ReactComponent as Instagram } from "./Logos/Instagram.svg";

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

        <SeparationLine width="50%" delay="2.1s" className={styles.line}/>

        <div className={styles.socials}>
          <FadeIn delay="2.4s" duration="0.5s">
            <a href="https://github.com/AristideEXE" target="_blank"><Github /></a>
          </FadeIn>
          <FadeIn delay="2.7s" duration="0.5s">
            <a href="https://www.linkedin.com/in/aristide-proriol/" target="_blank"><Linkedin /></a>
          </FadeIn>
          <FadeIn delay="3s" duration="0.5s">
            <a href="https://www.youtube.com/@aristideexe" target="_blank"><Youtube /></a>
          </FadeIn>
          <FadeIn delay="3.3s" duration="0.5s">
            <a href="https://www.instagram.com/aristide_exe/" target="_blank"><Instagram /></a>
          </FadeIn>
          <FadeIn delay="3.6s" duration="0.5s">
            <a href="https://twitter.com/AristideExe" target="_blank"><Twitter /></a>
          </FadeIn>
        </div>
    </div>
);

export default Contact;