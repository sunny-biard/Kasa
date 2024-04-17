import styled from "styled-components";
import ArrowLeft from "../../utils/images/arrow-left.png"
import ArrowRight from "../../utils/images/arrow-right.png"
import { useState } from "react";

const SlideWrapper = styled.div`
    position: relative;
`

const StyledImg = styled.img`
    display: ${props => props.display};
    width: 100%;
    height: 415px;
    object-fit: cover;
    border-radius: 25px;
    margin: 0;
`

const StyledP = styled.p`
    position: absolute;
    font-size: 18px;
    font-weight: 500;
    color: white;
    text-align: center;
    bottom: 0;
    left: 50%;
`

const StyledArrowLeft = styled.img`
    position: absolute;
    color: white;
    left: 0;
    top: 40%;
    width: 80px;
    height: 80px;
    &:hover {
        cursor: pointer;
    }
`

const StyledArrowRight = styled.img`
    position: absolute;
    color: white;
    right: 0;
    top: 40%;
    width: 80px;
    height: 80px;
    &:hover {
        cursor: pointer;
    }
`

const Slideshow = (props) => {

    const [current, setCurrent] = useState(0);
    const length = props.pictures?.length;

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    if(length === 1){

        return (
            <SlideWrapper>
                {props.pictures?.map((picture, index) => (
                    <StyledImg src={picture} alt={picture} key={index}></StyledImg>
                ))}
                <StyledP>1/1</StyledP>
            </SlideWrapper>
        )
    }

    return (
        <SlideWrapper>
            <StyledArrowLeft src={ArrowLeft} alt="flèche gauche" onClick={prevSlide}></StyledArrowLeft>
            {props.pictures?.map((picture, index) => (
                <StyledImg src={picture} alt={picture} key={index} display={index === current ? "flex" : "none"}></StyledImg>
            ))}
            <StyledP>{current + 1}/{length}</StyledP>
            <StyledArrowRight src={ArrowRight} alt="flèche droite" onClick={nextSlide}></StyledArrowRight>
        </SlideWrapper>
    )
}

export default Slideshow