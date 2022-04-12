class Post < ApplicationRecord
  belongs_to :user
  belongs_to :forum
  has_many :comments, dependent: :destroy
  validates :title, presence: true, length: { minimum: 2 }
  validates :body, presence: true, length: { minimum: 2 }
end
