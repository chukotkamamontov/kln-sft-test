import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const CellWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  background-color: #fff;
  border: 1px solid grey;
  &:hover {
    background-color: #458ee1;  
    transition: all 600ms;
  }
  .title {
    position: relative;
    top: 0px;
    background-color: #458ee1;
    animation: cell 1500ms ease-in-out;
    @keyframes cell {
      0%   { top: 20px; }
      100% { top: 0px; }
    }
}
`

const Cell = ({ data, isStart, isFinish, changeStatus}) => {

  const [result, setResult] = useState(isStart ? 'start' : null);

  useEffect(() => {
    setResult(isStart ? 'start' : null)
  }, [data, isStart])
  

  const showResult = () => {
    const newResult = isFinish ? 'VICTORY' : "FAIL"
    changeStatus(newResult)
    setResult(newResult)
  }

  return (
    <CellWrapper onClick={showResult}>
        {result && <div className='title'>{result}</div>}
    </CellWrapper>
  )
}

export default Cell