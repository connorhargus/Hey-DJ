Rails.application.routes.draw do

  get '/new', to: 'plays#new'
  get '/about', to: 'pages#about'

  post '/api/newplay', to: 'api/newplay#create'
  post '/api/newvote', to: 'api/newvote#create'

	root 'pages#home'

end
