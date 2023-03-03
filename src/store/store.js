import { configureStore } from '@reduxjs/toolkit'
import labyrinthReducer from './reducers/labyrinthSlice'


export const store = configureStore({
  reducer: {
    labyrinth: labyrinthReducer
  },
})