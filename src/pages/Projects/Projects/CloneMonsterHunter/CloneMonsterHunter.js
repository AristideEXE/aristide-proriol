import BackToProjects from "../../../../components/BackToProjects/BackToProjects";
import FadeIn from "../../../../components/FadeIn/FadeIn";
import SeparationLine from "../../../../components/SeparationLine/SeparationLine";
import Title from "../../../../components/Title/Title";
import styles from "./CloneMonsterHunter.module.css";
import Menu from "./Images/Menu.png";
import Blacksmith from "./Images/Blacksmith.png";
import Lobby from "./Images/Lobby.png";
import Fight from "./Images/Fight.png";

const CloneMonsterHunter = () => (
    <>
        <div className={styles.project}>
            <Title 
                title="Clone de Monster Hunter" 
                afterTitle={<BackToProjects/>}
            />
            
            <div className={styles.content}>
                <FadeIn delay="0.5s" duration="0.5s">
                    <p>
                        Monster Hunter New World est un réplique textuelle de Monster Hunter.
                        Le jeu a été développé dans le cadre d'une SAE (Situation d'Apprentissage et d'Évaluation) lors de la 1ere année de BUT Informatique.
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
                            <p>2021</p>
                            <p>C#</p>
                            <p>Alternance chez Atol Conseils et Développements</p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay="1.1s" duration="0.5s">
                    <p>
                        L'ojectif du jeu est de reproduire de manière textuelle le jeu Monster Hunter : dans Monster Hunter New World, vous pouvez créer votre personnage, combattre des
                        monstres, forger des armes et devenir le guerrier le plus puissant !
                    </p>
                </FadeIn>
            </div>

            <SeparationLine width="100%" delay="1.4s" duration="0.5s"/>

            <div className={styles.content}>
                <FadeIn delay="1.7s" duration="0.5s">
                    <p>Lorsque l'on lance le jeu, on arrive sur le menu principal. Afin de naviguer entre les menus, il faut écrire un chiffre puis appuyer sur Entrée.
                    </p>
                </FadeIn>
                <FadeIn delay="2.0s" duration="0.5s">
                    <img src={Menu} />
                </FadeIn>
                
                <FadeIn delay="2.3s" duration="0.5s">
                    <p>Une fois notre personnae créé, nous avons accès à la ville de Monster Hunter New World. D'ici, nous pouvons nous diriger dans les différentes parties du jeu :</p>
                    <ul>
                        <li>La chambre : elle permet de se reposer pour regagner de la vie et de choisir ses équipements</li>
                        <li>La forge : elle permet de créer des armes et des armures à partir des matériaux que nous possédons</li>
                        <li>Le marchand : il permet d'acheter des objets comme des potions ou de vendre les matériaux récoltés</li>
                        <li>La cantine : elle permet de concocter des repas à utiliser durant les combats afin de gagner des bonus</li>
                        <li>L'expédition : elle permet d'aller combattre les monstres de Monster Hunter New World</li>
                    </ul>
                </FadeIn>
                <FadeIn delay="2.6s" duration="0.5s">
                    <img src={Lobby} />
                </FadeIn>

                <FadeIn delay="2.9s" duration="0.5s">
                    <p>Lors d'une expédition, nous sommes confrontés à des montres de plus en plus impressionnants suivant leur niveau.
                    </p>
                </FadeIn>
                <FadeIn delay="3.2s" duration="0.5s">
                    <img src={Fight} />
                </FadeIn>
            </div>

            <FadeIn delay="3.5s" duration="0.5s">
                <BackToProjects />
            </FadeIn>

        </div>
    </>
);

CloneMonsterHunter.propTypes = {};

export default CloneMonsterHunter;