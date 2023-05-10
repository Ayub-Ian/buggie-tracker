class Comment < ApplicationRecord
  belongs_to :issue
  belongs_to :user

  validates :comment, presence: true
end
