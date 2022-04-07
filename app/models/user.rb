class User < ApplicationRecord

    has_many :posts, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :favorites, dependent: :destroy
    has_many :reputations, dependent: :destroy
    
    validates :username, uniqueness: true, length: { minimum: 4}
    validates :password, length: { minimum: 8, maximum: 20 }
    validates :email, uniqueness: true, presence: true

    has_secure_password
end