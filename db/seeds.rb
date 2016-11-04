# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'Date'

User.create({ username: "demo-login", email: "demo-account@lavabit.com", password: "password123"})
User.create({ username: "winston", email: "ilovecorgis@gmail.com", password: "password123"})
User.create({ username: "micah", email: "ilovehugs@gmail.com", password: "password123"})
User.create({ username: "mickey", email: "iloveespresso@gmail.com", password: "password123"})


Wishlist.create({ wisher_id: 2, title: "Christmas", event_date: Date.parse("5-10-2016"), description: "Xmas 2016 in St. Louis", image_url: "https://i.ytimg.com/vi/Sy1Qlxgo2ek/maxresdefault.jpg"})
Wishlist.create({ wisher_id: 3, title: "Christmas", event_date: Date.parse("25-12-2016"), description: "Xmas 2016 in St. Louis", image_url: "https://i.ytimg.com/vi/Sy1Qlxgo2ek/maxresdefault.jpg"})

Product.create({name: "Babolat Pure Drive Wimbledon", price: 199.00, short_desc: "An iconic racquet with a massive following in a sleek Wimbledon cosmetic celebrating the oldest gram slam. The Pure Drive delivers the kind of maneuverability, power, accuracy and spin that appeals to everyone from strong beginners to the professional ranks. Headsize: 100 in². String Pattern: 16x19. Standard Length.", full_desc: "One of the game's most versatile and popular racquets gets a Wimbledon makeover! Like its predecessor, this version of the Pure Drive offers the kind of power, precision and mobility that should appeal to everyone from strong beginners to the professional ranks. Although it compliments a truly impressive range of playing styles, the Pure Drive reserves its greatest charm for aggressive baseliners who like to dictate action with pace and spin. New to this version is FSI Technology. This feature not only lifts the sweetspot but also tightens the spaces between the upper cross strings to give players a more responsive contact zone. From the baseline the Pure Drive delivers a lethal combination of power and spin. The fast feel and predictable response on full swings lend themselves perfectly to the powerful angular whip of the modern forehand. At net the Pure Drive's speed and put-away power make it a true weapon for aggressive doubles players, a fact not lost on the many ATP and WTA players who have used the Pure Drive. Ultimately this update is a fine addition to one of the game's most versatile and user-friendly player's racquets.", image_url: "http://img.tennis-warehouse.com/watermark/rs.php?path=BPDW-1.jpg&nw=350"})
Product.create({name: "Babolat Pure Drive French Open", price: 199.00, short_desc: "An iconic racquet with a massive following in a sleek Wimbledon cosmetic celebrating the oldest gram slam. The Pure Drive delivers the kind of maneuverability, power, accuracy and spin that appeals to everyone from strong beginners to the professional ranks. Headsize: 100 in². String Pattern: 16x19. Standard Length.", full_desc: "One of the game's most versatile and popular racquets gets a Wimbledon makeover! Like its predecessor, this version of the Pure Drive offers the kind of power, precision and mobility that should appeal to everyone from strong beginners to the professional ranks. Although it compliments a truly impressive range of playing styles, the Pure Drive reserves its greatest charm for aggressive baseliners who like to dictate action with pace and spin. New to this version is FSI Technology. This feature not only lifts the sweetspot but also tightens the spaces between the upper cross strings to give players a more responsive contact zone. From the baseline the Pure Drive delivers a lethal combination of power and spin. The fast feel and predictable response on full swings lend themselves perfectly to the powerful angular whip of the modern forehand. At net the Pure Drive's speed and put-away power make it a true weapon for aggressive doubles players, a fact not lost on the many ATP and WTA players who have used the Pure Drive. Ultimately this update is a fine addition to one of the game's most versatile and user-friendly player's racquets.", image_url: "http://img.tennis-warehouse.com/watermark/rs.php?path=BPDW-1.jpg&nw=350"})
Product.create({name: "Babolat Pure Drive", price: 199.00, short_desc: "An iconic racquet with a massive following in a sleek Wimbledon cosmetic celebrating the oldest gram slam. The Pure Drive delivers the kind of maneuverability, power, accuracy and spin that appeals to everyone from strong beginners to the professional ranks. Headsize: 100 in². String Pattern: 16x19. Standard Length.", full_desc: "One of the game's most versatile and popular racquets gets a Wimbledon makeover! Like its predecessor, this version of the Pure Drive offers the kind of power, precision and mobility that should appeal to everyone from strong beginners to the professional ranks. Although it compliments a truly impressive range of playing styles, the Pure Drive reserves its greatest charm for aggressive baseliners who like to dictate action with pace and spin. New to this version is FSI Technology. This feature not only lifts the sweetspot but also tightens the spaces between the upper cross strings to give players a more responsive contact zone. From the baseline the Pure Drive delivers a lethal combination of power and spin. The fast feel and predictable response on full swings lend themselves perfectly to the powerful angular whip of the modern forehand. At net the Pure Drive's speed and put-away power make it a true weapon for aggressive doubles players, a fact not lost on the many ATP and WTA players who have used the Pure Drive. Ultimately this update is a fine addition to one of the game's most versatile and user-friendly player's racquets.", image_url: "http://img.tennis-warehouse.com/watermark/rs.php?path=BPDW-1.jpg&nw=350"})

WishlistItem.create({wishlist_id: 1, product_id: 1, purchaser_id: 2})
WishlistItem.create({wishlist_id: 1, product_id: 2, purchaser_id: 2})
WishlistItem.create({wishlist_id: 1, product_id: 3, purchaser_id: 3})

WishlistItem.create({wishlist_id: 2, product_id: 1})

sleep(2)
Friendship.create({user_id: 2, friend_id: 3, status: 1, action_user_id: 2})
Friendship.create({user_id: 3, friend_id: 2, status: 1, action_user_id: 2})
