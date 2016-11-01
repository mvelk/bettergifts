## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Sidebar

**WishlistsContainer**
 - WishlistsHeader
  * WishlistsIndex

**ProductsContainer**
 - Search
 - Filter (Tags)
 - ProductsIndex
    - ProductsIndexItem

**FriendsContainer**
 - FriendsHeader
  + FriendsIndex

**WishlistIndex**
 - WishlistIndexItem
  + WishlistDetail
    - Image
    - Add/Delete Heart
    - Product Info
    - Tags
      - Tag
    * Item

**NewWishlistContainer**
 - NewWishlist
  - Inputs
  - NewListButton

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/item/:itemId" | "ItemsContainer" |
| "/home/wishlist/:wishlistId/item/:itemId" | "WishlistContainer" |
| "/home/friends/:friendId/wishlists/:wishlistId" | "FriendsContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-wishlist" | "NewNoteContainer" |
| "/search" | "Search" |
| "/new-product" | "NewProduct" |
| "/new-tag" | "NewTag" |
| "/tag-search" | "TagSearch" |
| "/product-search" | "ProductSearch" |
