'use client'

/* Core */
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counterSlice'
import { middleware } from './slices/middleware'
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware)
  },
})
export const Providers = (props) => {
  return <Provider store={store}>{props.children}</Provider>
}
