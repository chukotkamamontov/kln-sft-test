import React, { useState } from 'react'
import Cell from './Cell';
import Modal from './Modal'
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const BoardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: calc(64px * ${({size}) => size});
  height: calc(64px *  ${({size}) => size});
`

const Board = ({board, start, finish, restart}) => {

  const size = useSelector(state => state.labyrinth.size)
  const [isOpen, setIsOpen] = useState(true) 
  const [status, setStatus] = useState('')

  const changeStatus = (newStatus) => {
    setStatus(newStatus);
    setIsOpen(true)
  }

  const handleClose = () => {
    restart(size)
    setIsOpen(false);
  }

  return (
    <BoardWrapper size={size}>
        {board && board.map((row, y) => row.map((cell, x) => {
          return <Cell key={`${x}-${y}`} data={board} isStart={x === start?.x &&  y === start?.y } isFinish={x === finish?.x &&  y === finish?.y} changeStatus={changeStatus}  />
        }))}
        <Modal isOpen={isOpen} onClose={handleClose} status={status}/>
    </BoardWrapper>
  )
}

export default Board