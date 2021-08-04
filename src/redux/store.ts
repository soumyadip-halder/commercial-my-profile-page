import {createStore,combineReducers,applyMiddleware} from 'redux'
import toggleReducer from './formodal/reducer'
import toggleReducerapp from './approve/reducer'
import toggleReducerNotify from './notify/reducer'
import logger from 'redux-logger'

const reducer=combineReducers({
    toggleReducer:toggleReducer,
    toggleReducerApp:toggleReducerapp,
    toggleReducerNotify:toggleReducerNotify
})

const store=createStore(reducer,applyMiddleware(logger))

export default store