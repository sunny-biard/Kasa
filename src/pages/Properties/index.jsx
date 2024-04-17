import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import Collapse from '../../components/Collapse';
import Slideshow from '../../components/Slideshow';
 
const PropertiesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px 0;
`

const FirstSectionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const PropertyDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    h1 {
        color: #FF6060;
        font-size: 36px;
        font-weight: 500px;
        margin: 0;
    }
    h3 {
        color: black;
        font-size: 18px;
        font-weight: 500px;
        margin: 0;
    }
`

const HostDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    img {
        width: 64px;
        height: 64px;
        object-fit: contain;
        border-radius: 50px;
        margin: 0;
        background-color: #C4C4C4;
    }
    p {
        width: 90px;
        text-align: end;
        color: #FF6060;
        font-size: 18px;
        font-weight: 500px;
    }
`

const SecondSectionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const StarsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
`

const TagsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    p {
        font-size: 14px;
        font-weight: 500;
        color: white;
        background-color: #FF6060;
        padding: 5px 20px;
        border-radius: 10px;
        margin: 0;
    }
`

const CollapsesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h1 {
        font-size: 18px;
        font-weight: 700;
    }
`

const StyledList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`

function Properties() {

    const location = useLocation();
    const state = location.state;

    const [property, setProperty] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/properties/${state.item.id}`)
            .then(response => response.json())
            .then(data => {
                setProperty(data);
                console.log(data);
            })
            .catch((error) => {
                console.error(error)
            });

    }, [state.item.id]);

    const rating = (n) => {
        
        let elements = [];
        let i;
        for(i = 0; i < n; i++){
            elements.push(<FontAwesomeIcon icon={faStar} color="#FF6060" size="xl" key={i}/>);
        }
        for(i; i < 5; i++){
            elements.push(<FontAwesomeIcon icon={faStar} color="#E3E3E3" size="xl" key={i}/>);
        }
        return elements;
    }

    return (

        <PropertiesWrapper>
            <Slideshow pictures={property.pictures} />
            <FirstSectionWrapper>
                <PropertyDiv>
                    <h1>{property.title}</h1>
                    <h3>{property.location}</h3>
                </PropertyDiv>
                <HostDiv>
                    <p>{property.host?.name}</p>
                    <img src={property.host?.picture ? property.host.picture : null} alt={property.host?.name}></img>
                </HostDiv>
            </FirstSectionWrapper>
            <SecondSectionWrapper>
                <TagsWrapper>
                    {property.tags?.map((tag, index) => (
                        <p key={index}>{tag}</p>
                    ))}
                </TagsWrapper>
                <StarsWrapper>{rating(property.rating).map(star => star)}</StarsWrapper>
            </SecondSectionWrapper>
            <CollapsesWrapper>
                <Collapse label={"Description"} width="45%">
                    <p>{property.description}</p>
                </Collapse>
                <Collapse label={"Équipements"} width="45%">
                    <StyledList>
                        {property.equipments?.map((equipment, index) => (
                        <li key={index}>
                            <p>{equipment}</p>
                        </li>
                    ))}
                    </StyledList>
                </Collapse>
            </CollapsesWrapper>
        </PropertiesWrapper>
    )
}

export default Properties