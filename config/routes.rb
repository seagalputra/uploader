Rails.application.routes.draw do
  get 'storages/index'
  
  root 'storages#index'
end
