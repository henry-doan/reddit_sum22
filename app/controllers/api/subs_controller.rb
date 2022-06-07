class Api::SubsController < ApplicationController
  # controller are for traffic direction for our actions 
  # actions, what you can do in a app, 
  # CRUD actions, create, read all elements, read a single element, update, destroy
  # all methods in the controllers will be an action 
  # methods must return one of the three things, html, xml, json, or redirect to a method that does
# index action, get request, grab all elements of the db 

# show actions, get request, grab one element, pass a id we want to show 

# create , post request, parameters, key value pairs of what the obj to be created  
                        # { title: 'Cooking' }
# update, put request, id know which we are updating, parameter of what we are updating 
                      # id: 4 { title: 'Cleaning' }

# destroy, delete request, id so it know which one it is you are deleting

# callbacks - trigger at a certain time, 
# before_action
# after_action
# skip_action

  # before_action :verify_paid # run for all actions 
  # before_action :verify_paid, only: [:create]
  # before_action :verify_paid, except: [:update, :destroy]

  # def verify_paid
  #   @paid = true
  # end

  # Pattern 
    # before_action :set_model_name, only: [:show, :update, :destroy]
  # def index 
  #   @model_names = Model_name.all 
  #   render json: @model_names
  # end

  # def show 
  #   #@model_name = Model_name.find(params[:id])
  #   render json: @model_name
  # end

  # def create 
  #   @model_name = Model_name.new(model_name_params)
  #   if @model_name.save 
  #     render json: @model_name
  #   else
  #     render json: { errors: @model_name.errors }, status: :unprocessable_entity
  #   end
  # end

  # def update 
  #   #@model_name = Model_name.find(params[:id])
  #   if @model_name.update(model_name_params)
  #     render json: @model_name
  #   else 
  #     render json: { errors: @model_name.errors }, status: :unprocessable_entity
  #   end
  # end

  # def destroy
  #   #@model_name = Model_name.find(params[:id])
  #   @model_name.destroy 
  #   render json: { message: 'Model name delete' } 
  # end

  # private 
    # def model_name_params
    #   params.require(:model_name).permit(:attr, :attr)
    # end

    # def set_model_name
    #   @model_name = Model_name.find(params[:id])
    # end

  # Sub -> Model name 

  before_action :set_sub, only: [:show, :update, :destroy]

  def index
    # @subs = Sub.all 
    # render json: @subs 
    render json: Sub.all 
  end

  def show
    # @sub = Sub.find(params[:id])
    render json: @sub
  end

  def create
    @sub = Sub.new(sub_params)
    if @sub.save 
      render json: @sub 
    else
      render json: { errors: @sub.errors }, status: :unprocessable_entity
    end
  end

  def update
    # @sub = Sub.find(params[:id])
    if @sub.update(sub_params)
      render json: @sub 
    else
      render json: { errors: @sub.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    # @sub = Sub.find(params[:id])
    @sub.destroy 
    render json: { message: 'Sub Deleted' }
    # or 
    # Sub.find(params[:id]).destroy
    # render json: { message: 'Sub Deleted' }
  end

  private 
    # private params, makes sure the fields are in the right format, datatype, key value pairs 
    #  anything else wont be permitted

    # { sub: { title: 'Cooking' }} permitted 
    # { sub: { title: 'Cooking', email: '123@email.com' }} notpermitted 
    # sub: { title: 'Cooking' }} not permitted
    # sub: { title: '' }} not permitted

    # pervent something called sql injection 
    # { sub: { title: 'SELECT * FROM USERS'}}

    # check your validation in the model 
    def sub_params
      params.require(:sub).permit(:title)
    end

    def set_sub 
      @sub = Sub.find(params[:id])
    end
end
