class Play < ApplicationRecord
	belongs_to :song
	has_many :votes

	validates :author, presence: true
end
