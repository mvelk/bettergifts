# BetterGifts

[BetterGifts][bettergifts] is a full-stack web app inspired by years of re-gifted Christmas presents and forgotten birthdays.  It runs Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.
[bettergifts]: http://bettergifts.herokuapp.com


## Features & Implementation

BetterGifts transforms special occasions from awkward to awesome by ensuring friends and family know exactly what you want while avoiding duplicate gifts and maintaining the element of surprise.

### Wishlist Creation

Create wishlists for birthdays, anniversaries, graduations, holidays and more.

Wishlists are automatically shared with your friends so there's no need to share links manually.

### Wishlist Item Creation

Add products to your wishlists and comment to let your friends know what you were thinking.

### Product Search

![Main View](/product-search.png)

Pulls from Amazon's 200+ million item product database using the AWS Product Advertising API. Saves items to local product database only when users save them to a wishlist.

### Friends

![Main View](/friends.png)

Gift giving is social by nature. Bettergifts makes finding and managing your friends simple with live search and a clean friends dashboard.

## Future Directions for the Project

There's more in store for BetterGifts! Future features will include:

### Email Reminders

While BetterGifts users can currently keep track of upcoming events and gifts to buy in the app, that's not always the best place to keep in touch with them. A future iteration of the app will use SendGrid to push email reminders in advance of upcoming wishlist events that users have subscribed to.

### ~~Gift Recommendations~~ *Completed*

~~I also plan to add a gift recommendation engine based on items added to past wishlists. This functionality will take advantage of the robust item similarity queries provided by Amazon's Product Advertising API.~~

### Add to Cart

In future, users will be able to push items directly to their Amazon shopping cart without leaving the app. This feature will allow potential monetization of the product, as Amazon provides referral revenue for all products purchased this way.
