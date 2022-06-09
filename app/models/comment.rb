class Comment < ApplicationRecord
  belongs_to :topic

  validates :author, :body, presence: true 
end
