import Title from "../../components/Title/Title";
import styles from "./Projects.module.css";
import Project from "./Project/Project";
import { aristideproriol, caducee, cloneMonsterHunter, factoryland, irdDispositifs } from "../../routes";

const Projects = () => (
    <div className={styles.projects}>
        <Title title="Projets" />
        <div className={styles.grid}>
            <div className={styles.projects}>
                <Project name="Aristide Proriol" type="Site web" path={aristideproriol} />
                <Project name="Caducée" type="Dev fullstack" path={caducee} />
                <Project name="Factory Land" type="Jeu vidéo" path={factoryland} />
                <Project name="IRD Dispositifs" type="Dev fullstack" path={irdDispositifs} />
                <Project name="Clone de Monster Hunter" type="Jeu vidéo" path={cloneMonsterHunter} />
            </div>
            <div className={styles.projectImage}>

            </div>
        </div>
    </div>
);

Projects.propTypes = {};

export default Projects;