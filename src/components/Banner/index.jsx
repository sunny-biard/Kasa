import styled from 'styled-components'

const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.5), 
    rgba(0, 0, 0, 0.5)
    ),url(${props => props.$backgroundImg});
  background-position: 50% 50%;
  background-size: cover;
  height: 220px;
  h1 {
    padding: 0 20px;
    color: white;
    font-size: 48px;
    font-weight: 700;
    text-shadow: 1px 1px 2px black;
  }

  @media (max-width: 768px) {
    height: 110px;
    h1 {
      font-size: 24px;
    }
  }
`

function Banner({message, backgroundImg}) {

    return (
        <BannerWrapper $backgroundImg={backgroundImg}>
            <h1>{message}</h1>
        </BannerWrapper>
    )
}

export default Banner