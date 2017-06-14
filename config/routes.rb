Rails.application.routes.draw do

  get 'pages/about'

  get '/new', to: 'plays#new'

	root 'pages#home'

end
