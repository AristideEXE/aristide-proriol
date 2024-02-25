import PropTypes from "prop-types";
import styles from "./Project.module.css";
import { Link } from "react-router-dom";

const Project = ({ name, type, path }) => (
    <Link to={path} className={styles.project}>
        <p className={styles.projectTitle}>{name}</p>
        <p className={styles.projectType}>{type}</p>
    </Link>
);

Project.propTypes = {
    name : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    path : PropTypes.string.isRequired,
}

export default Project;