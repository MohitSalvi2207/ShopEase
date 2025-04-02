import { configureStore } from '@reduxjs/toolkit'
import { CartSlice } from '../features/CartSlice'
import LoginSlice from '../features/LoginSlice'

export const store = configureStore({
  reducer: {
    Cart:CartSlice.reducer,
    Login:LoginSlice,
  },
})

