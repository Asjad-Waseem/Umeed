import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';

const initialState = {};
const middleware = [thunk];

export const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware));

export const persistor = persistStore(store);
export default {store, persistor};

