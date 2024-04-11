import styled from 'styled-components'
import React, { useState, useEffect } from "react";

const CardContent = styled.article`
 position: relative;
 width: 340px;
 height: 340px;
 border-radius: 10px;
 background-image: linear-gradient(to bottom, #ff4141, #f94040, #f34040, #ed3f3f, #e73e3e);
 p {
   color: white;
   font-size: 18px;
   font-weight: 600;
   position: absolute;
   left: 20px;
   bottom: 0;
   width: 25%;
 }
`

function Card() {

    //const [houses, setHouses] = useState({})

    useEffect(() => {
        fetch(`http://localhost:8080/api/properties`)
             .then((response) => response.json()
             .then(({ houses }) => console.log(houses))
             .catch((error) => console.error(error))
         )
    }, [])
    
    return (
        <CardContent>
            <p>Titre de la location</p>
        </CardContent>
    )
}
 
export default Card