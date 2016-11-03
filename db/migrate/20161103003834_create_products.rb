class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.decimal :price, null: false
      t.string :short_desc, null: false
      t.text :full_desc
      t.string :image_url, null: false
      t.timestamps
    end
  end
end
