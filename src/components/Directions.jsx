import React from 'react'
import styled from 'styled-components'
import img from '../assets/icons/arrow.png'
import { v4 as uuidv4 } from 'uuid';

const DirectionsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
    width: ${({size}) => 64 * size}px;
`
const DirectionWrapper = styled.img`
    display: flex;
    width: ${({size}) => 64 * size / 5}px;
    height: ${({size}) => 64 * size / 5}px;
    transform: ${({direction}) => {
        if (direction === 0) return 'rotate(-90deg)'
        if (direction === 2) return 'rotate(90deg)'
        if (direction === 3) return 'rotate(180deg)'
        return null
    }};
    animation: myanimation ${({delay}) => delay}s ease-in-out;
    opacity: 0.9;
    @keyframes myanimation {
    0%   { opacity: 0; }
    100% { opacity: 0.9; }
    }
`

const Directions = ({ directions, size }) => {

    return (
        <DirectionsWrapper size={size}>
            {directions && directions.map((direction, i) => {
                return  <DirectionWrapper src={img} alt="direction" direction={direction} key={uuidv4()} delay={i * 0.5} size={size} />
            })}
        </DirectionsWrapper>
    )
    
}

export default Directions
