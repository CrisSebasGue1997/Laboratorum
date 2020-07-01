import { createStore , combineReducers ,applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import {postReducer,
    specialityReducer,
    teacherReducer,
    fragmentReducer} from './reducers';

export default createStore(
    combineReducers({ postReducer,
    specialityReducer,
    teacherReducer,
    fragmentReducer}
   ),
    composeWithDevTools(applyMiddleware(thunk))
    )
