class CreateWishlistItems < ActiveRecord::Migration[5.0]
  def change
    create_table :wishlist_items do |t|
      t.integer :wishlist_id, null: false
      t.integer :product_id, null: false
      t.integer :purchaser_id
      t.timestamps
    end
    add_index :wishlist_items, :purchaser_id
  end
end
