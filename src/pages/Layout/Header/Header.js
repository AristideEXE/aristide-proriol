import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { homePath } from "../../../routes";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={homePath}>
        Aristide Proriol
      </Link>
    </div>
  );
};

export default Header;
