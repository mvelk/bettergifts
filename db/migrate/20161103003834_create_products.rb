class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :asin_id, null: false
      t.string :medium_image, null: false
      t.string :large_image, null: false
      t.string :title, null: false
      t.string :brand, null: false
      t.string :color, null: false
      t.text :features, null: false
      t.string :price, null: false
      t.string :manufacturer, null: false
      t.string :manufacturer_part_num, null: false
      t.timestamps
    end
  end
end
