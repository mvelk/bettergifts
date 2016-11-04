import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ModalsReducer from './modals_reducer';
import WishlistReducer from './wishlist_reducer';
export default combineReducers({
  session: SessionReducer,
  modals: ModalsReducer,
  wishlists: WishlistReducer
});
