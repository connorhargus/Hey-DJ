Rails.application.routes.draw do

  get '/new', to: 'plays#new'
  get '/about', to: 'pages#about'

	root 'pages#home'

end
