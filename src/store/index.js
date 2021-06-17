import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import { cityReducer } from './reducers/cityReducer'
import { favoriteCitiesReducer } from './reducers/favoriteCitiesReducer'
import { uiReducer } from './reducers/uiReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  cityReducer,
  favoriteCitiesReducer,
  uiReducer,
})

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
