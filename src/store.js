import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';
// import userReducer from './reducers/userReducer'
// import authReducer from './reducers/authReducer';

const initialState = {};
const middleware = [thunk];

// const store = createStore(authReducer, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware) , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
// const store = createStore(userReducer, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
// console.log(store.getState());

export const persistor = persistStore(store);
export default {store, persistor};

