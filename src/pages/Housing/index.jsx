import styled from 'styled-components'
 
const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`

function Housing() {
    return (
        <div>
            <h1>Logement</h1>
            <CardsContainer>
            </CardsContainer>
        </div>
    )
}

export default Housing