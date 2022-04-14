class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :user_id, :created_at, :updated_at, :user, :comments, :forum

  has_many :comments
end
