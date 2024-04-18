import styled from "styled-components"
import { Link } from 'react-router-dom'

const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #FF6060;
    gap: 100px;
    h1 {
        font-size: 250px;
        font-weight: 700;
        margin: 0;
    }
    h3 {
        font-size: 36px;
        font-weight: 500;
        margin: 0;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 96px;
        }
        h3 {
            font-size: 18px;
        }

    }
`

const StyledLink = styled(Link)`
    color: black;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    text-decoration: underline;
    padding-bottom: 100px;  
`

function Error() {
    return (
        <ErrorWrapper>
            <h1>404</h1>
            <h3>Oups ! La page que vous demandez n'existe pas.</h3>
            <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
        </ErrorWrapper>
    )
}
 
export default Error