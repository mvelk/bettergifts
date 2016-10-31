import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import MasterMiddleware from '../middleware/master_middleware';

export default (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    MasterMiddleware
  )
);
