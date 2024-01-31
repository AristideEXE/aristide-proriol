import styles from "./Home.module.css";

const Home = () => {
    return (
      <div className={styles.home}>
        <p className={styles.welcome}>Bienvenue</p>
        <h1>Je suis Aristide PRORIOL</h1>
        <p className={styles.subtitle}>
          Étudiant en 3e année de BUT Informatique, et développeur en alternance chez Atol Conseils et Développements
        </p>
      </div>
    );
  };
  
  export default Home;