Rails.application.routes.draw do
  resources 'buckets'
  
  root 'buckets#index'
end
