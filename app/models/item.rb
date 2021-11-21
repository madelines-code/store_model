class Item < ApplicationRecord
  belongs_to :store
  has_many :comments, dependent: :destroy
end
