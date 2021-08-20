class User < ApplicationRecord
  has_many :todo
  has_many :finance

  def total 
    self.finance.sum(:value)
  end
end
