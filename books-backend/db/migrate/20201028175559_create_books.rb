class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :subtitle
      t.string :authors
      t.string :img
      t.text :description

      t.timestamps
    end
  end
end
