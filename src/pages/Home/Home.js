import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import TextButton from "../../components/TextButton/TextButton";

const Home = () => {
    return (
      <div className={styles.home}>
        <div>
          <p className={styles.welcome}>Bienvenue</p>
          <h1>Je suis Aristide PRORIOL</h1>
          <p className={styles.subtitle}>
            Étudiant en 3e année de BUT Informatique, et développeur en alternance chez Atol Conseils et Développements
          </p>
          <Link>
            <TextButton text={"Qui suis-je ?"} className={styles.firstButton}/>
            <TextButton text={"Mes projets"}/>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Home;