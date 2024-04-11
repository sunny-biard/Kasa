import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../utils/images/logo.png';

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 35px 0;
`

const StyledImg = styled.img`
    width: 210px;
    height: 68px;
`

const StyledNav = styled.nav`
    display: flex;
    gap: 60px;
`

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-weight: 500;
    font-size: 24px;
`

function Header() {
    return (
        <HeaderWrapper>
            <StyledImg src={logo} alt="Logo Kasa"></StyledImg>
            <StyledNav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/about">A Propos</StyledLink>
            </StyledNav>
        </HeaderWrapper>
    )
}

export default Header