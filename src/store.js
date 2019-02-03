import {createStore,combineReducers,compose, applyMiddleware} from 'redux';
import dataReducer from './redux/Data/reducer';
import authReducer from './redux/Auth/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    data: dataReducer,
    auth:authReducer
});


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
    )
    )

export default store;