import BackToProjects from "../../../../components/BackToProjects/BackToProjects";
import FadeIn from "../../../../components/FadeIn/FadeIn";
import Title from "../../../../components/Title/Title";
import { caducee } from "../../../../routes";
import styles from "./Agirr.module.css";

const Agirr = () => (
    <>
        <div className={styles.project}>
            <Title 
                title="AGIRR" 
                afterTitle={<BackToProjects nextProjectLink={caducee}/>}
            />
            
            <div className={styles.content}>
                <FadeIn delay="0.5s" duration="0.5s">
                    <p>
                        AGIRR est une application de gestion d'interventions réalisée dans le cadre de mon alternance chez Atol Conseils et Développements.
                        Le logiciel a été développé pour le STEA, le Service de l'Eau et de l'Assainissement, dans le cadre de la refonte de leur système d'information.
                        L'application permet de gérer les différentes interventions sur les parties régulées du réseau d'assainissement de la ville de Paris.
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
                            <p>2024 - En cours</p>
                            <p>Angular - Java 17 - PostgreSQL</p>
                            <p>Alternance chez Atol Conseils et Développements</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    </>
);

Agirr.propTypes = {};

export default Agirr;