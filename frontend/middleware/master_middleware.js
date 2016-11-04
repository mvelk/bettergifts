import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import WishlistMiddleware from './wishlist_middleware';

export default applyMiddleware(
  SessionMiddleware,
  WishlistMiddleware
);
