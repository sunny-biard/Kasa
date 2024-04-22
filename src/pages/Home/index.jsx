import styled from "styled-components"
import Card from "../../components/Card"
import Banner from "../../components/Banner"
import backgroundImg from "../../utils/images/backgroundImg.jpg"

const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 30px;
`

function Home() {

  return (
    <HomeWrapper>
      <Banner message={"Chez vous, partout et ailleurs"} backgroundimg={backgroundImg}/>
      <Card />
    </HomeWrapper>
  )
}

export default Home