Rails.application.routes.draw do
  # create all route using the table
  root "stores#index"
  get "/stores/new", to: "stores#new"
  post "/stores", to: "stores#create"
  get "/stores/:id", to: "stores#show"
  get "/stores/:id/edit", to: "stores#edit"
  post "/stores/:id", to: "stores#update"
  delete "/stores/:id", to: "stores#destroy"

  resources :stores do
    resources :items
  end
  
  resources :items do
    resources :comments
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
