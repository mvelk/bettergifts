# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161103003834) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "products", force: :cascade do |t|
    t.string   "name",       null: false
    t.decimal  "price",      null: false
    t.string   "short_desc", null: false
    t.text     "full_desc"
    t.string   "image_url",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                             null: false
    t.string   "email",                                                                null: false
    t.string   "password_digest",                                                      null: false
    t.string   "session_token",                                                        null: false
    t.string   "image_url",       default: "/app/assets/images/default_user_icon.png", null: false
    t.datetime "created_at",                                                           null: false
    t.datetime "updated_at",                                                           null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

  create_table "wishlist_items", force: :cascade do |t|
    t.integer  "wishlist_id",  null: false
    t.integer  "product_id",   null: false
    t.integer  "purchaser_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["purchaser_id"], name: "index_wishlist_items_on_purchaser_id", using: :btree
  end

  create_table "wishlists", force: :cascade do |t|
    t.string   "title",                       null: false
    t.date     "event_date",                  null: false
    t.integer  "wisher_id",                   null: false
    t.boolean  "archived",    default: false, null: false
    t.text     "description",                 null: false
    t.string   "image_url",                   null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.index ["wisher_id", "title"], name: "index_wishlists_on_wisher_id_and_title", using: :btree
    t.index ["wisher_id"], name: "index_wishlists_on_wisher_id", using: :btree
  end

end
