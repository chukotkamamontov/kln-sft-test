import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  size: 3
}

export const labyrinthSlice = createSlice({
  name: 'labyrinth',
  initialState,
  reducers: {
    changeSize: (state, action) => {
      state.size = action.payload
    }
  },
})

export const { changeSize } = labyrinthSlice.actions

export default labyrinthSlice.reducer