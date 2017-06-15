class PagesController < ApplicationController
  def home
  	@plays = []
  	Play.where(played: false).find_each do |play|
  		song = Song.find(play.song_id)
  		@plays << {author: play.author, title: song.title, artist: song.artist, votes: 0}
		end
  end

  def about
  end
end
