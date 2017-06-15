class Api::NewplayController < ApplicationController

	skip_before_action :verify_authenticity_token

	def create
		name = params[:name]
		url = params[:url]

		# If song has been submitted before, don't
		song = Song.find_by url: url
		if(song == nil) 
			new_song = Song.create(title: params[:title], artist: params[:artist], url: url)
			Play.create(author: name, song_id: new_song.id, played: false)
		else 
			Play.create(author: name, song_id: song.id, played: false)
		end
		
		respond_to do |format|
			format.json { render json: @play}
		end
	end
end
