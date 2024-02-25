import BackToProjects from "../../../../components/BackToProjects/BackToProjects";
import FadeIn from "../../../../components/FadeIn/FadeIn";
import Title from "../../../../components/Title/Title";
import { caducee } from "../../../../routes";
import styles from "./AristideProriol.module.css";

const AristideProriol = () => (
    <div className={styles.project}>
            <Title 
                title="Aristide Proriol" 
                afterTitle={<BackToProjects nextProjectLink={caducee}/>}
            />
            
            <div className={styles.content}>
                <FadeIn delay="0.5s" duration="0.5s">
                    <p>Bienvenue !</p> 
                    <p>
                        Aristide Proriol est le site sur lequel vous vous trouvez. L'objectif de ce site web est de me présenter, de démontrer mes compétences techniques ainsi que
                        d'exhiber certains projets que j'ai réalisé durant ces 3 dernières années.
                    </p>
                </FadeIn>
                
                <FadeIn delay="0.8s" duration="0.5s">
                    <div className={styles.specifications}>
                        <div>
                            <p>ANNÉE</p>
                            <p>TECHNOLOGIE</p>
                            <p>CADRE</p>
                        </div>
                        <div>
                            <p>2024</p>
                            <p>React JS</p>
                            <p>Projet personnel</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
);

AristideProriol.propTypes = {};

export default AristideProriol;