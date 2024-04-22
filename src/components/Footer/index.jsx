import styled from "styled-components"
import logo from "../../utils/images/logo.png";

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    padding-top: 40px;
    position: absolute;
    left: 0;
    width: 100%;
    margin-top: auto;

    @media (max-width: 768px) {
        padding: 75px 0;
    }
`

const StyledImg = styled.img`
    width: 122px;
    height: 40px;
    filter: brightness(0) invert(1);
`

const StyledP = styled.p`
    padding: 15px;
    color: white;
    text-decoration: none;
    text-align: center;
    font-weight: 500;
    font-size: 24px;

    @media (max-width: 768px) {
        width: 130px;
        font-size: 12px;
    }
`

function Footer() {
    return (
        <FooterWrapper>
            <StyledImg src={logo} alt="Logo Kasa"></StyledImg>
            <StyledP>© 2020 Kasa. All rights reserved</StyledP>
        </FooterWrapper>
    )
}

export default Footer