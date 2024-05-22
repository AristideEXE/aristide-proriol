import BackToProjects from "../../../../components/BackToProjects/BackToProjects";
import FadeIn from "../../../../components/FadeIn/FadeIn";
import SeparationLine from "../../../../components/SeparationLine/SeparationLine";
import Title from "../../../../components/Title/Title";
import styles from "./StarWarsLegacy.module.css";
import Menu from "./Images/Menu.png";
import Blacksmith from "./Images/Blacksmith.png";
import Lobby from "./Images/Lobby.png";
import Fight from "./Images/Fight.png";
import { cloneMonsterHunter } from "../../../../routes";

const StarWarsLegacy = () => (
    <>
        <div className={styles.project}>
            <Title 
                title="Star Wars Legacy" 
                afterTitle={<BackToProjects nextProjectLink={cloneMonsterHunter}/>}
            />
            
            <div className={styles.content}>
                <FadeIn delay="0.5s" duration="0.5s">
                    <p>
                        Star Wars Legacy est un top-down shooter inspiré de l'univers de Star Wars.
                        Le jeu a été développé dans le cadre d'une SAE (Situation d'Apprentissage et d'Évaluation) lors de la 2nd année de BUT Informatique.
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
                            <p>2022</p>
                            <p>C#</p>
                            <p>BUT Informatique</p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay="1.1s" duration="0.5s">
                    <p>
                        L'objectif du jeu est de survivre à des vagues de plus en plus grosses de vaisseaux ennemis.
                        Le jeu met à disposition du joueur plusieurs types de vaisseaux, avec un rapport taille/puissance de feu différents.
                        Le jeu n'a pas de fin, l'objectif est de survivre aux nombreuses vagues, interrompues parfois par l'arrivée de boss destructeurs.
                    </p>
                </FadeIn>
            </div>

            <SeparationLine width="100%" delay="1.4s" duration="0.5s"/>

            <div className={styles.content}>
            </div>

            <FadeIn delay="1.7s" duration="0.5s">
                <BackToProjects nextProjectLink={cloneMonsterHunter}/>
            </FadeIn>

        </div>
    </>
);

StarWarsLegacy.propTypes = {};

export default StarWarsLegacy;