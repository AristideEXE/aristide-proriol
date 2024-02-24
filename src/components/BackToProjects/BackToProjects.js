import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./BackToProjects.module.css";
import { projectsPath } from "../../routes";

const BackToProjects = ({ nextProjectLink }) => (
    <div className={styles.backToProjects}>
        <Link className={styles.link} to={projectsPath}>
            &#60; Retour à la liste des projets
        </Link>
        <Link className={styles.link} to={nextProjectLink} onClick={window.scrollTo(0,0)}>
            Projet suivant &#62;
        </Link>
    </div>
)

BackToProjects.propTypes = {
    nextProjectLink: PropTypes.string,
};
export default BackToProjects;