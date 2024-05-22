import PropTypes from "prop-types";
import styles from "./Project.module.css";
import { Link } from "react-router-dom";

const Project = ({ name, type, imagePath, path }) => (
    <Link to={path} className={styles.link}>
        <div className={styles.project}>
            <img src={imagePath} />
            <div className={styles.projectInfos}>
                <h2 className={styles.projectTitle}>{name}</h2>
                <span className={styles.projectType}>{type}</span>
            </div>
        </div>
    </Link>
);

Project.propTypes = {
    name : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    imagePath : PropTypes.string.isRequired,
    path : PropTypes.string.isRequired,
}

export default Project;