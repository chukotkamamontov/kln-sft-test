import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const CellWrapper = styled.div`
.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  background-color: #fff;
  border: 1px solid grey;
}
.cell:hover {
  background-color: #458ee1;  
  transition: all 600ms;
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
      <div className='cell'>
      {result && <div>{result}</div>}
      </div>
    </CellWrapper>
  )
}

export default Cell