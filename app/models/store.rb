class Store < ApplicationRecord
  # dependent: :destroy will destroy all associated items of the destroyed
  has_many :items, dependent: :destroy
end
