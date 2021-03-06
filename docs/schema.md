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
id          | integer   | not null, primary key
user1_id    | integer   | not null, composite index [user1_id, user2_id]
user2_id    | integer   | not null
status      | integer   | not null, default: 0

## wishlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
event_date  | date      | not null
wisher_id   | integer   | not null, foreign key (references users), indexed
archived    | boolean   | not null, default: false
description | text      | not null
imageurl    | string    |

## wishlistitems
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
wishlist_id  | integer   | not null, foreign key (references wishlists), indexed
product_id   | integer   | not null, foreign key (references products), indexed
purchaser_id | integer   | foreign key (references users), indexed

## products
column name  | data type    | details
-------------|--------------|-----------------------
id           | integer      | not null, primary key
name         | string       | not null
price        | decimal      | not null
shortdesc    | varchar(150) | not null
otherdetails | varchar(500) | not null
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
