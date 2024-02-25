import BackToProjects from "../../../../components/BackToProjects/BackToProjects";
import FadeIn from "../../../../components/FadeIn/FadeIn";
import SeparationLine from "../../../../components/SeparationLine/SeparationLine";
import Title from "../../../../components/Title/Title";
import styles from "./FactoryLand.module.css";
import Menu from "./Images/Menu.png";
import Game from "./Images/Game.png";
import V1 from "./Images/V1.png";
import { irdDispositifs } from "../../../../routes";

const FactoryLand = () => (
    <>
        <div className={styles.project}>
            <Title 
                title="Factory Land" 
                afterTitle={<BackToProjects nextProjectLink={irdDispositifs}/>}
            />
            
            <div className={styles.content}>
                <FadeIn delay="0.5s" duration="0.5s">
                    <p>
                        Factory Land est un jeu d'usinage où les joueurs explorent, récoltent des ressources et construisent des 
                        machines pour automatiser la production, le tout dans un univers charmant au style artistique de pâte à modeler.
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
                            <p>Unreal Engine 5 - Blueprints</p>
                            <p>Projet personnel</p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay="1.1s" duration="0.5s">
                    <p>
                        Factory Land est toujours en cours de développement. Ainsi, les images présentées ne représentent pas l'état final du jeu. 
                        <br/>
                        Merci de votre compréhension.
                    </p>
                </FadeIn>
            </div>

            <SeparationLine width="100%" delay="1.4s" duration="0.5s"/>

            <div className={styles.content}>
                <FadeIn delay="1.7s" duration="0.5s">
                    <p>
                        Image de promotion de la version 0.1 du jeu
                    </p>
                </FadeIn>

                <FadeIn delay="2s" duration="0.5s">
                    <img src={V1} />
                </FadeIn>
                
                <FadeIn delay="2.3s" duration="0.5s">
                    <p>
                        Image de gameplay actuel
                    </p>
                </FadeIn>

                <FadeIn delay="2.6s" duration="0.5s">
                    <img src={Game} />
                </FadeIn>

                <FadeIn delay="2.9s" duration="0.5s">
                    <p>
                        Menu actuel du jeu
                    </p>
                </FadeIn>

                <FadeIn delay="3.2s" duration="0.5s">
                    <img src={Menu} />
                </FadeIn>
            </div>

            <FadeIn delay="3.5s" duration="0.5s">
                <BackToProjects nextProjectLink={irdDispositifs}/>
            </FadeIn>
        </div>
    </>
);

FactoryLand.propTypes = {};

export default FactoryLand;