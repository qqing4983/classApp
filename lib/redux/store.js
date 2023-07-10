/* Core */
import {
  configureStore,
 
} from '@reduxjs/toolkit'
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from 'react-redux'

/* Instruments */
import { reducer } from './rootReducer'
const configureStoreDefaultOptions = { reducer }

export const makeReduxStore = (
  options= configureStoreDefaultOptions
) => {
  const store = configureStore(options)

  return store
}

export const reduxStore = configureStore({
  reducer,
})
export const useDispatch = () => useReduxDispatch()
export const useSelector = useReduxSelector


