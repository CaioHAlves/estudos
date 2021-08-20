class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :done, :created_at, :updated_at
end
