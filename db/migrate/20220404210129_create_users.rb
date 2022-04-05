class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :email
      t.string :avatar_url
      t.string :btc_address
      t.string :eth_address
      t.string :favorites
      t.integer :followers

      t.timestamps
    end
  end
end
