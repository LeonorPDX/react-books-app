class AddFormatDateToNotes < ActiveRecord::Migration[6.0]
  def change
    add_column :notes, :format_date, :string
  end
end
