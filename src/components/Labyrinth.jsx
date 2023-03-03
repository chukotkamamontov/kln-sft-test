import React, { useEffect } from 'react'
import Board from './Board'
import Directions from './Directions'
import { useLabyrinthData } from '../hooks/useLabyrinthData'
import {  useSelector } from 'react-redux'

import styled from 'styled-components'

const LabyrinthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 50px auto;
  padding: 50px;
  background-color: rgb(239, 68, 68);
  border-radius: 6px;
`

const Labyrinth = () => {
  
  const { size, isStarted} = useSelector(state => state.labyrinth)
  const {matrix, start, restart, directions, finish} = useLabyrinthData(size)
  
  useEffect(() => {
    if (isStarted) restart(size)
  }, [size, restart, isStarted])

  return (
    <LabyrinthWrapper>
      <Board board={matrix} start={start} finish={finish} directions={directions} restart={restart} />
      <Directions directions={directions} size={size}/>
    </LabyrinthWrapper>
  )
}

export default Labyrinth