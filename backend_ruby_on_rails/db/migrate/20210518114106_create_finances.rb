class CreateFinances < ActiveRecord::Migration[6.0]
  def change
    create_table :finances do |t|
      t.references :user, null: false, foreign_key: { on_delete: :cascade }, index: true
      t.string :account, null: false, :limit => 15
      t.decimal :value, null: false, precision: 15, scale: 2
      t.date :expiration_date
      
    end
  end
end
