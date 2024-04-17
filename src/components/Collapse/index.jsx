import styled from 'styled-components';
import React, { useState } from 'react';
import Arrow from '../../utils/images/collapse-up.png';

const CollapseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.width};
`

const CollapseArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #FF6060;
    padding: 0 20px;
    height: 50px;
    h1 {
        color: white;
    }
    button {
        background-color: transparent;
        border: none;
        color: white;
        text-align: center;
        text-decoration: none;
    }
`

const CollapseMessage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    padding: 0 20px;
    background-color: #F6F6F673;
`

const CollapseIcon = styled.img`
    width: 32px;
    height: 32px;
    transition: transform 0.25s ease 0s; 
    ${(props) => props.open &&
    `
      transform: rotate(-180deg);
    `
    }
    &:hover {
        cursor: pointer;
    }
`

const Collapse = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <CollapseWrapper width={props.width}>
            <CollapseArea>
                <h1>{props.label}</h1>
                <button onClick={() => setOpen(!open)}><CollapseIcon src={Arrow} alt="Bouton flèche" open={open ? true : false}/></button>
            </CollapseArea>
            {open && ( <CollapseMessage open={open ? true : false}>{props.children}</CollapseMessage>)}
        </CollapseWrapper>
    )
}

export default Collapse