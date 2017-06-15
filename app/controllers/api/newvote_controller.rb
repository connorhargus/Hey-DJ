class Api::NewvoteController < ApplicationController

	skip_before_action :verify_authenticity_token

	def create
		id = params[:id]

		# Create a vote corresponding with the upvoted play
		new_vote = Vote.create(play_id: id)

		respond_to do |format|
			format.json { render json: @play}
		end
	end
end
