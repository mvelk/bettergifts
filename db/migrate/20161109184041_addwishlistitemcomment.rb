class Addwishlistitemcomment < ActiveRecord::Migration[5.0]
  def change
    add_column :wishlist_items, :comment, :string
  end
end
