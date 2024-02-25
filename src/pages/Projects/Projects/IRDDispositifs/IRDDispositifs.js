import BackToProjects from "../../../../components/BackToProjects/BackToProjects";
import FadeIn from "../../../../components/FadeIn/FadeIn";
import Title from "../../../../components/Title/Title";
import { cloneMonsterHunter } from "../../../../routes";
import styles from "./IRDDispositifs.module.css";

const IRDDispositifs = () => (
    <>
        <div className={styles.project}>
            <Title 
                title="IRD Dispositifs" 
                afterTitle={<BackToProjects nextProjectLink={cloneMonsterHunter}/>}
            />
            
            <div className={styles.content}>
                <FadeIn delay="0.5s" duration="0.5s">
                    <p>
                        IRD Dispositifs est un progiciel de suivi de projets fait dans le cadre de mon alternance chez Atol Conseils et Développements.
                        Le logiciel a été développé pour l'IRD, l'Institut de Recherche pour le Développement, dans le cadre de l'informatisation de leur système d'information.
                    </p>
                </FadeIn>
                
                <FadeIn delay="0.8s" duration="0.5s">
                    <div className={styles.specifications}>
                        <div>
                            <p>ANNÉES</p>
                            <p>TECHNOLOGIES</p>
                            <p>CADRE</p>
                        </div>
                        <div>
                            <p>2023 - En cours</p>
                            <p>React JS - Java 17 - PostgreSQL - GraphQL</p>
                            <p>Alternance chez Atol Conseils et Développements</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    </>
);

IRDDispositifs.propTypes = {};

export default IRDDispositifs;