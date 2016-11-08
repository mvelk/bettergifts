import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import SplashContainer from './splash/splash_container';
import WishlistIndexContainer from './wishlist_index/wishlist_index_container';
import WishlistShowContainer from './wishlist_show/wishlist_show_container';
import ProductsSearchContainer from './products/products_search_container';
import FriendsIndexContainer from './friends/friends_index_container';

// Hacky material UI fix for React, will be deprecated once
// Material UI included in React
import injectTapEventPlugin from 'react-tap-event-plugin';

import { fetchWishlistDetail } from '../actions/wishlist_detail_actions';

// Material UI dependencies
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  blue500, blue700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

import { fade } from 'material-ui/utils/colorManipulator';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// customizations to default Material UI theme
// refer to docs http://www.material-ui.com/#/customization/themes
const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
  },
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: blue500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  }
});

//<Route path="/wishlists/:wishlistId" component={WishlistShowContainer} onEnter={requestWishlistDetailOnEnter} />

const Root = ({ store }) => {

  const requestWishlistDetailOnEnter = nextState => {
		store.dispatch(fetchWishlistDetail(nextState.params.wishlistId));
	};
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={SplashContainer} />
            <Route path="/wishlists/:slideIndex" component={WishlistIndexContainer} />
            <Route path="/wishlist/:wishlistId" component={WishlistShowContainer} />
            <Route path="/products" component={ProductsSearchContainer} />
            <Route path="/friends" component={FriendsIndexContainer} />
          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
};

export default Root;
