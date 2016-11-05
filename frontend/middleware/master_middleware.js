import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import WishlistMiddleware from './wishlist_middleware';
import WishlistDetailMiddleware from './wishlist_detail_middleware';

export default applyMiddleware(
  SessionMiddleware,
  WishlistMiddleware,
  WishlistDetailMiddleware
);
