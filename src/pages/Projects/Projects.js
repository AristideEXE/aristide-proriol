import Title from "../../components/Title/Title";
import styles from "./Projects.module.css";
import Project from "./Project/Project";

const Projects = () => (
    <div className={styles.projects}>
        <Title title="Projets" />
        <div className={styles.grid}>
            <div className={styles.projects}>
                <Project name="Aristide Proriol" type="Site web" />
                <Project name="Caducée" type="Dev fullstack" />
                <Project name="Factory Land" type="Jeu vidéo" />
                <Project name="IRD Dispositifs" type="Dev fullstack" />
                <Project name="Clone de Monster Hunter" type="Jeu vidéo" />
            </div>
            <div className={styles.projectImage}>

            </div>
        </div>
    </div>
);

Projects.propTypes = {};

export default Projects;