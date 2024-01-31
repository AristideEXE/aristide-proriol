import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { homePath, summaryPath } from "../../../routes";

const Header = () => {
  const currentPath = useLocation().pathname;

  return (
    <div className={styles.header}>
      <Link to={homePath} className={styles.link}>
        Aristide Proriol
      </Link>
      <div>
        {currentPath === summaryPath ? (
          <Link to={-1} className={styles.link}>
            <span class="material-symbols-outlined">close</span>
          </Link>
        ) : (
          <Link to={summaryPath} className={styles.link}>
            <span class="material-symbols-outlined">menu</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
