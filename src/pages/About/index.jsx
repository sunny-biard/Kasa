import styled from "styled-components"
import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"
import backgroundImg2 from "../../utils/images/backgroundImg2.jpg"

const AboutWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 30px;
`

const CollapseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

function About() {
 
    return (
        <AboutWrapper>
            <Banner backgroundimg={backgroundImg2}/>
            <CollapseWrapper>
                <Collapse label={"Fiabilité"} width="90%">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </Collapse>
                <Collapse label={"Respect"} width="90%">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collapse>
                <Collapse label={"Service"} width="90%">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collapse>
                <Collapse label={"Sécurité"} width="90%">
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards soient bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </Collapse>
            </CollapseWrapper>
        </AboutWrapper>
    )
}

export default About