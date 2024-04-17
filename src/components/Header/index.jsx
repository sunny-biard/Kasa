import { NavLink } from 'react-router-dom'
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

const StyledNavLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    font-weight: 500;
    font-size: 24px;
    &.active {
        text-decoration : underline;
    }
`

function Header() {

    return (
        <HeaderWrapper>
            <StyledImg src={logo} alt="Logo Kasa"></StyledImg>
            <StyledNav>
                <StyledNavLink to="/">Accueil</StyledNavLink>
                <StyledNavLink to="/about">A Propos</StyledNavLink>
            </StyledNav>
        </HeaderWrapper>
    )
}

export default Header