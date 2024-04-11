import styled from 'styled-components'
import backgroundImg from '../../utils/images/backgroundImg.jpg'
import Card from '../../components/Card'

const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 30px;
`

const TitleSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.5), 
    rgba(0, 0, 0, 0.5)
    ),url(${backgroundImg});
  background-position: 50% 50%;
  background-size: cover;
  height: 220px;
  h1 {
    color: white;
    font-size: 48px;
    font-weight: 700;
    text-shadow: 1px 1px 2px black;
  }
`

const CardsWrapper = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-between;
gap: 50px;
border-radius: 25px;
background-color: #F6F6F6;
padding: 60px;
`

function Home() {
  return (
    <HomeWrapper>
      <TitleSectionWrapper>
        <h1>Chez vous, partout et ailleurs</h1>
      </TitleSectionWrapper>
      <CardsWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsWrapper>
    </HomeWrapper>
  )
}

export default Home