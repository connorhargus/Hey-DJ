class Api::NewplayController < ApplicationController

	skip_before_action :verify_authenticity_token

	def create
		name = params[:name]
		url = params[:url]
		#make song if url isn't already user
		@play = Play.new(author: name)

		song = Song.find_by url: url
		if(song == nil) 
			new_song = Song.create(title: "This is a title", url: url)
			Play.create(author: name, song_id: new_song.id, played: false)
		else 
			Play.create(author: name, song_id: song.id, played: false)
		end
		
		respond_to do |format|
			format.json { render json: @play}
		end
	end
end
