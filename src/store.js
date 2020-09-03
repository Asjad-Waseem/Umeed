import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';

const initialState = {};
const middleware = [thunk];

let enhancer;

 if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(...middleware);
  } else {
    enhancer = compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop
    );
  }

export const store = createStore(rootReducer, initialState, enhancer);

export const persistor = persistStore(store);
export default {store, persistor};

