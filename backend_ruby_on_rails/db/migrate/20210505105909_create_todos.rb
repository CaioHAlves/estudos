class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.references :user, null: false, foreign_key: { on_delete: :cascade }, index: true
      t.string :title, null: false
      t.string :description, :limit => 250
      t.boolean :done, null: false, default: true
      t.date :created_at
      t.datetime :updated_at, precision: 6
    end
  end
end
