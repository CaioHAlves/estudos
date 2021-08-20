class UserSerializer < ActiveModel::Serializer
  attributes :name, 
             :email,
             :total

  def total 
    object.total
  end
end
