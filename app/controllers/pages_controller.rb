class PagesController < ApplicationController
  def home
  	@plays = []
  	Play.where(played: false).find_each do |play|
  		votes = Vote.where(play_id: play.id).all.length

  		song = Song.find(play.song_id)
  		@plays << {author: play.author, title: song.title, artist: song.artist, votes: votes, id: play.id, url: song.url}
		end

		@plays = @plays.sort {|left, right|
			-(left[:votes] <=> right[:votes])
		}

  end

  def about
  end
end
