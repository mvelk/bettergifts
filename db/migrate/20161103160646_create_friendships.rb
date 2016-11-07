class CreateFriendships < ActiveRecord::Migration[5.0]
  def change
    create_table :friendships do |t|
      t.integer :user_one_id, null: false
      t.integer :user_two_id, null: false
      t.integer :status, null: false
      t.integer :action_user_id, null: false
      t.timestamps
    end
    add_index :friendships, :user_one_id
    add_index :friendships, :user_two_id
    add_index :friendships, :action_user_id
  end
end
