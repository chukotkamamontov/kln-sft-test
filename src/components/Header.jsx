import React from 'react'
import { useDispatch } from 'react-redux'
import styled  from 'styled-components'
import { changeSize } from '../store/reducers/labyrinthSlice'

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    padding: 20px;
    border-bottom: 1px solid #969faf;
    color: #fff;
`

const Header = () => {
    const dispatch = useDispatch()

    const selectChangeHandler = (event) => {
        dispatch(changeSize(event.target.value))
    }

    return (
        <HeaderWrapper>
                <div>labytinth</div>
                <div>
                    <select onChange={selectChangeHandler} name="size">
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
        </HeaderWrapper>
    )
}

export default Header