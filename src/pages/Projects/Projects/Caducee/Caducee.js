import BackToProjects from "../../../../components/BackToProjects/BackToProjects";
import Administration from "./Images/Administration.png";
import Calendar from "./Images/Calendar.png";
import styles from "./Caducee.module.css";
import SeparationLine from "../../../../components/SeparationLine/SeparationLine";
import Title from "../../../../components/Title/Title";
import FadeIn from "../../../../components/FadeIn/FadeIn";
import { factoryland } from "../../../../routes";

const Caducee = () => (
    <>
        <div className={styles.project}>
            <Title 
                title="Caducée" 
                afterTitle={<BackToProjects nextProjectLink={factoryland}/>}
            />
            
            <div className={styles.content}>
                <FadeIn delay="0.5s" duration="0.5s">
                    <p>Caducée est une solution logicielle qui facilite la réalisation des plannings du personnel d'une pharmacie. 
                    Elle a été développé dans le cadre d'une SAE (Situation d'Apprentissage et d'Évaluation) lors de la 3e année de BUT Informatique.</p>
                </FadeIn>
                
                <FadeIn delay="0.8s" duration="0.5s">
                    <div className={styles.specifications}>
                        <div>
                            <p>ANNÉES</p>
                            <p>TECHNOLOGIES</p>
                            <p>CADRE</p>
                        </div>
                        <div>
                            <p>2023 - 2024</p>
                            <p>ASP.NET, Vue JS 3.0, MySQL</p>
                            <p>BUT Informatique</p>
                        </div>
                    </div>
                </FadeIn>
                        
                <FadeIn delay="1.1s" duration="0.5s">
                    <p>Le projet vise à simplifier la gestion des plannings du personnel de la Pharmacie Centrale. Celle-ci est constituée de 14 employés 
                        et opère du lundi à 9h00 jusqu'au samedi à 19h00. L'objectif est d'optimiser la présence du personnel en générant des plannings hebdomadaires et en palliant les absences ou les congés. Tous les plannings sont historisés.
                    </p>
                </FadeIn>
            </div>

            <SeparationLine width="100%" delay="1.4s" duration="0.5s"/>

            <div className={styles.content}>
                <FadeIn delay="1.7s" duration="0.5s">
                    <p>La page d'accueil correspond au calendrier de tous les employés de la pharmacie. Tous les employés peuvent voir l'emploi du temps des autres.
                        Le header change suivant le statut de la personne connectée (administrateur ou non).
                    </p>
                </FadeIn>
                <FadeIn delay="2.0s" duration="0.5s">
                    <img src={Calendar} />
                </FadeIn>
                
                <FadeIn delay="2.3s" duration="0.5s">
                    <p>En étant connecté en tant qu'administrateur, un écran permet de gérer tous les aspects de la pharmacie.</p>
                </FadeIn>
                <FadeIn delay="2.6s" duration="0.5s">
                    <img src={Administration} />
                </FadeIn>
            </div>
            <FadeIn delay="2.9s" duration="0.5s">
                <BackToProjects nextProjectLink={factoryland}/>
            </FadeIn>
        </div>
    </>
);

Caducee.propTypes = {};

export default Caducee;