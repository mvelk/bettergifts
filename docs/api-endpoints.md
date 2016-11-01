# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users/:id/friends`
  - index of all friends for a user
- `GET /api/users/:id/events`
  - index of all events for a user
- `GET /api/users/:id/wishlists`
  - index of all wishlists for a user

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Wishlists

- `GET /api/wishlists`
- `POST /api/wishlists`
- `GET /api/wishlists/:id`
- `PATCH /api/wishlists/:id`
- `DELETE /api/wishlists/:id`
- `GET /api/wishlists/:id/items`
  - index of all items for a wishlist

### Products

- `GET /api/products`
- Products index/search
- permits 'name', 'price', 'shortdesc' and 'tag_id' query params for filtering
- permits pagination params
- `POST /api/products`
- `GET /api/products/:id`
- `PATCH /api/products/:id`
- `DELETE /api/products/:id`

### Tags

- A product's tags will be included in the product show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/products/:product_id/tags`: add tag to product by name
- `DELETE /api/products/:product_id/tags/:tag_name`: remove tag from product by name
