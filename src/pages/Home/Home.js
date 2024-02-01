import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import TextButton from "../../components/TextButton/TextButton";
import classNames from "classnames";
import { aboutPath, projectsPath } from "../../routes";
import FadeIn from "../../components/FadeIn/FadeIn";

const Home = () => {
    return (
      <div className={styles.home}>
        <div>
          <p className={styles.welcome}>
            <FadeIn delay="1s" duration="0.5s">Bienvenue</FadeIn>
          </p>
          <h1>
            <FadeIn delay="1.3s" duration="0.5s">Je suis Aristide PRORIOL</FadeIn>
          </h1>
          <p className={styles.subtitle}>
            <FadeIn delay="1.6s" duration="0.5s">
              Étudiant en 3e année de BUT Informatique, et développeur en alternance chez Atol Conseils et Développements
            </FadeIn>
          </p>
          <Link className={classNames(styles.links, styles.firstButton)} to={aboutPath}>
            <FadeIn delay="1.9s" duration="0.5s">
              <TextButton text={"Qui suis-je ?"}/>
            </FadeIn>
          </Link>
          <Link className={styles.links} to={projectsPath}>
            <FadeIn delay="2.2s" duration="0.5s">
              <TextButton text={"Mes projets"}/>
            </FadeIn>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Home;