Rails.application.routes.draw do
  
  devise_for :users
  devise_for :employees, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :pages
  resources :quote
  resources :leads

  
  root 'leads#new'

  get 'index' => 'leads#new' # index
  get 'corporate' => 'pages#corporate' # corporate
  get 'residential' => 'pages#residential' # residential
  get 'quoteform' => 'quote#new' # quote form
  get 'login' => 'pages#login'
  get 'sign_up' => 'users#sign_up'
  get 'sign_in' => 'users#sign_in'
  get 'leads' => 'leads#new'
  get 'welcome' => 'watson#welcome'
  get 'interventions' => 'interventions#new'
  post 'interventions' => 'interventions#create'
  # get 'mediatest' => 'pages#mediatest'

  get 'get_buildings_by_customer/:customerID', to: 'buildings#get_buildings_by_customer'
  get 'get_batteries_by_building/:buildingID', to: 'batteries#get_batteries_by_building'
  get 'get_columns_by_battery/:batteryID', to: 'columns#get_columns_by_battery'
  get 'get_elevators_by_column/:columnID', to: 'elevators#get_elevators_by_column'

  # namespace :admin do
  #   resources :addresses do
  #     resources :customers do
  #       resources :buildings do
  #         resources :building_details
  #       end
  #     end
  #   end
  # end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
