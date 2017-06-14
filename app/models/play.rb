class Play < ApplicationRecord
	belongs_to :song
	has_many :votes
end
