class Topic < ApplicationRecord
  belongs_to :sub
  has_many :comments, dependent: :destroy

  validates :title, :desc, presence: true
  validates :desc, length: { maximum: 500 }
end
