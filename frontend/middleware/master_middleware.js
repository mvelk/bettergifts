import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import WishlistMiddleware from './wishlist_middleware';
import WishlistDetailMiddleware from './wishlist_detail_middleware';
import ProductMiddleware from './product_middleware';
import FriendsMiddleware from './friends_middleware';

export default applyMiddleware(
  SessionMiddleware,
  WishlistMiddleware,
  ProductMiddleware,
  FriendsMiddleware,
  WishlistDetailMiddleware
);
