import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  size: 3,
  isStarted: false
}

export const labyrinthSlice = createSlice({
  name: 'labyrinth',
  initialState,
  reducers: {
    changeSize: (state, action) => {
      state.size = action.payload
      state.isStarted = true
    }
  },
})

export const { changeSize } = labyrinthSlice.actions

export default labyrinthSlice.reducer