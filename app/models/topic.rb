class Topic < ApplicationRecord
  belongs_to :sub

  validates :title, :desc, presence: true
  validates :desc, length: { maximum: 500 }
end
