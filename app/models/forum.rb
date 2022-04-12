class Forum < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :users, through: :posts
    has_many :comments, through: :posts
    validates :title, presence: true, length: { minimum: 2 }, uniqueness: true
end
