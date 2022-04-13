class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :avatar_url, :btc_address, :eth_address

  has_many :favorites
  has_many :posts
  has_many :comments
end
