import { Link } from "react-router-dom";
import styles from "./BackToProjects.module.css";
import { projectsPath } from "../../routes";

const BackToProjects = () => (
    <Link to={projectsPath}>
        Retour aux projets
    </Link>
)

BackToProjects.propTypes = {};
export default BackToProjects;