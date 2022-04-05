class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.string :token
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
