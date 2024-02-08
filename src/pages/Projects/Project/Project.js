import PropTypes from "prop-types";
import styles from "./Project.module.css";

const Project = ({ name, type }) => (
    <div className={styles.project}>
        <p className={styles.projectTitle}>{name}</p>
        <p className={styles.projectType}>{type}</p>
    </div>
);

Project.propTypes = {
    name : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
}

export default Project;