import Title from "../../components/Title/Title";
import styles from "./Projects.module.css";
import Project from "./Project/Project";
import FactoryLandSplashArt from "./ProjectSplashImage/FactoryLandSplashArt.png";
import MonsterHunterSplashArt from "./ProjectSplashImage/MonsterHunterSplashArt.png";
import StarWarsLegacySplashArt from "./ProjectSplashImage/StarWarsLegacySplashArt.png";
import IrdDispositifsSplashArt from "./ProjectSplashImage/IrdDispositifsSplashArt.png";
import CaduceeSplashArt from "./ProjectSplashImage/CaduceeSplashArt.png";
import AgirrSplashArt from "./ProjectSplashImage/AgirrSplashArt.png";
import { agirr, caducee, cloneMonsterHunter, factoryland, irdDispositifs, starWarsLegacy } from "../../routes";

const Projects = () => (
    <div className={styles.projects}>
        <Title title="Projets" />
        <div className={styles.projectList}>
            <Project name="Factory Land" type="Jeu vidéo" path={factoryland} imagePath={FactoryLandSplashArt}/>
            <Project name="Star Wars Legacy" type="Jeu vidéo" path={starWarsLegacy} imagePath={StarWarsLegacySplashArt}/>
            <Project name="Clone de Monster Hunter" type="Jeu vidéo" path={cloneMonsterHunter} imagePath={MonsterHunterSplashArt}/>
            <Project name="IRD Dispositifs" type="Application web" path={irdDispositifs} imagePath={IrdDispositifsSplashArt}/>
            <Project name="AGIRR" type="Application web" path={agirr} imagePath={AgirrSplashArt}/>
            <Project name="Caducée" type="Application web" path={caducee} imagePath={CaduceeSplashArt}/>
        </div>
    </div>
);

Projects.propTypes = {};

export default Projects;