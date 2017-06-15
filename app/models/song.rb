class Song < ApplicationRecord
	has_many :plays
	
	validates :title, presence: true
	validates :url, presence: true
	validates :artist, presence: true
end
