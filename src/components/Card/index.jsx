import styled from 'styled-components'
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

const CardsWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 50px;
    border-radius: 25px;
    background-color: #F6F6F6;
    padding: 60px;

    @media (max-width: 768px) {
        background-color: white;
        padding: 0;
      }
`

const CardContent = styled(Link)`
    position: relative;
    width: 340px;
    height: 340px;
    border-radius: 25px;
    background-image: linear-gradient(to bottom, #ff4141, #f94040, #f34040, #ed3f3f, #e73e3e);
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
        border-radius: 25px;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
        background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
    }
    p {
        color: white;
        font-size: 18px;
        font-weight: 600;
        position: absolute;
        left: 20px;
        bottom: 0;
        width: 80%;
        text-shadow: 0 3px 10px black;
    }

    @media (max-width: 768px) {
        width: 100%;
      }
`

function Card() {
    
    const [properties, setProperties] = useState([]);
    const [isDataLoading, setDataLoading] = useState(true);
 
    useEffect(() => {
        fetch('http://localhost:8080/api/properties/')
            .then(response => response.json())
            .then(data => {
                setProperties(data);
                setDataLoading(false);
            })
            .catch((error) => {
                console.error(error)
            });

    }, []);

    if(isDataLoading){
        
        return (
            <CardsWrapper>
                <CardContent>
                    <p>Titre de la location</p>
                </CardContent>
                <CardContent>
                    <p>Titre de la location</p>
                </CardContent>
                <CardContent>
                    <p>Titre de la location</p>
                </CardContent>
                <CardContent>
                    <p>Titre de la location</p>
                </CardContent>
                <CardContent>
                    <p>Titre de la location</p>
                </CardContent>
                <CardContent>
                    <p>Titre de la location</p>
                </CardContent>
            </CardsWrapper>
        )
    }
 
    return (
        <CardsWrapper>
            {properties.map(item => (
                <CardContent key={item.id} to="/properties" state={{ item }}>
                    <img src={item.cover} alt={item.description}></img>
                    <p>{item.title}</p>
                </CardContent>
            ))}
        </CardsWrapper>
    );
}
 
export default Card