class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :created_at, :user
end
