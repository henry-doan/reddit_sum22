Rails.application.routes.draw do
  # API Routes, connect and communicate with our backend 
  # lead into our controller, actions / method in our controller 
  #  only rails 
  # root 'controller#action' main page be a method in the controller 
  # later on we will have a place to be the home page 

  # point to the api folder
  # out here it would look for in the controller folder
  namespace :api do
    # use http verb to lead into the controller 
    # http    CRUD
    # GET  -> READ
    # POST -> CREATE
    # PUT / PATCH -> UPDATE
    # DELETE -> DESTROY
    # Custom route
    # httpVerb 'url pattern', to: 'controller#action'
    # get '/subs', to: 'subs#index'
    
    # resources :controllerName
    resources :subs do 
      resources :topics 
    end

    # resources :topics, except: [:index, :show, :create, :update, :destroy] do
    #   resources :comments 
    # end

    # resources :comments, except: [:index, :show, :create, :update, :destroy] do
    #   resources :likes
    # end

    # what not to do
    # resources :subs do 
    #   resources :topics do 
    #     resources :comments
    #   end
    # end

    # api routes, they would create for us a path way, http verb paired with 
    # the url pattern that would lead you in to the controller, lead into one of the methods
    # /api/subs/:id
    # :id 
    # :parent_id
    # place holders for actual ids for the obj

    # for your parent and child, you would need to do a do 
    # resources :parents do 
    #   resources :childs
    # end
    # only go two levels deep, if you go another level , then do another do
  end

end
