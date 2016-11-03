class CreateWishlists < ActiveRecord::Migration[5.0]
  def change
    create_table :wishlists do |t|
      t.string :title, null: false
      t.date :event_date, null: false
      t.integer :wisher_id, null: false
      t.boolean :archived, null: false, default: false
      t.text :description, null: false
      t.string :image_url, null: false
      t.timestamps
    end
    add_index :wishlists, [:wisher_id, :title]
    add_index :wishlists, :wisher_id
  end
end
