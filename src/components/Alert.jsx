import React from 'react'
import failImg from '../assets/icons/fail.png'
import victoryImg from '../assets/icons/victory.png'
import styled from 'styled-components'
import startImg from '../assets/icons/start.png'


const AlertWrapper = styled.div`
    height: 40px;
    width: 50px;
`

const Alert = ({ status }) => {
    
    return (
        <AlertWrapper>
            <img src={status === 'FAIL' ? failImg : status === 'VICTORY' ? victoryImg : startImg} alt={status} />
        </AlertWrapper>
    )
}

export default Alert