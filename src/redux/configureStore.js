import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { products } from './products'
import { modal } from './modal'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products,
            modal
        }),
        applyMiddleware(thunk, logger)
    )

    return store
}