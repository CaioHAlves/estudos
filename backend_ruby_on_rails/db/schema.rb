# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_18_114106) do

  create_table "finances", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "account", limit: 15, null: false
    t.decimal "value", precision: 15, scale: 2, null: false
    t.date "expiration_date"
    t.index ["user_id"], name: "index_finances_on_user_id"
  end

  create_table "todos", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "title", null: false
    t.string "description", limit: 250
    t.boolean "done", default: true, null: false
    t.date "created_at"
    t.datetime "updated_at", precision: 6
    t.index ["user_id"], name: "index_todos_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "finances", "users", on_delete: :cascade
  add_foreign_key "todos", "users", on_delete: :cascade
end
