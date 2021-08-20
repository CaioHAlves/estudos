class FinanceSerializer < ActiveModel::Serializer
  attributes :id, 
             :account, 
             :value, 
             :expiration_date

  has_many :user
end
