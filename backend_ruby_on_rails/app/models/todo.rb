class Todo < ApplicationRecord
  belongs_to :user

  scope :pending, -> {where done: true}
  scope :completed, -> {where done: false}

  def completed
    !done
  end

  def completed=(new_completed)
    self.done = !new_completed
  end
end
