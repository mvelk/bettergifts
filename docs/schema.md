# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
imageurl        | string    |

## friendships
column name | data type | details
------------|-----------|-----------------------
user_id     | integer   | not null, composite key [friend_id]
friend_id   | integer   | not null, composite key [friend_id]

## wishlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
event_id    | integer   | not null, foreign key (references events), indexed
wisher_id   | integer   | not null, foreign key (references users), indexed
archived    | boolean   | not null, default: false

## wishlistitems
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
wishlist_id  | integer   | not null, foreign key (references wishlists), indexed
product_id   | integer   | not null, foreign key (references products), indexed
purchaser_id | integer   | foreign key (references users), indexed
purchased    | boolean   | not null, default: false

## products
column name  | data type    | details
-------------|--------------|-----------------------
id           | integer      | not null, primary key
name         | string       | not null
price        | money        | not null
shortdesc    | varchar(150) | not null
otherdetails | varchar(500) | not null
imageurl     | string       | not null

## events
column name  | data type    | details
-------------|--------------|-----------------------
id           | integer      | not null, primary key
title        | string       | not null
wisher_id    | money        | not null
shortdesc    | varchar(150) | not null
imageurl     | string       | not null

## tags
column name  | data type    | details
-------------|--------------|-----------------------
id           | integer      | not null, primary key
name         | string       | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
product_id  | integer   | not null, foreign key (references products), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
